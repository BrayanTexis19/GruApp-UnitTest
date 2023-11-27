/* eslint-disable no-unused-vars */
import {
  useDisclosure,
  InputRightElement,
} from "@chakra-ui/react";
import {
  Box,
  Center,
  Image,
  Heading,
  Avatar,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Text,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import marker from "../assets/gruapp_rc_2.svg";
import logo from "../assets/gruapp.jpg";
import { Icon } from "@chakra-ui/react";
import { MdPerson, MdSearch, MdSecurity } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getRegisterInfo, userExists } from "../firebase/firebase";
import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import DrawerDetailsVehicle from "./DrawerDetailsVehicle";

const LoginContainer = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPass, seTuserPass] = useState("");
  const [messageError, setmessageError] = useState("");
  const [folioInput, setFolioInput] = useState("");
  const [folioData, setFolioData] = useState(null);
  const [isSearchFolio, setisSearchFolio] = useState(false);
  const [displayInput, setDisplayInput] = useState(false);
  // * Componentes Chakra UI
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onToggle } = useDisclosure();

  useEffect(() => {
    if (messageError !== "") {
      const timeout = setTimeout(() => {
        setmessageError("");
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [messageError]);

  const handleClickSearch = () => {
    setDisplayInput(!displayInput);
  };

  const showToast = (title, description, status, duration) => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: duration,
      isClosable: true,
      position: "top",
    });
  };

  const handleSearch = async () => {
    if (folioInput === "")
      return showToast(
        "Upps... Ocurrio un error",
        "Es necesario escribir un numero de placa.",
        "error",
        4000
      );
    const folio = await getRegisterInfo(folioInput);
    if (!folio) {
      setFolioInput("");
      return showToast(
        "Upps... Ocurrio un error",
        "No existen coincidencias con el numero de placa: " + folioInput,
        "error",
        4000
      );
    }
    setFolioData(folio);
    setFolioInput("");
    onToggle();
    onOpen();
  };

  const handleInputChange = (setterFunction) => (e) => {
    setterFunction(e.target.value);
  };

  const handleclickAuth = async () => {
    setisSearchFolio(true);
    if (userEmail == "" && userPass == "")
      return setmessageError("Ingrese datos al formulario");
    if (userEmail == "") return setmessageError("Debe ingresar un email");
    if (userPass == "") return setmessageError("Debe ingresar una contraseña");

    const userExist = await userExists(userEmail, userPass);
    if (userExist != null) {
      window.localStorage.setItem("sessionUser", JSON.stringify(userExist));
      navigate("/");
    } else {
      setmessageError("Credenciales incorrectas");
    }
  };

  const handleClicOnClose = () => {
    setFolioInput("");
    setFolioData(null);
    onClose();
  };

  return (
    <>
      <Box
        h="100vh"
        w="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        bgGradient="linear(to-l, blue.500, blue.400, blue.600)"
      >
        <Box
          display="flex"
          flexDir={{ base: "column", sm: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={{ base: "3", sm: "3", md: "5" }}
          h="auto"
          w="full"
          p="4"
          bg="whiteAlpha.500"
          boxShadow="lg"
          mb="4"
        >
          <Box
            display="flex"
            gap={{ base: "2", sm: "3", md: "2" }}
            alignItems="center"
            justifyContent="center"
          >
            <Image
              boxShadow="lg"
              h="50px"
              objectFit="cover"
              src={logo}
              align="logo"
              borderRadius="full"
            />
            <Heading
              size="xl"
              fontWeight="extrabold"
              bgGradient="linear(to-t, white, whiteAlpha.900)"
              bgClip="text"
              pl={{ base: "1", sm: "1", md: "2" }}
            >
              GruApp
            </Heading>
          </Box>
          <Box
            display="flex"
            flexDir={{ base: "column", sm: "column", md: "row" }}
            gap="3"
          >
            <Button
              onClick={handleClickSearch}
              boxShadow="lg"
              w="full"
              color="white"
              _hover={{ color: "blue.500", background: "white" }}
              bg="blue.500"
            >
              ¿Donde esta mi auto?
            </Button>
            {displayInput && (
              <InputGroup>
                <Input
                  value={folioInput}
                  onChange={handleInputChange(setFolioInput)}
                  w="auto"
                  bg="white"
                  variant="outline"
                  placeholder="Ingresa tu folio"
                />
                <InputRightElement>
                  <Box
                    onClick={handleSearch}
                    _hover={{ bg: "blue.300" }}
                    bg="blue.400"
                    w="full"
                    h="full"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Icon as={MdSearch} boxSize="5" color="white" />
                  </Box>
                </InputRightElement>
              </InputGroup>
            )}
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent={{ base: "center", sm: "center", md: "space-between" }}
          alignItems="center"
          h={{ base: "auto", md: "80vh" }}
          width="90%"
        >
          <Center
            h="auto"
            w="50%"
            p={5}
            mx="2"
            display={{ base: "none", sm: "none", md: "block" }}
          >
            <Image
              w="100%"
              h="100%"
              src={marker}
              alt="Fondo1"
              objectFit="cover"
            />
          </Center>
          <Box
            mt={{ base: "3", md: "0" }}
            h="auto"
            w={{ base: "100%", md: "40%" }}
            bg="whiteAlpha.900"
            borderRadius="base"
            boxShadow="2xl"
          >
            <Box
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="#5DADE2"
              borderTopRadius="base"
            >
              <Heading fontWeight="semibold" color="white">
                Bienvenido
              </Heading>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p="4"
              justifyContent="center"
              alignItems="center"
              gap="3"
            >
              <Text fontWeight="light" fontSize="larger">
                Inicio de sesión
              </Text>
              <Avatar src="https://bit.ly/broken-link" />
              <InputGroup>
                <InputLeftElement>
                  <Icon as={MdPerson} color="gray.500" />
                </InputLeftElement>
                <Input
                  onChange={handleInputChange(setUserEmail)}
                  placeholder="Usuario"
                  size="md"
                  variant="filled"
                  border="1px"
                  borderColor="gray.400"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement>
                  <Icon as={MdSecurity} color="gray.500" />
                </InputLeftElement>
                <Input
                  onChange={handleInputChange(seTuserPass)}
                  placeholder="Contraseña"
                  type="password"
                  size="md"
                  variant="filled"
                  border="1px"
                  borderColor="gray.400"
                />
              </InputGroup>
              {messageError != "" && (
                <Alert status="error">
                  <AlertIcon />
                  <AlertTitle>Upps, Ocurrio un error!</AlertTitle>
                  <AlertDescription>{messageError}</AlertDescription>
                </Alert>
              )}
              <Button
                onClick={handleclickAuth}
                colorScheme="blue"
                w="100%"
                my="5"
                boxShadow="lg"
              >
                Ingresar
              </Button>
            </Box>
          </Box>
        </Box>
        {folioData && (
          <DrawerDetailsVehicle
            folioData={folioData}
            handleClicOnClose={handleClicOnClose}
            isOpen={isOpen}
          />
        )}
      </Box>
    </>
  );
};

export default LoginContainer;
