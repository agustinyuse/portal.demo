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
  Select,
  Stack,
  StackDivider,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useState } from "react";
import LoremIpsum from "react-lorem-ipsum";
import { FormModal } from "../Modals/FormModal";
import { OpenAIChatComponent } from "../OpenAi/OpenAiChatComponent";

export const ClaimCreateComponent = () => {
  const [observation, setObservation] = useState<string>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSetObservation = (observation: string) => {
    setObservation(observation);
    onClose();
  };

  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <FormControl>
            <FormLabel htmlFor="coverageId">Cobertura</FormLabel>
            <Select id="coverageId" placeholder="Selecciona una cobertura">
              <option>Robo Bolso Protegido</option>
              <option>Robo Dispositivos Moviles</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="dateTimeId">Fecha de ocurrencia</FormLabel>
            <Input
              placeholder="Fecha de ocurrencia"
              size="md"
              type="datetime-local"
              id="dateTimeId"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="observation">Detalle del siniestro</FormLabel>
            <Textarea
              placeholder="Ingrese detalle sobre el siniestro"
              value={observation}
            />
          </FormControl>
          <FormModal
            buttonToOpenText="¿ Necesita alguna sugerencia ?"
            headerText="Sugerencias para detallar un siniestro"
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
            children={
              <OpenAIChatComponent
                buttonDefaultQuestionText="Sugerencia de como detallar el reclamo de un siniestro"
                handleSetMessage={onSetObservation}
              ></OpenAIChatComponent>
            }
          ></FormModal>
        </Stack>
      </CardBody>
    </Card>
  );
};
