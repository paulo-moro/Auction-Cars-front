import { ReactNode } from "react";

export interface UserProviderProps {
    children: ReactNode;
}

export interface IRegisterState{
    userCreate: Object;
    setUserCreate: (data: Object) => void;
}

export interface ILoginState{
    user: Object;
    setUser: (data: Object) => void;
}
