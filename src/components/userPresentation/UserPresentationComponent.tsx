import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export const UserPresentationComponent = () => (
  <Card align="left">
    <CardHeader>
      <Heading size="md"> Hola Juan!</Heading>
    </CardHeader>
    <CardBody>
      <Text align={"left"}>
        En Assurant protegemos lo que más importa. En esta sección podes
        gestionar tus seguros.
      </Text>
    </CardBody>
    <CardFooter>
      <Button colorScheme="blue">View here</Button>
    </CardFooter>
  </Card>
);
