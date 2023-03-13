import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";
import { StepsTheme as Steps } from "chakra-ui-steps";
import Navbar from "./components/NavBar/Navbar";
import { CertificatesView } from "./pages/Certificates";
import { ClaimCreatedView } from "./pages/Claims";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { AuthProvider, useAuth } from "./contexts/Auth";
import PrivateRoute from "./routes/PrivateRoutes";
import { Fragment } from "react";
import { Login } from "./pages/Login/login";
import Layout from "./components/Layout/Layout";

const theme = extendTheme({
  components: {
    Steps,
  },
});

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Fragment>
            <Layout></Layout>
          </Fragment>
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
};
