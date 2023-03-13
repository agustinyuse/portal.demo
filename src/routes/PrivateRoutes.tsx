import { Navigate, Outlet, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/NavBar/Navbar";
import { useAuth } from "../contexts/Auth";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn() ? (
    <>
      <Outlet></Outlet>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
