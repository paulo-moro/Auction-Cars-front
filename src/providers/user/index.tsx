import { useContext, createContext, useEffect, useState } from "react";
import { UserProviderProps, IRegisterState } from "../../interface/user";
import axios from "axios";
import { useModal } from '../modal/index';

export const RegisterUserContext = createContext({} as IRegisterState);

export const RegisterUserProvider = ({
  children
}: UserProviderProps) => {

  const [userCreate, setUserCreate] = useState({});
  const { showModalSucess } = useModal();

  useEffect(() => {
    axios.post("http://localhost:3000/users/register", userCreate)
    .then(() => showModalSucess());
    
  }, [userCreate]);

  return (
    <RegisterUserContext.Provider value={{ userCreate, setUserCreate }}>
      {children}
    </RegisterUserContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterUserContext);