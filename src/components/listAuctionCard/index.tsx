import { AuctionCard } from "../auctionCard"
import { ListAuctionStyle } from "./style"
import dbFake from "../../api/dbFake";

export const ListAuction = () => {
    
    
    return(
        <ListAuctionStyle>
            <h2>
                Leilão
            </h2>
            <ul className="ul--list-auction">
            {
            dbFake?.map((car: any, index) => {
                return(
                <AuctionCard key={index} car={car}/>

                )
            })    
        }
        </ul>
        </ListAuctionStyle>
    )
}