import { AttachmentIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListIcon,
  ListItem,
  Select,
  Stack,
  StackDivider,
  Textarea,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import LoremIpsum from "react-lorem-ipsum";

export const ClaimCoverageDocComponent = () => (
  <Card>
    <CardBody>
      <Stack divider={<StackDivider />} spacing="4">
        <List spacing={3}>
          <ListItem>
            Formulario de denuncia del siniestro
            <ListIcon as={AttachmentIcon} color="blue.500" ml={4} />
          </ListItem>
          <ListItem>
            Partida de defuncion certificada
            <ListIcon as={AttachmentIcon} color="blue.500" ml={4} />
          </ListItem>
          <ListItem>
            Causa Penal
            <ListIcon as={AttachmentIcon} color="blue.500" ml={4} />
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            Declaración de beneficio original
            <ListIcon as={AttachmentIcon} color="blue.500" ml={4} />
          </ListItem>
        </List>
      </Stack>
    </CardBody>
  </Card>
);
