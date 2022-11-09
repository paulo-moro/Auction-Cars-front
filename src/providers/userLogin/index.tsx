import { useContext, createContext, useEffect, useState } from "react";
import { UserProviderProps } from "../../interface/user";
import axios from "axios";
import { ILoginState } from "../../interface/user"
import { useModal } from '../modal/index';


export const LoginUserContext = createContext({} as ILoginState);

export const LoginUserProvider = ({ children }: UserProviderProps) => {

  const [user, setUser] = useState({});

  const { hideModalLogin, showModalSucess } = useModal();
  

  useEffect(() => {
    axios
      .post("http://localhost:3000/login", user)
      .then((response) => {
        hideModalLogin();
        sessionStorage.setItem("user", JSON.stringify(response.data.token));
      });
    }, [user]);

  return (<LoginUserContext.Provider value={{ user, setUser }}>{children}</LoginUserContext.Provider>)};

export const useLogin = () => useContext(LoginUserContext);
