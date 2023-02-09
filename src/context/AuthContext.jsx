import { createContext, useEffect, useState } from "react";
import { confetti } from "../components/Service/Confetti";
import { getLocalData } from "../helpers/getLocalData";

const AUTH_KEY = "auth";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return getLocalData(AUTH_KEY)?.isAuth ?? false;
  });
  const [name, setName] = useState(() => {
    return getLocalData(AUTH_KEY)?.name ?? "";
  });

  useEffect(() => {
    localStorage.setItem(AUTH_KEY, JSON.stringify({ isAuth, name }));
  }, [isAuth, name]);

  const login = (name, password) => {
    if (password === "123") {
      setIsAuth(true);
      setName(name);
      confetti.run();
    } else {
      return alert("Password should be 123 :)");
    }
  };

  const logout = () => {
    setIsAuth(false);
    setName("");
  };

  return (
    <AuthContext.Provider value={{ isAuth, name, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
