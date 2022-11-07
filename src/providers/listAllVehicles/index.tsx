import { useContext, createContext, useState } from "react";
import { IVehicleList, ListVehicleProviderProps } from "../../interface/vehicle/index"
import axios from "axios";

export const ListVehicleContext = createContext({} as IVehicleList);

export const ListVehicleProvider = ({ children }: ListVehicleProviderProps) => {
  const [listVehicles, setListVehicles] = useState([]);
  const [listCars, setListCars] = useState([]);
  const [listMotorcycles, setListMotorcycles] = useState([]);

  axios
    .get("http://localhost:3000/vehicle")
    .then((response) => setListVehicles(response.data));

  axios
    .get("http://localhost:3000/categorie/car")
    .then((response) => setListCars(response.data));

  axios
    .get("http://localhost:3000/categorie/motorcycle")
    .then((response) => setListMotorcycles(response.data));

  return (
    <ListVehicleContext.Provider
      value={{ listVehicles, listCars, listMotorcycles }}
    >
      {children}
    </ListVehicleContext.Provider>
  );
};

export const useListVehicle = () => useContext(ListVehicleContext);
