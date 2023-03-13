import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { useAuth } from "../../contexts/Auth";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";

export const AuthComponent = () => {
  const { login } = useAuth();

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6" textAlign="center">
          <Image m={"auto"} src="../assets/assurant.png" w={10}></Image>
          <Heading size={{ base: "xs", md: "sm" }}>
            <Text fontSize="1.5rem">Ingrese al portal</Text>
          </Heading>
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
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors: any = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  login();
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
                    <FormControl>
                      <FormLabel htmlFor="email">Usuario</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email && touched.email && errors.email}
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="password">Contraseña</FormLabel>
                      <Input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {errors.password && touched.password && errors.password}
                    </FormControl>
                  </Stack>
                  <HStack justify="space-between" mt={5}>
                    <Button variant="link" colorScheme="blue" size="sm">
                      Olvidó su usuario?
                    </Button>
                    <Button variant="link" colorScheme="blue" size="sm">
                      Olvidó su contraseña?
                    </Button>
                  </HStack>
                  <Stack spacing="6" mt={5}>
                    <Button colorScheme="green" bg={"green.500"} color="white">
                      Iniciar Sesión
                    </Button>
                  </Stack>
                  <Stack
                    spacing={{ base: "2", md: "3" }}
                    textAlign="center"
                    mt={5}
                  >
                    <HStack spacing="1" justify="center">
                      <Text color="muted">No tiene una cuenta ?</Text>
                      <Button
                        variant="link"
                        colorScheme="blue"
                        disabled={isSubmitting}
                        type="submit"
                      >
                        Registrese ahora
                      </Button>
                    </HStack>
                  </Stack>
                </form>
              )}
            </Formik>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
