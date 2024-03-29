import { CheckIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  List,
  ListIcon,
  ListItem,
  Select,
  Stack,
  StackDivider,
  Textarea,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export const ClaimDetailComponent = () => {
  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Siniestro
            </Heading>
            <Text pt="2" fontSize="sm" color={"blue.500"}>
              #20000001
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Cobertura
            </Heading>
            <Text pt="2" fontSize="sm">
              Robo
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Fecha de ocurrencia
            </Heading>
            <Text pt="2" fontSize="sm">
              13/03/2023
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Detalle
            </Heading>
            <Text pt="2" fontSize="sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              aperiam accusantium neque laudantium possimus tempora perspiciatis
              voluptates libero maxime non cum explicabo distinctio commodi,
              repellat praesentium officia dolores. Modi, obcaecati?
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Documentos enviados
            </Heading>
            <Stack divider={<StackDivider />} spacing="4">
              <List spacing={3}>
                <ListItem>
                  Formulario de denuncia del siniestro
                  <ListIcon as={CheckIcon} color="green.500" ml={4} />
                </ListItem>
                <ListItem>
                  Partida de defuncion certificada
                  <ListIcon as={CheckIcon} color="green.500" ml={4} />
                </ListItem>
                <ListItem>
                  Causa Penal
                  <ListIcon as={CheckIcon} color="green.500" ml={4} />
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  Declaración de beneficio original
                  <ListIcon as={CheckIcon} color="green.500" ml={4} />
                </ListItem>
              </List>
            </Stack>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Estado del siniestro
            </Heading>
            <Text pt="2" fontSize="sm">
              <Badge colorScheme="green">Reclamo en Revisión</Badge> /{" "}
              <Badge>En Espera Documentación</Badge>
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
        Ya estamos trabajando sobre tu Siniestro, revisá tu casilla de correo
        alejandro.rossi@assurant.com donde recibirás el avance de la gestión.
      </CardFooter>
    </Card>
  );
};
