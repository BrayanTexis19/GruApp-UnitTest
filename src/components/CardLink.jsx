/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Button, Text, Icon } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

const CardLink = ({ element }) => {
    const navigation = useNavigate();
    return (
        <Box
            display="flex"
            flexDir="column"
            bg="blue.400"
            p="4"
            color="white"
            h="auto"
            w={{ base: "100%", md: "30%" }}
            borderRadius="base"
            boxShadow="lg"
        >
            <Box
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Text fontSize="xl">{element.title}</Text>
                <Icon
                    boxSize={10}
                    as={element.icon}
                />
            </Box>
            <Box display="flex" flexDir="column" gap="2" p="2">
                <Text fontSize="sm" textAlign="center" p="2" fontWeight="light">
                    {element.description}
                </Text>
                <Button
                    onClick={() => navigation(`${element.path}`)}
                    variant="outline"
                    _hover={{ color: "blue.300", bg: "blue.200" }}
                    border="2px"
                    color="white"
                    colorScheme="blue"
                >
                    <Text color="white">Ir a {element.title}</Text>
                </Button>
            </Box>
        </Box>
    )
}

export default CardLink