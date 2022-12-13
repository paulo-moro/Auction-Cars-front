import { ReactNode } from "react";
import { ICommentPropsCard, IComment } from "../propsComponents/index"


export interface Vehicle {
  id:             string;
  user_name?:     string;
  heading?:       string;
  name?:          string;
  img?:           string;
  title?:         string;
  description?:   string;
  km?:            string;
  year?:          string;
  price?:         string;
  photos?:        any;
  comments?:      IComment[];
}

export interface VehiclesProps {
  owner?: Boolean;
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

export interface IVehicleContext {
  listVehicles: IVehicle[];
  listCars: IVehicle[];
  listMotorcycles: IVehicle[];
  vehicle: Vehicle;
  newVehicle: Object;
  setNewVehicle: (vehicle: Object) => void;
  setId: (id: String) => void;
  setListVehicles?: (vehicles: IVehicle[]) => void;
  setNewComment: (comment: String) => void;
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
