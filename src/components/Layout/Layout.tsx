// HoC -> withAlgo...  FUNCION

import { Box } from "@chakra-ui/react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import { CertificatesView } from "../../pages/Certificates";
import { ClaimCreatedView } from "../../pages/Claims";
import { Login } from "../../pages/Login/login";
import PrivateRoute from "../../routes/PrivateRoutes";
import { Footer } from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";

const Layout = ({ children }: any) => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn());

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
        {isLoggedIn() && <Footer></Footer>}
      </Box>
    </>
  );
};

export default Layout;
