export interface Vehicles {
    id:          String,
    name:        String,
    img:         String,
    title:       String,
    description: String,
    KM:          String,
    year:        String,
    price:       String
}


export interface VehiclesProps {
    vehicles: Vehicles
}