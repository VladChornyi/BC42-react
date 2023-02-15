import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    // navigate("/", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ isAuth, name, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// export const AuthProvider = ({ children }) => {
//   const [isAuth, setIsAuth] = useState(false);

//   const login = (password) => {
//     if (password === "admin") {
//       setIsAuth(true);
//       confetti.run();
//     } else {
//       return alert("incorrect password");
//     }
//   };
//   const logout = () => {
//     setIsAuth(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuth, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
