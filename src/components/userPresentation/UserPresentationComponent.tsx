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
import { useAuth } from "../../contexts/Auth";

export const UserPresentationComponent = () => {
  const { getUserInformation } = useAuth();

  return (
    <Card align="left">
      <CardHeader>
        <Heading size="md"> Hola {getUserInformation()}!</Heading>
      </CardHeader>
      <CardBody>
        <Text align={"left"}>
          En Assurant protegemos lo que más importa. En esta sección podes
          gestionar tus seguros.
        </Text>
      </CardBody>
    </Card>
  );
};
