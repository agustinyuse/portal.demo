import {
  ChakraProvider,
  Box,
  extendTheme,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";
import { StepsTheme as Steps } from "chakra-ui-steps";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import Navbar from "./components/NavBar/Navbar";
const theme = extendTheme({
  components: {
    Steps,
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box m={5}>
      <Navbar></Navbar>

      <Box mt={5}>
        <RouterProvider router={router}></RouterProvider>
      </Box>
    </Box>
  </ChakraProvider>
);
