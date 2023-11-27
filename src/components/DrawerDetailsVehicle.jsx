/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Text,
} from "@chakra-ui/react";
import {
  FaCar,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPiggyBank,
} from "react-icons/fa";
import MapPoints from "./MapPoints";

const DrawerDetailsVehicle = ({ folioData, handleClicOnClose, isOpen }) => {
  let mensaje = { msg: "", color: "" };

  if (folioData != null) {
    switch (folioData.Status) {
      case "0":
        mensaje.msg = "Asignado";
        mensaje.color = "gray";
        break;
      case "1":
        mensaje.msg = "Registrado";
        mensaje.color = "blue";
        break;
      case "2":
        mensaje.msg = "Liberado";
        mensaje.color = "green";
        break;
    }
  }
  return (
    <>
      <Drawer onClose={handleClicOnClose} isOpen={isOpen} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white" />
          <DrawerHeader bg="blue.500" color="white">
            <Heading textAlign="center">Detalles de Registro</Heading>
          </DrawerHeader>
          <DrawerBody>
            <Box
              w="full"
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={{ base: "1", md: "5" }}
              mt="4"
              border="1px"
              borderColor="gray.200"
              boxShadow="lg"
            >
              <Box w="full">
                <Box
                  display="flex"
                  flexDir={{ base: "column", md: "row" }}
                  gap="2"
                >
                  <Box
                    w="full"
                    display="flex"
                    gap="3"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Badge>Folio:</Badge>
                    <Text>{folioData.Folio}</Text>
                  </Box>
                  <Box
                    w="full"
                    display="flex"
                    gap="3"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Badge>Estado:</Badge>
                    {mensaje && (
                      <Text fontWeight="semibold" color={mensaje.color}>
                        {mensaje.msg}
                      </Text>
                    )}
                  </Box>
                </Box>
                <Box
                  w="full"
                  display="flex"
                  gap="3"
                  pt="2.5"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Badge>Fecha Entrada:</Badge>
                  <Text>{folioData.FechaRegistro}</Text>
                </Box>
                <Box
                  w="full"
                  display="flex"
                  gap="3"
                  pt="2.5"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Badge>Fecha Salida:</Badge>
                  {folioData.FechaSalida === "" ? (
                    <Text fontWeight="semibold" color="red">
                      Pendiente
                    </Text>
                  ) : (
                    <Text>{folioData.FechaSalida}</Text>
                  )}
                </Box>
                <Accordion mt="2" defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        gap={3}
                        borderRadius="base"
                        bg="blue.400"
                        _hover={{ bg: "blue.500" }}
                        _expanded={{ bg: "blue.500" }}
                      >
                        <FaCar color="white" />
                        <Box
                          color="white"
                          fontSize="lg"
                          fontWeight="bold"
                          as="span"
                          flex="1"
                          textAlign="left"
                        >
                          Detalles Vehiculo
                        </Box>
                        <AccordionIcon color="white" />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      boxShadow="lg"
                      border="1px"
                      borderColor="gray.200"
                      pb={4}
                    >
                      <Box display="flex" flexDir="column" gap="1" w="full">
                        <Box
                          w="full"
                          display="flex"
                          gap="2"
                          justifyContent="flex-start"
                          alignItems="center"
                        >
                          <Badge>Tipo:</Badge>
                          <Text>{folioData.DetallesAutomovil.Tipo}</Text>
                        </Box>
                        <Box
                          w="full"
                          display="flex"
                          flexDir={{ base: "column", md: "row" }}
                          gap="2"
                          justifyContent="flex-start"
                          alignItems={{ base: "start", md: "center" }}
                        >
                          <Badge>Descripcion:</Badge>
                          <Text>{folioData.DetallesAutomovil.Descripcion}</Text>
                        </Box>
                        <Box
                          w="full"
                          display="flex"
                          gap="2"
                          justifyContent="flex-start"
                          alignItems="center"
                        >
                          <Badge>Placa:</Badge>
                          <Text>{folioData.DetallesAutomovil.NPlaca}</Text>
                        </Box>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        gap={3}
                        borderRadius="base"
                        bg="blue.400"
                        _hover={{ bg: "blue.500" }}
                        _expanded={{ bg: "blue.500" }}
                      >
                        <FaMapMarkedAlt color="white" />
                        <Box
                          as="span"
                          color="white"
                          fontSize="lg"
                          fontWeight="bold"
                          flex="1"
                          textAlign="left"
                        >
                          Lugar de Origen
                        </Box>
                        <AccordionIcon color="white" />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      boxShadow="lg"
                      border="1px"
                      borderColor="gray.200"
                      pb={4}
                    >
                      <Box
                        w="full"
                        display="flex"
                        flexDir={{ base: "column", md: "row" }}
                        alignItems={{ base: "start", md: "center" }}
                        gap="2"
                        justifyContent="flex-start"
                      >
                        <Badge>Dirección:</Badge>
                        <Text>{folioData.Origen.Direccion}</Text>
                      </Box>
                      <Box
                        display="flex"
                        flexDir={{ base: "column", md: "row" }}
                        gap="1"
                        w="full"
                        justifyContent="center"
                        alignItems="center"
                        mt={{ base: "1", md: "3" }}
                      >
                        <Box w="full" display="flex" flexDir="column" gap="1">
                          <Box
                            w="full"
                            display="flex"
                            gap="2"
                            justifyContent="flex-start"
                            alignItems="center"
                          >
                            <Badge>Colonia:</Badge>
                            <Text>{folioData.Origen.Colonia}</Text>
                          </Box>
                          <Box
                            w="full"
                            display="flex"
                            gap="2"
                            justifyContent="flex-start"
                            alignItems="center"
                          >
                            <Badge>Municipio:</Badge>
                            <Text>{folioData.Origen.Municipio}</Text>
                          </Box>
                          <Box
                            w="full"
                            display="flex"
                            gap="2"
                            justifyContent="flex-start"
                            alignItems="center"
                          >
                            <Badge>Codigo Postal:</Badge>
                            <Text>{folioData.Origen.CP}</Text>
                          </Box>
                          <Box
                            w="full"
                            display="flex"
                            gap="2"
                            justifyContent="flex-start"
                            alignItems="center"
                          >
                            <Badge>Latitud:</Badge>
                            <Text>{folioData.Origen.Latitud}</Text>
                          </Box>
                          <Box
                            w="full"
                            display="flex"
                            gap="2"
                            justifyContent="flex-start"
                            alignItems="center"
                          >
                            <Badge>Longitud:</Badge>
                            <Text>{folioData.Origen.Longitud}</Text>
                          </Box>
                        </Box>
                        <Box
                          w="full"
                          h={{ base: "25vh", md: "50vh" }}
                          borderRadius="lg"
                        >
                          <MapPoints coordinates={folioData.Origen} />
                        </Box>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        gap={3}
                        borderRadius="base"
                        bg="blue.400"
                        _hover={{ bg: "blue.500" }}
                        _expanded={{ bg: "blue.500" }}
                      >
                        <FaMapMarkerAlt color="white" />
                        <Box
                          as="span"
                          color="white"
                          fontSize="lg"
                          fontWeight="bold"
                          flex="1"
                          textAlign="left"
                        >
                          Corralon Asignado
                        </Box>
                        <AccordionIcon color="white" />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      boxShadow="lg"
                      border="1px"
                      borderColor="gray.200"
                      pb={4}
                    >
                      <Box
                        w="full"
                        display="flex"
                        flexDir={{ base: "column", md: "row" }}
                        alignItems={{ base: "start", md: "center" }}
                        gap="2"
                        justifyContent="flex-start"
                      >
                        <Badge>Dirección:</Badge>
                        <Text>{folioData.CorralonAsignado.Direccion}</Text>
                      </Box>
                      <Box
                        display="flex"
                        flexDir={{ base: "column", md: "row" }}
                        alignItems={{ base: "start", md: "center" }}
                        gap="1"
                        w="full"
                        justifyContent="center"
                        mt="3"
                      >
                        <Box w="full" display="flex" flexDir="column" gap="1">
                          <Box
                            w="full"
                            display="flex"
                            gap="2"
                            justifyContent="flex-start"
                            alignItems="center"
                          >
                            <Badge>Nombre:</Badge>
                            <Text>{folioData.CorralonAsignado.Nombre}</Text>
                          </Box>
                          <Box
                            w="full"
                            display="flex"
                            gap="2"
                            justifyContent="flex-start"
                            alignItems="center"
                          >
                            <Badge>Región:</Badge>
                            <Text>{folioData.CorralonAsignado.Region}</Text>
                          </Box>
                          <Box
                            w="full"
                            display="flex"
                            gap="2"
                            justifyContent="flex-start"
                            alignItems="center"
                          >
                            <Badge>Contacto:</Badge>
                            <Text>{folioData.CorralonAsignado.Contacto}</Text>
                          </Box>
                          <Box
                            w="full"
                            display="flex"
                            gap="2"
                            justifyContent="flex-start"
                            alignItems="center"
                          >
                            <Badge>Celular:</Badge>
                            <Text>{folioData.CorralonAsignado.Celular}</Text>
                          </Box>
                          <Box
                            w="full"
                            display="flex"
                            gap="2"
                            justifyContent="flex-start"
                            alignItems="center"
                          >
                            <Badge>Latitud:</Badge>
                            <Text>{folioData.CorralonAsignado.Latitud}</Text>
                          </Box>
                          <Box
                            w="full"
                            display="flex"
                            gap="2"
                            justifyContent="flex-start"
                            alignItems="center"
                          >
                            <Badge>Longitud:</Badge>
                            <Text>{folioData.CorralonAsignado.Longitud}</Text>
                          </Box>
                          <Box
                            w="full"
                            display="flex"
                            gap="2"
                            justifyContent="flex-start"
                            alignItems="center"
                          >
                            <Badge>Distancia:</Badge>
                            <Text>{folioData.CorralonAsignado.Distancia}m</Text>
                          </Box>
                        </Box>
                        <Box
                          w="full"
                          h={{ base: "25vh", md: "50vh" }}
                          borderRadius="lg"
                        >
                          <MapPoints coordinates={folioData.CorralonAsignado} />
                        </Box>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        gap={3}
                        borderRadius="base"
                        bg="blue.400"
                        _hover={{ bg: "blue.500" }}
                        _expanded={{ bg: "blue.500" }}
                      >
                        <FaPiggyBank color="white" />
                        <Box
                          as="span"
                          color="white"
                          fontSize="lg"
                          fontWeight="bold"
                          flex="1"
                          textAlign="left"
                        >
                          Costos
                        </Box>
                        <AccordionIcon color="white" />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      boxShadow="lg"
                      border="1px"
                      borderColor="gray.200"
                      pb={4}
                    >
                      <Box px={{ base: "0", md: "8" }}>
                        <Box>
                          <Text
                            textAlign="center"
                            fontSize="lg"
                            fontWeight="bold"
                          >
                            Resumen de Costos:
                          </Text>
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="space-evenly"
                          alignItems="center"
                        >
                          <Badge colorScheme="blue">Cobro por Distancia:</Badge>
                          <Text fontWeight="light">
                            ${folioData.Costos.Distancia} pesos
                          </Text>
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="space-evenly"
                          alignItems="center"
                        >
                          <Badge colorScheme="blue">
                            Cobro por Tipo Grua ({folioData.TipoGrua}):
                          </Badge>
                          <Text fontWeight="light">
                            ${folioData.Costos.TipoGrua} pesos
                          </Text>
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="space-evenly"
                          alignItems="center"
                        >
                          <Badge colorScheme="blue">Cobro por Estancia:</Badge>
                          {folioData.Costos.Estancia === "" ? (
                            <Text color="red" fontWeight="semibold">
                              Pendiente
                            </Text>
                          ) : (
                            <Text fontWeight="light">
                              ${folioData.Costos.Estancia} pesos
                            </Text>
                          )}
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="space-evenly"
                          alignItems="center"
                        >
                          <Badge colorScheme="blue">Cobro por Maniobra:</Badge>
                          {folioData.Costos.Maniobras === "" ? (
                            <Text color="red" fontWeight="semibold">
                              Pendiente
                            </Text>
                          ) : (
                            <Text fontWeight="light">
                              ${folioData.Costos.Maniobras} pesos
                            </Text>
                          )}
                        </Box>
                        <Box>
                          {folioData.Costos.Estancia === "" ? (
                            <Text
                              color="red"
                              pt="2"
                              textAlign="end"
                              fontWeight="semibold"
                            >
                              Total: Pendiente
                            </Text>
                          ) : (
                            <Text pt="2" fontWeight="semibold" textAlign="end">
                              Total: ${folioData.Costos.Total} pesos
                            </Text>
                          )}
                        </Box>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Box>
          </DrawerBody>
          <DrawerFooter
            display="flex"
            justifyContent="center"
            borderTopWidth="1px"
          >
            <Button
              w="full"
              colorScheme="red"
              boxShadow="md"
              onClick={handleClicOnClose}
            >
              Cancelar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerDetailsVehicle;
