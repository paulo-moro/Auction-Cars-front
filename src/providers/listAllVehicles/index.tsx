import { useContext, createContext, useState, useEffect } from 'react';
import { IVehicleList, ListVehicleProviderProps } from "../../interface/vehicle/index"
import axios from "axios";

export const ListVehicleContext = createContext({} as IVehicleList);

export const ListVehicleProvider = ({ children }: ListVehicleProviderProps) => {
  const [listVehicles, setListVehicles] = useState([]);
  const [listCars, setListCars] = useState([]);
  const [listMotorcycles, setListMotorcycles] = useState([]);

  useEffect(() => {
  axios
    .get("http://localhost:3000/vehicle")
    .then((response) => setListVehicles(response.data));

  axios
    .get("http://localhost:3000/categorie/car")
    .then((response) => setListCars(response.data.vehicles));

  axios
    .get("http://localhost:3000/categorie/motorCycle")
    .then((response) => setListMotorcycles(response.data.vehicles));
  
  },[])

  return (
    <ListVehicleContext.Provider
      value={{ listVehicles, listCars, listMotorcycles }} >
      {children}
    </ListVehicleContext.Provider>
  );
};

export const useListVehicle = () => useContext(ListVehicleContext);
