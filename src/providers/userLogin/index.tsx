import { useContext, createContext, useEffect, useState } from "react";
import { UserProviderProps } from "../../interface/user";
import axios from "axios";
import { ILoginState } from "../../interface/user"


export const LoginUserContext = createContext({} as ILoginState);

export const LoginUserProvider = ({ children }: UserProviderProps) => {

  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .post("http://localhost:3000/login", user)
      .then((response) =>
        sessionStorage.setItem("user", JSON.stringify(response.data.token))
      );
  }, [user]);

  return (<LoginUserContext.Provider value={{ user, setUser }}>{children}</LoginUserContext.Provider>)};

export const useLogin = () => useContext(LoginUserContext);
