import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { useState } from "react";

const cancelationReasons: any[] = [
  {
    cancelationReasonId: 1,
    cancelationDescription: "Me di cuenta que no lo necesitaba",
  },
  {
    cancelationReasonId: 2,
    cancelationDescription: "Lo contraté pero me arrepentí",
  },
  {
    cancelationReasonId: 3,
    cancelationDescription: "Reducción de gastos",
  },
  {
    cancelationReasonId: 4,
    cancelationDescription: "Tengo un seguro similar de otra compañía",
  },
  {
    cancelationReasonId: 5,
    cancelationDescription: "No estoy conforme con el servicio",
  },
  {
    cancelationReasonId: 6,
    cancelationDescription: "No estoy conforme con el servicio",
  },
  {
    cancelationReasonId: 7,
    cancelationDescription: "Otro",
  },
];

export const CancelationCertificateView = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">Cancelación del certificado</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Formik
                initialValues={{
                  cancelationReasonId: 0,
                  cancelationObservation: "",
                }}
                validate={(values) => {
                  const errors: any = {};
                  if (
                    !values.cancelationReasonId ||
                    values.cancelationReasonId === 0
                  ) {
                    errors.cancelationReasonId = "Required";

                    return errors;
                  }
                  if (
                    values.cancelationReasonId == 7 &&
                    (!values.cancelationObservation ||
                      values.cancelationObservation === "")
                  ) {
                    errors.cancelationObservation =
                      "Debe ingresar un comentario";
                    return errors;
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setShowAlert(true);
                  setTimeout(() => {
                    setSubmitting(false);
                    values.cancelationReasonId = 0;
                    values.cancelationObservation = "";
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  getFieldProps,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <SimpleGrid spacing={4}>
                      <FormControl
                        isInvalid={
                          !!errors.cancelationReasonId &&
                          touched.cancelationReasonId
                        }
                      >
                        <FormLabel htmlFor="cancelatioReasonId">
                          Motivo de cancelación
                        </FormLabel>
                        <Select
                          id="cancelatioReasonId"
                          placeholder="Selecciona un motivo de cancelación"
                          {...getFieldProps("cancelationReasonId")}
                        >
                          {cancelationReasons.map((cancelationReason: any) => (
                            <option
                              key={cancelationReason.cancelationReasonId}
                              value={cancelationReason.cancelationReasonId}
                            >
                              {cancelationReason.cancelationDescription}
                            </option>
                          ))}
                        </Select>
                        <FormErrorMessage>
                          Debe seleccionar un motivo de cancelación
                        </FormErrorMessage>
                      </FormControl>

                      {values.cancelationReasonId == 7 && (
                        <FormControl
                          isInvalid={
                            values.cancelationReasonId == 7 &&
                            touched.cancelationObservation
                          }
                        >
                          <FormLabel htmlFor="cancelationObservation">
                            Observación
                          </FormLabel>
                          <Textarea
                            h={300}
                            placeholder="Puede detallar el mótivo de la cancelación"
                            name="cancelationObservation"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="cancelationObservation"
                            value={values.cancelationObservation}
                          />
                          <FormErrorMessage>
                            Debe ingresar un comentario
                          </FormErrorMessage>
                        </FormControl>
                      )}

                      <Box display={"flex"} justifyContent={"right"}>
                        <Button as="button" type="submit" colorScheme="blue">
                          Enviar
                        </Button>
                      </Box>
                    </SimpleGrid>
                  </form>
                )}
              </Formik>
            </Box>
          </Stack>

          {showAlert && (
            <Stack spacing={3} mt="2">
              <Alert status="success">
                <AlertIcon />
                Nuestro equipo de atenciòn al cliente ya està trabajando en tu
                solicitud. Sì queres hablar con alguno de nuestros
                representantes podes hacerlo a travès de nuestro canal de
                Whatsapp.
              </Alert>
            </Stack>
          )}
        </CardBody>
      </Card>
    </>
  );
};
