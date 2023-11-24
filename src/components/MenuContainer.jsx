import { Box, Heading } from "@chakra-ui/react";
import { MdSupervisedUserCircle, MdCarRepair } from "react-icons/md";
import { FiFileText, FiTruck } from "react-icons/fi";
import { useState } from "react";
import CardLink from "./CardLink";

const DataCardPermission = [
  {
    title: "Usuarios",
    description: "Gestión de datos de los usuarios del sistema",
    path: "/Usuarios",
    icon: MdSupervisedUserCircle
  },
  {
    title: "Corralones",
    description: "Gestión de cada uno de los corralones por región",
    path: "/Corralones",
    icon: FiTruck
  },
  {
    title: "Registros",
    description: "Administración de registros, cotización y liberación",
    path: "/Registros",
    icon: FiFileText
  },
  {
    title: "Asignacion de Corralón",
    description: "Trazado de rutas, corralon mas cercano, cotización de costos",
    path: "/Trazado-Rutas",
    icon: MdCarRepair
  },
]

const DataCard = [
  {
    title: "Registros",
    description: "Administración de registros, cotización y liberación",
    path: "/Registros",
    icon: FiFileText
  },
  {
    title: "Asignacion de Corralón",
    description: "Trazado de rutas, corralon mas cercano, cotización de costos",
    path: "/Trazado-Rutas",
    icon: MdCarRepair
  },
]

const MenuContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState(
    JSON.parse(window.localStorage.getItem("sessionUser"))
  );

  return (
    <Box w="full" h="auto" bg="white" mt="1">
      <Heading size="lg" fontWeight="medium" p="2">Menu de opciones:</Heading>
      <Box display="flex" flexDir={{ base: "column", md: "row" }} p="2" gap="3" flexWrap="wrap">
        {userData && (
          userData.Rol === "Admin" ? (
            <>
              {DataCardPermission.map((element, index) => (
                <CardLink key={index} element={element} />
              ))}
            </>
          ) : (
            <>
              {DataCard.map((element, index) => (
                <CardLink key={index} element={element} />
              ))}
            </>
          )
        )}
      </Box>
    </Box>
  );
};

export default MenuContainer;
