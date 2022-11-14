import { useContext, createContext, useEffect, useState } from "react";
import { UserProviderProps, IUserState } from "../../interface/user";
import axios from "axios";
import { useModal } from "../modal/index";

export const UserContext = createContext({} as IUserState);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState({});
  const [userCreate, setUserCreate] = useState({});
  const [getUser, setGetUser] = useState(false);

  const { showModalSucess } = useModal();

  useEffect(() => {
    axios
      .post("http://localhost:3000/users/register", userCreate)
      .then(() => showModalSucess());
  }, [userCreate]);


  useEffect(() => {
    if (sessionStorage.getItem("user")) {
    const token = JSON.parse(sessionStorage.getItem("user") || "");
    console.log(token)
    axios
      .get("http://localhost:3000/users/vehicles", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      });
  }
}, [getUser])

  return (
    <UserContext.Provider value={{ setGetUser, userCreate, setUserCreate, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
