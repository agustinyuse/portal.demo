import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcBriefcase,
  FcCellPhone,
  FcCollaboration,
  FcDonate,
  FcManager,
  FcMoneyTransfer,
} from "react-icons/fc";
import { FaCreditCard } from "react-icons/fa";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Link to={href}>
      <Box
        maxW={{ base: "full", md: "275px" }}
        w={"full"}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
      >
        <Stack align={"start"} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            color={"white"}
            rounded={"full"}
            bg={useColorModeValue("gray.100", "gray.700")}
          >
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={"sm"}>
              {description}
            </Text>
          </Box>
        </Stack>
      </Box>
    </Link>
  );
};

export default function Ofertas() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Contratar Seguros
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Protegemos lo que es más importante para vos
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Robo Celulares"}
            icon={<Icon as={FcCellPhone} w={10} h={10} />}
            description={"En la vía pública ..."}
            href={"/Planes"}
          />
          <Card
            heading={"Robo en Cajero"}
            icon={<Icon as={FcMoneyTransfer} w={10} h={10} />}
            description={"Protección de Extracción en Cajero"}
            href={"/Planes"}
          />
          <Card
            heading={"Bolso"}
            icon={<Icon as={FcBriefcase} w={10} h={10} />}
            description={"Protección Bolso"}
            href={"/Planes"}
          />
          <Card
            heading={"Desempleo"}
            icon={<Icon as={FaCreditCard} w={10} h={10} />}
            description={"Cubirmos el Saldo de tu tarjeta"}
            href={"/Planes"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
