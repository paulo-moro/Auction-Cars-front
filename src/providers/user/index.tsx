import { Context, createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";


export const UserContext = createContext({});

interface CreateUserProviderProps{
    children: any;
}

const UserProvider = ({ children }: CreateUserProviderProps) => {

    const [userCreate, setUserCreate] = useState({});

    const createUser = () => {
        axios.post("http://localhost:3000/users/register", userCreate)
    }

    useEffect(() => {
        createUser();
    },[userCreate]);

    return(
        <UserContext.Provider value={{ userCreate, setUserCreate }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
