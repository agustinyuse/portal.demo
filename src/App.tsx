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
import { CertificatesView } from "./pages/Certificates";
import { ClaimCreatedView } from "./pages/Claims";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";

const theme = extendTheme({
  components: {
    Steps,
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Box m={5}>
        <Navbar></Navbar>
        <Box mt={5} mb={5}>
          <Routes>
            <Route path="/" element={<CertificatesView />} />
            <Route path="/certificates" element={<CertificatesView />} />
            <Route path="/create-claim" element={<ClaimCreatedView />} />
          </Routes>
        </Box>
        <Footer></Footer>
      </Box>
    </BrowserRouter>
  </ChakraProvider>
);
