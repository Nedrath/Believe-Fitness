import { createContext, useState, useEffect } from "react";
import { navigate, Redirect } from "@reach/router";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (username && password) {
      fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `username=${username}&password=${password}`,
      })
        .then((response) => response.json())
        .then((result) => {
          sessionStorage.setItem("token", result.token);
          window.location.replace("/home");
        })
        .catch((err) => console.error(err));
    }
  }, [username, password]);

  const logout = () => {
    sessionStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ setUsername, setPassword, token, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
