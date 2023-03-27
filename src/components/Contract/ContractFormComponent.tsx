import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  FormHelperText,
  Stack,
  Container,
  Heading,
  Divider,
  Box,
  Image,
  Text,
  FormErrorMessage,
  HStack,
  Link,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  firstName: Yup.string().required("El nombre es requerido"),
  lastName: Yup.string().required("El apellido es requerido"),
  documentType: Yup.string().required("Debe seleccionar un tipo de documento"),
  documentNumber: Yup.string().required("El nro de documento es requerido"),
  phoneNumber: Yup.string().required("El nro de teléfono es requerido"),
  email: Yup.string()
    .email("Debe ser un email válido")
    .required("El Email es requerido"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(/(?=.*[0-9])/, "Debe contener al menos un número")
    .matches(/(?=.*[A-Z])/, "Debe contener al menos una letra mayúscula")
    .required("La contraseña es requerida"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), "Las contraseñas deben coincidir."],
      "Las contraseñas deben coincidir"
    )
    .required("Debe confirmar su contraseña"),
});

type DocumentType = "DNI" | "CUIT";

export default function ContractFormComponent() {
  const navigate = useNavigate();
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "10" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6" textAlign="center">
          <Image m={"auto"} src="../assets/assurant.png" w={10}></Image>

          <Divider></Divider>
        </Stack>
        <Box
          py={{ base: "0" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg-surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                documentType: "DNI",
                documentNumber: "",
                phoneNumber: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={schema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  navigate("/login");
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
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <Stack spacing="5">
                    <FormControl
                      isInvalid={!!errors.firstName && touched.firstName}
                    >
                      <FormLabel htmlFor="firstName">Nombre</FormLabel>
                      <Input
                        type="firstName"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        placeholder="Ingrese su nombre"
                      />
                      <FormErrorMessage>
                        {errors.firstName &&
                          touched.firstName &&
                          errors.firstName}{" "}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl
                      isInvalid={!!errors.lastName && touched.lastName}
                    >
                      <FormLabel htmlFor="lastName">Apellido</FormLabel>
                      <Input
                        type="lastName"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        placeholder="Ingrese su apellido"
                      />
                      <FormErrorMessage>
                        {errors.lastName && touched.lastName && errors.lastName}{" "}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.documentType && touched.documentType}
                    >
                      <FormLabel htmlFor="documentTypeId">
                        Tipo documento
                      </FormLabel>
                      <Select
                        id="documentTypeId"
                        placeholder="Selecciona un tipo de documento"
                      >
                        <option>DNI</option>
                        <option>CUIT</option>
                      </Select>
                      <FormErrorMessage>
                        {errors.documentType &&
                          touched.documentType &&
                          errors.documentType}
                      </FormErrorMessage>{" "}
                    </FormControl>
                    <FormControl
                      isInvalid={
                        !!errors.documentNumber && touched.documentNumber
                      }
                    >
                      <FormLabel htmlFor="documentNumber">
                        Tipo documento
                      </FormLabel>
                      <Input
                        type="documentNumber"
                        name="documentNumber"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.documentNumber}
                        placeholder="Ingrese número"
                      />
                      <FormErrorMessage>
                        {errors.documentNumber &&
                          touched.documentNumber &&
                          errors.documentNumber}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.phoneNumber && touched.phoneNumber}
                    >
                      <FormLabel htmlFor="phoneNumber">
                        Número de teléfono
                      </FormLabel>
                      <Input
                        type="phoneNumber"
                        name="phoneNumber"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneNumber}
                        placeholder="Ingrese teléfono"
                      />
                      <FormErrorMessage>
                        {errors.phoneNumber &&
                          touched.phoneNumber &&
                          errors.phoneNumber}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.email && touched.email}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Ingrese su email"
                      />
                      <FormErrorMessage>
                        {errors.email && touched.email && errors.email}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.password && touched.password}
                    >
                      <FormLabel htmlFor="password">Contraseña</FormLabel>
                      <Input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Ingrese su contraseña"
                      />

                      <FormErrorMessage>
                        {errors.password && touched.password && errors.password}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={
                        !!errors.confirmPassword && touched.confirmPassword
                      }
                    >
                      <FormLabel htmlFor="confirmPassword">
                        Confirmar contraseña
                      </FormLabel>
                      <Input
                        type="password"
                        name="confirmPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        placeholder="Confirmar contraseña"
                      />
                      <FormErrorMessage>
                        {errors.confirmPassword &&
                          touched.confirmPassword &&
                          errors.confirmPassword}
                      </FormErrorMessage>
                    </FormControl>
                  </Stack>
                  <Stack spacing="6" mt={5}>
                    <Button
                      colorScheme="green"
                      bg={"green.500"}
                      color="white"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Contratar
                    </Button>
                  </Stack>
                </form>
              )}
            </Formik>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
