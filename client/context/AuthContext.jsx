"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [jwt, setJwt] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setJwt(token);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (data) => {
    setJwt(data.jwt);
    setUser(data.user);

    localStorage.setItem("token", data.jwt);

    localStorage.setItem("user", JSON.stringify(data.user));
  };

  const logout = () => {
    setJwt(null);
    setUser(null);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        jwt,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
