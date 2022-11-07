import {
  useContext,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import axios from "axios";

  export interface IVehicle{
    id: string;
    heading: string;
    status: string;
    year: string;
    km: string;
    price: string;
    description: string;
    published: Boolean;
    img: string;
    created_at: string;
    updated_at: string;
    categorieId: string;
    userId: string;
  }

export interface IVehicleList {
  listVehicle: IVehicle[];
  setListVehicle?: (vehicles: IVehicle[]) => void;
}

export const ListVehicleContext = createContext({} as IVehicleList);

interface ListVehicleProviderProps {
  children: ReactNode;
}

export const ListVehicleProvider = ({ children }: ListVehicleProviderProps) => {
  const [listVehicle, setListVehicle] = useState([]);

  axios
    .get("http://localhost:3000/vehicle")
    .then((response) => setListVehicle(response.data));

  return (
    <ListVehicleContext.Provider value={{listVehicle}}>
      {children}
    </ListVehicleContext.Provider>
  );
};

export const useListVehicle = () => useContext(ListVehicleContext);
