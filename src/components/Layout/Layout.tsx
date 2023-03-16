// HoC -> withAlgo...  FUNCION

import { Box, Button, defineStyleConfig, IconButton } from "@chakra-ui/react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import { CertificatesView } from "../../pages/Certificates";
import { ClaimCreatedView } from "../../pages/Claims";
import { Login } from "../../pages/Login/login";
import PrivateRoute from "../../routes/PrivateRoutes";
import { Footer } from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import { FaWhatsapp } from "react-icons/fa";
import { CancelationCertificateView } from "../../pages/Certificates/Cancelation/Cancelation";

const Layout = ({ children }: any) => {
  const { isLoggedIn } = useAuth();

  const openWhatsApp = () => {
    window.open("https://wa.me/+541145576576?text=testeando");
  };

  return (
    <>
      <Box m={5}>
        {isLoggedIn() && <Navbar></Navbar>}

        <Box mt={5} mb={5}>
          <Routes>
            <Route path="/certificates" element={<PrivateRoute />}>
              <Route path="/certificates" element={<CertificatesView />} />
            </Route>

            <Route path="/certificates/:id" element={<PrivateRoute />}>
              <Route path="/certificates/:id" element={<CertificatesView />} />
            </Route>
            <Route path="/certificates/:id" element={<PrivateRoute />}>
              <Route path="/certificates/:id/cancelation" element={<CancelationCertificateView />} />
            </Route>
            <Route
              path="/certificates/:id/createclaim"
              element={<PrivateRoute />}
            >
              <Route
                path="/certificates/:id/createclaim"
                element={<ClaimCreatedView />}
              />
            </Route>

            <Route path="*" element={<Navigate to="/certificates" replace />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
        {isLoggedIn() && (
          <Box display={"flex"} justifyContent={"right"}>
            <IconButton
              variant="outline"
              colorScheme="whatsapp"
              aria-label="WhatsApp"
              height="50px"
              bottom="70px"
              zIndex={100}
              pos="fixed"
              border={0}
              onClick={() => openWhatsApp()}
              icon={<FaWhatsapp size={50} />}
            />
          </Box>
        )}

        {isLoggedIn() && <Footer></Footer>}
      </Box>
    </>
  );
};

export default Layout;
