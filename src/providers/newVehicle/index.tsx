import {
  useContext,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import axios from "axios";

export interface IVehicleRegister {
  newVehicle: Object;
  setNewVehicle: (vehicle: Object) => void;
}

export const NewVehicleContext = createContext({} as IVehicleRegister);

interface NewVehicleProviderProps {
  children: ReactNode;
}

export const NewVehicleProvider = ({ children }: NewVehicleProviderProps) => {
  const [newVehicle, setNewVehicle] = useState({});

  const createVehicle = () => {
    if(sessionStorage.getItem("user")){
    const token = JSON.parse(sessionStorage.getItem("user") || "");

    axios
      .post("http://localhost:3000/vehicle", newVehicle, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response.data));
    }else{
      console.log("não tem token")
    }
  };

  useEffect(() => {
    createVehicle();
  }, [newVehicle]);

  return (
    <NewVehicleContext.Provider value={{ newVehicle, setNewVehicle }}>
      {children}
    </NewVehicleContext.Provider>
  );
};

export const useNewVehicle = () => useContext(NewVehicleContext);
