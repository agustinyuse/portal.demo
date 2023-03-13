import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";
import { StepsTheme as Steps } from "chakra-ui-steps";
import Navbar from "./components/NavBar/Navbar";
import { CertificatesView } from "./pages/Certificates";
import { ClaimCreatedView } from "./pages/Claims";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
            <Route path="/certificates" element={<CertificatesView />} />
            <Route path="/certificates/:id" element={<ClaimCreatedView />} />
            <Route
              path="/certificates/:id/createclaim"
              element={<ClaimCreatedView />}
            />
            <Route path="*" element={<Navigate to="/certificates" replace />} />
          </Routes>
        </Box>
        <Footer></Footer>
      </Box>
    </BrowserRouter>
  </ChakraProvider>
);
