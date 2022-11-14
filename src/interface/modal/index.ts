export interface Modalprops {
    handleShow: () => Boolean
    handleHidden: () => Boolean
    statusModal?: Boolean
    openModal?: Boolean
}


export interface IModalState{
    
    openModal?: Boolean;
    inOnRegister: Boolean;
    inOnSucess: Boolean;
    inOnLogin: Boolean;
    inOnAnnouncement: Boolean;
    
    setOpenModal?: (data: boolean) => void;
    setInOnRegister: (data: boolean) => void;
    setInOnSucess: (data: boolean) => void;
    setInOnLogin: (data: boolean) => void;
    setInOnAnnouncement: (data: boolean) => void;

    handleShow?: () => Boolean;
    handleHidden?: () => Boolean;
    
    hideModalAnnouncement: () => Boolean;
    showModalAnnouncement: () => Boolean;
    
    showModalRegister: () => Boolean;
    hideModalRegister: () => Boolean;
    
    showModalSucess: () => Boolean;
    hideModalSucess: () => Boolean;

    hideModalLogin: () => Boolean;
    showModalLogin: () => Boolean;
}