import {
  useContext,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import axios from "axios";

export interface IRegisterState {
  userCreate: Object;
  setUserCreate: (data: Object) => void;
}

export const RegisterUserContext = createContext({} as IRegisterState);

interface CreateRegisterUserProviderProps {
  children: ReactNode;
}

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