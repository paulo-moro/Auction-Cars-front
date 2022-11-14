import { ReactNode } from "react";

export interface Vehicle {
    id:           string,
    user_name?:   string;
    heading?:     string;
    name?:        string,
    img?:         string,
    title?:       string,
    description?: string,
    km?:          string,
    year?:        string,
    price?:       string
}


export interface VehiclesProps {
    vehicle: Vehicle;
}

export interface IVehicle {
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
    category: string;
  }
  
  export interface IVehicleList {
    listVehicles?: IVehicle[];
    listCars?: IVehicle[];
    listMotorcycles?: IVehicle[];
    setListVehicles?: (vehicles: IVehicle[]) => void;
  }
  
  export interface ListVehicleProviderProps {
    children: ReactNode;
  } 

export interface IVehicleRegister {
    newVehicle: Object;
    setNewVehicle: (vehicle: Object) => void;
  }

export interface NewVehicleProviderProps {
    children: ReactNode;
}
  