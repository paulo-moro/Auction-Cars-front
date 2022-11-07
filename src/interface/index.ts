export interface Vehicle {
    id:           string,
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


export interface Modalprops {
    handleShow: () => Boolean
    handleHidden: () => Boolean
    statusModal?: Boolean
}
