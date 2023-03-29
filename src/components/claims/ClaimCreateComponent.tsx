import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormControl,
  FormErrorMessage,
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
import { Formik, useFormik } from "formik";
import { useEffect, useState } from "react";
import { DrawerComponent } from "../Drawers/DrawerComponent";
import {
  IButtonsDefaultQuestionText,
  OpenAIChatComponent,
} from "../OpenAi/OpenAiChatComponent";

const values = [
  {
    id: 1,
    valueToShow: "Que información tengo que incluir",
    value:
      "Que información tengo que incluir para respaldar la denuncia de un siniestro relacionado con una cobertura de #coverage#",
  },
  {
    id: 2,
    valueToShow: "Necesito ayuda para redactar el siniestro",
    value:
      "Un ejemplo de denuncia de siniestro para una cobertura de tipo #coverage# sin dar detalles precisos del lugar con formato de template",
  },
];

const coverages = [
  {
    id: 1,
    value: "Robo Bolso Protegido",
  },
  {
    id: 2,
    value: "Robo Dispositivos Moviles",
  },
  {
    id: 3,
    value: "INVALIDEZ TOTAL Y PERMANENTE POR ACCIDENTE",
  },
];

export const ClaimCreateComponent = () => {
  const [buttonsDefaultQuestionText, setButtonsDefaultQuestionText] = useState<
    IButtonsDefaultQuestionText[]
  >([]);

  const formik = useFormik({
    initialValues: { coverageId: 0, dateTime: "", observation: "" },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(
          `${values.coverageId}, ${values.dateTime}, ${values.observation}`
        );
        setSubmitting(false);
      }, 400);
    },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSetObservation = (observation: string) => {
    const { setFieldValue } = formik;
    setFieldValue("observation", observation);
    onClose();
  };

  useEffect(() => {
    const newButtonsDefaultQuestionText: any = values.map(
      (button: IButtonsDefaultQuestionText) => {
        let coverage = coverages.find((p) => p.id == formik.values.coverageId);

        if (coverage) {
          console.log(coverage);
          const newValue = button.value.replace("#coverage#", coverage.value);

          return { ...button, value: newValue };
        }

        return button;
      }
    );

    setButtonsDefaultQuestionText([...newButtonsDefaultQuestionText]);
  }, [formik.values.coverageId]); // La dependencia es "miPropiedad"

  return (
    <Card>
      <CardBody>
        <Stack spacing="4">
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing="5">
              <FormControl
                isInvalid={
                  !!formik.errors.coverageId && formik.touched.coverageId
                }
              >
                <FormLabel htmlFor="coverageId">
                  Motivo de cancelación
                </FormLabel>
                <Select
                  id="coverageId"
                  placeholder="Selecciona una cobertura"
                  {...formik.getFieldProps("coverageId")}
                >
                  {coverages.map((coverage: any) => (
                    <option key={coverage.id} value={coverage.id}>
                      {coverage.value}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>
                  Debe seleccionar un motivo de cancelación
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="dateTime">Contraseña</FormLabel>
                <Input
                  type="date"
                  name="dateTime"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dateTime}
                />
                {formik.errors.dateTime &&
                  formik.touched.dateTime &&
                  formik.errors.dateTime}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="observation">
                  Detalle del siniestro
                </FormLabel>
                <Textarea
                  h={300}
                  name="observation"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="observation"
                  placeholder="Ingrese detalles del siniestro"
                  value={formik.values.observation}
                />
              </FormControl>
            </Stack>
          </form>
          <DrawerComponent
            buttonToOpenText="¿ Necesitas asistencia ?"
            headerText="Asistencia para detallar el siniestro"
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
            size="md"
            children={
              <OpenAIChatComponent
                buttonsDefaultQuestionText={buttonsDefaultQuestionText}
                handleSetMessage={onSetObservation}
              ></OpenAIChatComponent>
            }
          ></DrawerComponent>
        </Stack>
      </CardBody>
    </Card>
  );
};
