/* eslint-disable react/prop-types */
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Highlight,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
  FiHome,
  FiUsers,
  FiFileText,
  FiTruck,
  FiMenu,
  FiChevronDown,
  FiTrendingUp,
} from "react-icons/fi";
import { Link, Outlet, useNavigate } from "react-router-dom";

const LinkItemsPermission = [
  { name: "Home", icon: FiHome, url: "/" },
  { name: "Usuarios", icon: FiUsers, url: "/Usuarios" },
  { name: "Corralones", icon: FiTruck, url: "/Corralones" },
  { name: "Registros", icon: FiFileText, url: "/Registros" },
  { name: "Asignación de corralón", icon: FiTrendingUp, url: "/Trazado-Rutas" },
];

const LinkItems = [
  { name: "Home", icon: FiHome, url: "/" },
  { name: "Registros", icon: FiFileText, url: "/Registros" },
  { name: "Asignación de corralón", icon: FiTrendingUp, url: "/Trazado-Rutas" },
];

const HomeContainer = () => {
  const [control, setcontrol] = useState(false)
  const [userData, setUserData] = useState(
    JSON.parse(window.localStorage.getItem("sessionUser"))
  );
  const navigate = useNavigate();

  const onCloseControl = () => {
    setcontrol(false);
  } 

  const onOpenControl = () => {
    setcontrol(true);
  } 

  useEffect(() => {
    if (!userData) {
      navigate("/login");
    }
  }, [userData, navigate]);

  const handleDeletSesion = () => {
    setUserData(null);
    window.localStorage.removeItem("sessionUser");
    navigate("/login");
  };

  return (
    <Box minH="100vh" bg={useColorModeValue("white", "white")}>
      <SidebarContent
        onClose={onCloseControl}
        userData={userData}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={control}
        placement="left"
        onClose={onCloseControl}
        returnFocusOnClose={false}
        onOverlayClick={onCloseControl}
        size="full"
      >
        <DrawerContent>
          <SidebarContent userData={userData} onClose={onCloseControl} />
        </DrawerContent>
      </Drawer>

      {!control && (
            <MobileNav
            onOpen={onOpenControl}
            userData={userData}
            handleDeletSesion={handleDeletSesion}
          />
      )}
      <Box ml={{ base: 0, md: 60 }} p="1" bg="white">
        <Outlet />
      </Box>
    </Box>
  );
};

const SidebarContent = ({ userData, onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.200")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Highlight
          query={["GruApp"]}
          styles={{
            rounded: "base",
            bg: "blue.300",
            px: "3",
            color: "white",
            fontSize: "2xl",
            fontFamily: "monospace",
            fontWeight: "bold",
          }}
        >
          GruApp
        </Highlight>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {userData &&
        (userData.Rol === "Admin"
          ? LinkItemsPermission.map((link, index) => (
              <Link key={index} to={link.url}>
                <NavItem key={link.name} icon={link.icon} onClick={onClose}>
                  {link.name}
                </NavItem>
              </Link>
            ))
          : LinkItems.map((link, index) => (
              <Link key={index} to={link.url}>
                <NavItem key={link.name} icon={link.icon} onClick={onClose}>
                  {link.name}
                </NavItem>
              </Link>
            )))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "blue.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ userData, handleDeletSesion, onOpen }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      borderColor="blue.500"
      height="20"
      alignItems="center"
      bgGradient="linear(to-t, blue.500, blue.400)"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("white", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-between" }}
    >
      <Text fontWeight="semibold" color="white" fontSize="larger">
        Dashboard
      </Text>
      <IconButton
        display={{ base: "flex", md: "none" }}
        color="gray.400"
        bg="white"
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
        color={{base: "white", md: "white"}}
      >
        GruApp
      </Text>

      <HStack
        spacing={{ base: "0", md: "6" }}
        _hover={{ bg: "blue.300" }}
        p="1.5"
        borderRadius="base"
        boxShadow="lg"
      >
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} src="https://bit.ly/broken-link" />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  {userData && (
                    <Box>
                      <Text fontSize="sm" color="white">
                        {userData.Nombre} {userData.ApellidoP}
                      </Text>
                      <Text fontSize="xs" color="white">
                        {userData.Rol}
                      </Text>
                    </Box>
                  )}
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown color="white" />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem onClick={handleDeletSesion} _hover={{ bg: "blue.300" }}>
                Cerra Sesión
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default HomeContainer;
