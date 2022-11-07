import { useListVehicle } from "../../providers/listAllVehicles";
import { AuctionCard } from "../auctionCard"
import { ListAuctionStyle } from "./style"

export const ListAuction = () => {
            
const { listVehicles } = useListVehicle();

    return(
        <ListAuctionStyle>
            <h2>
                Leilão
            </h2>
            <ul className="ul--list-auction">
            {
            listVehicles?.map((car: any, index: number) => {
                return(
                <AuctionCard key={index} car={car}/>
                )
            })    
        }
        </ul>
        </ListAuctionStyle>
    )
}