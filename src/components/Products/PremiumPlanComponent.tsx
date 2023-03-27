import { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Link,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

function BoxOfertas({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

/* eslint-disable @typescript-eslint/no-unused-expressions */
const products = [
  {
    codigo: "AC4",
    Descripcion: "Robo Celulares",
    SumaAsegurada: "$ 15000",
    Premio: "300",
    Caracteristicas: [
      "Hasta $500 suma asegurada",
      "Carencia 1 mes",
      " 3 eventos por año",
    ],
    isPopular: false,
  },
  {
    codigo: "AC5",
    Descripcion: "Robo Celulares + Bolso",
    SumaAsegurada: "$ 20000",
    Premio: "500",
    Caracteristicas: [
      "Hasta $500 suma asegurada",
      "Carencia 1 mes",
      " 3 eventos por año",
    ],
    isPopular: true,
  },
  {
    codigo: "AC6",
    Descripcion: "Robo Total",
    SumaAsegurada: "$ 30000",
    Premio: "600",
    Caracteristicas: [
      "Robo Bolso",
      "Robo en Cajero",
      "Robo Dispositivos",
      "Hasta $500 suma asegurada",
      "Carencia 1 mes",
      " 3 eventos por año",
    ],
    isPopular: false,
  },
];

export default function PremiumPlanComponent() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Selecciona el tipo de Seguro según tus necesidades
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          Lo debitaremos desde tu Tarjeta de Crédito
        </Text>
      </VStack>

      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        {products &&
          products.map((product: any) => (
            <BoxOfertas key={product.codigo}>
              <Box position="relative">
                {product.isPopular && (
                  <Box
                    position="absolute"
                    top="-16px"
                    left="50%"
                    style={{ transform: "translate(-50%)" }}
                  >
                    <Text
                      textTransform="uppercase"
                      bg={"red.300"}
                      px={3}
                      py={1}
                      color={"gray.900"}
                      fontSize="sm"
                      fontWeight="600"
                      rounded="xl"
                    >
                      Más Contratado
                    </Text>
                  </Box>
                )}

                <Box py={4} px={12}>
                  <Text fontWeight="500" fontSize="2xl">
                    {product.Descripcion}
                  </Text>
                  <HStack justifyContent="center">
                    <Text fontSize="3xl" fontWeight="600">
                      $
                    </Text>
                    <Text fontSize="5xl" fontWeight="900">
                      {product.Premio}
                    </Text>
                    <Text fontSize="3xl" color="gray.500">
                      /mes
                    </Text>
                  </HStack>
                </Box>

                <VStack py={4} borderBottomRadius={"xl"}>
                  <List spacing={3} textAlign="start" px={12}>
                    {product.Caracteristicas.map((caracteristica: string) => (
                      <ListItem>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        {caracteristica}
                      </ListItem>
                    ))}
                  </List>
                  <Box w="80%" pt={7}>
                    <Link as={RouterLink} to={"/Contract"}>
                      <Button
                        w="full"
                        colorScheme="red"
                        variant={product.isPopular ? "solid" : "outline"}
                      >
                        Contratar
                      </Button>
                    </Link>
                  </Box>
                </VStack>
              </Box>
            </BoxOfertas>
          ))}
      </Stack>
    </Box>
  );
}
