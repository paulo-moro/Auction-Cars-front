import { useContext, createContext, useEffect, useState } from "react";
import { UserProviderProps } from "../../interface/user";
import { IModalState } from "../../interface/modal";

export const ModalContext = createContext({} as IModalState);

export const ModalUserProvider = ({ children }: UserProviderProps) => {
  const [inOnRegister, setInOnRegister] = useState(false);
  const [inOnSucess, setInOnSucess] = useState(false);
  const [inOnLogin, setInOnLogin] = useState(false);
  const [inOnAnnouncement, setInOnAnnouncement] = useState(false);

  const showModalAnnouncement = () => {
    setInOnAnnouncement(true);
    console.log("showModalAnnouncement");
    return true;
  };

  const hideModalAnnouncement = () => {
    setInOnAnnouncement(false);
    return false;
  };

  const showModalLogin = () => {
    setInOnLogin(true);
    return true;
  };

  const hideModalLogin = () => {
    setInOnLogin(false);
    return false;
  };

  const showModalRegister = () => {
    setInOnRegister(true);
    return true;
  };

  const hideModalRegister = () => {
    setInOnRegister(false);
    return false;
  };

  const showModalSucess = () => {
    setInOnSucess(true);
    return true;
  };

  const hideModalSucess = () => {
    setInOnSucess(false);
    return false;
};

return (
    <ModalContext.Provider
    value={{
        
        inOnLogin,
        setInOnLogin,
        hideModalLogin,
        showModalLogin,
        
        inOnAnnouncement,
        setInOnAnnouncement,
        hideModalAnnouncement,
        showModalAnnouncement,
        
        inOnRegister,
        setInOnRegister,
        showModalRegister,
        hideModalRegister,
        
        inOnSucess,
        setInOnSucess,
        showModalSucess,
        hideModalSucess,
        
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

export {};
