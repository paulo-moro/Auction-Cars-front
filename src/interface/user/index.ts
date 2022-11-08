import { ReactNode } from "react";

export interface IRegisterState {
    userCreate: Object;
    setUserCreate: (data: Object) => void;
  }
  
  export interface CreateRegisterUserProviderProps {
    children: ReactNode;
  }