// HoC -> withAlgo...  FUNCION

import { Box, Button } from "@chakra-ui/react";
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
import { ClaimDetail } from "../../pages/Claims/ClaimDetail";
import { Products } from "../../pages/Products";

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
              <Route
                path="/certificates/:id/cancelation"
                element={<CancelationCertificateView />}
              />
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
            <Route path="/claims/:id/" element={<PrivateRoute />}>
              <Route path="/claims/:id/" element={<ClaimDetail />} />
            </Route>

            <Route path="/products" element={<PrivateRoute />}>
              <Route path="/products" element={<Products />} />
            </Route>

            <Route path="*" element={<Navigate to="/certificates" replace />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
        {isLoggedIn() && (
          <Box display={"flex"} justifyContent={"right"}>
            <Button
              height="50px"
              bottom="10px"
              zIndex={100}
              pos="fixed"
              colorScheme="whatsapp"
              leftIcon={<FaWhatsapp />}
              onClick={() => openWhatsApp()}
            >
              ¿ Necesitas Ayuda ?
            </Button>
          </Box>
        )}

        {isLoggedIn() && <Footer></Footer>}
      </Box>
    </>
  );
};

export default Layout;
