import { AuctionCard } from "../auctionCard"
import { ListAuctionStyle } from "./style"
import dbFake from "../../api/dbFake";
import { useEffect, useState } from "react";
import axios from "axios";

export const ListAuction = () => {
    
        
const [cars, setCars] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:3000/vehicle")
    .then((response) => {
        setCars(response.data);
        console.log(response.data)
    })
}, [])
    

    return(
        <ListAuctionStyle>
            <h2>
                Leilão
            </h2>
            <ul className="ul--list-auction">
            {
            cars?.map((car: any, index) => {
                return(
                <AuctionCard key={index} car={car}/>

                )
            })    
        }
        </ul>
        </ListAuctionStyle>
    )
}