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
                  debugger;
                  const errors: any = {};
                  if (
                    !values.cancelationReasonId ||
                    values.cancelationReasonId === 0
                  ) {
                    errors.cancelationReasonId = "Required";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setShowAlert(true);
                  setTimeout(() => {
                    setShowAlert(false);

                    setSubmitting(false);
                    values.cancelationReasonId = 0;
                    values.cancelationObservation = "";
                  }, 3000);
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
                      <FormControl>
                        <FormLabel htmlFor="cancelationObservation">
                          Observación:
                        </FormLabel>
                        <Textarea
                          name="cancelationObservation"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="cancelationObservation"
                          value={values.cancelationObservation}
                        />
                      </FormControl>
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
            <Stack spacing={3}>
              <Alert status="success">
                <AlertIcon />
                La cancelación está en proceso
              </Alert>
            </Stack>
          )}
        </CardBody>
      </Card>
    </>
  );
};
