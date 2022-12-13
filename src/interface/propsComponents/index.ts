import { IVehicle, Vehicle } from "../vehicle";

export interface ActionCardProps
    extends React.HTMLAttributes<HTMLOptionElement> {
    car?: {
      id: string, name: string, user_name: string, heading: string, description: string, user: string, color: string, year: string, km: string, price: string, auctionTime: string, published: boolean, created_at: string, updated_at: string, userId: string,
        img: string, time?: string;
    }
}

export interface ITitleSection {
  owner?: Boolean;
  title?: String;
  listVehicles?: IVehicle[];
}

export interface Label{
  info?: string;
}

export interface IPlaceholder {
  label?: string;
  placeholder?: string;
  color: any;
  rows?: number;
  maxRows?: number;
  multiline?: boolean;
  variant?: any;
  required?: boolean;
  type?: string;
  setFunction?: any;
}

export interface IUser {
  name?: String;
  initials?: String;
  color?: string;
  theme?: String;
}

export interface ButtonProps{
    text?: string;
    name?: string;
    color?: any;
    variant?: any;
    size?: any;
    type?: any;
    setBoolean?: any;
    
}

export interface IComment {
  id:           String
  comment:      String
  created_at:   String
  updated_at:   String
  user_name:    String
}

export interface ICommentPropsCard {
  comments: IComment;
}

export interface ICommentProps {
  title: String;
  listComments: IComment[];
}

export interface IAsideProps {
  vehicle: Vehicle;
}
