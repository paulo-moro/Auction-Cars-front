import {
  useContext,
  createContext,
  useEffect,
  useState,
} from "react";
import { CreateRegisterUserProviderProps, IRegisterState } from "../../interface/user";
import axios from "axios";

export const RegisterUserContext = createContext({} as IRegisterState);

export const RegisterUserProvider = ({
  children,
}: CreateRegisterUserProviderProps) => {
  const [userCreate, setUserCreate] = useState({});

  const createUser = () => {
    axios.post("http://localhost:3000/users/register", userCreate);
  };

  useEffect(() => {
    createUser();
  }, [userCreate]);

  return (
    <RegisterUserContext.Provider value={{ userCreate, setUserCreate }}>
      {children}
    </RegisterUserContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterUserContext);