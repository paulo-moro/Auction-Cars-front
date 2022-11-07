import { AuctionCard } from "../auctionCard"
import { ListAuctionStyle } from "./style"
import { useListVehicle } from "../../providers/listVehicle";

export const ListAuction = () => {
            
const { listVehicle } = useListVehicle();

    return(
        <ListAuctionStyle>
            <h2>
                Leilão
            </h2>
            <ul className="ul--list-auction">
            {
            listVehicle?.map((car: any, index) => {
                return(
                <AuctionCard key={index} car={car}/>
                )
            })    
        }
        </ul>
        </ListAuctionStyle>
    )
}