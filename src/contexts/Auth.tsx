import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>(null);
const { Provider } = AuthContext;

export const AuthProvider = ({ children }: any) => {
  const isLoggedIn = () => {
    if (localStorage.getItem("auth")) return true;
    return false;
  };

  const login = async () => {
    /*
    const {
      data: { jwt },
    } = await API.post("auth", { username, password });
    if (jwt) {
      setAuth({ jwt });
      localStorage.setItem("auth", jwt);
      return jwt;
    } else {
      return null;
    }*/

    localStorage.setItem("auth", "token");
    window.location.replace("/certificates");

    return "token";
  };

  const logout = () => {
    localStorage.removeItem("auth");
    window.location.replace("/login");
  };

  //const getUserInformation = () => jwt_decode(state.jwt);
  const getUserInformation = () => "Juan Palotes";

  const setAuth = () => localStorage.setItem("auth", "token");

  return (
    <Provider
      value={{
        setAuth,
        logout,
        login,
        getUserInformation,
        isLoggedIn,
      }}
    >
      {children}
    </Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be wrapped witn AuthProvider");
  return context;
};
