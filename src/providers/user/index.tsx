import { useContext, createContext, useEffect, useState } from "react";
import { UserProviderProps, IUserState } from "../../interface/user";
import axios from "axios";
import { useModal } from "../modal/index";
import { toast } from 'react-toastify';

export const UserContext = createContext({} as IUserState);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState({});
  const [userCreate, setUserCreate] = useState({});
  const [getUser, setGetUser] = useState(false);
  const [userLogin, setUserLogin] = useState({});

  const { hideModalLogin, showModalSucess } = useModal();

  const LoginFunction = () => {

    axios
    .post("http://localhost:3000/login", userLogin)
    .then((response) => {
      setGetUser(true);
      hideModalLogin();
      toast.success('Login realizado com sucesso!');
      sessionStorage.setItem("user", JSON.stringify(response.data.token))
    })
    .catch(() => toast.error('Algo deu errado!'));
}


  useEffect(() => {
    
    axios
      .post("http://localhost:3000/users/register", userCreate)
      .then(() => {
        toast.success('Usuário criado!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        showModalSucess()
  })
  // .catch((error) => toast.error(error.message))
  ;
  }, [userCreate]);


  useEffect(() => {
    if (sessionStorage.getItem("user")) {
    const token = JSON.parse(sessionStorage.getItem("user") || "");
    axios
      .get("http://localhost:3000/users/vehicles", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        
        setUser(response.data);
      }).catch((error) => toast.error("Algo deu errado"));
  }
}, [getUser])

  return (
    <UserContext.Provider value={{ setGetUser, userCreate, setUserCreate, user, setUser, setUserLogin, LoginFunction }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
