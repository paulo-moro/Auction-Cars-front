import { ButtonAuction } from "../auctionButton";
import { UserIcon } from "../iconUser";
import { LabelAgeKm } from "../labelKmAgeCar";
import { AuctionCardStyle } from "./styled";

interface ActionCardProps 
extends React.HTMLAttributes<HTMLOptionElement> 
{
    
    car?: { name: string, title: string, description: string, user: string, color: string, year: string, KM: string, price: string, auctionTime: string
    img: string, time?: string;
}
}

const AuctionCard = ({ car }: ActionCardProps) => {

    console.log(car?.img)

    return (
            <AuctionCardStyle theme={car?.img}>
                
                <label className="auction-time">{car?.time || "00:00:00"}</label>
                <h3>{car?.title}</h3>
                <p>{car?.description}</p>

                <p>
                    <UserIcon name={car?.name} initials={car?.name[0]} />
                </p>

                <div className="tagets">
                    <LabelAgeKm info={car?.year} />
                    <LabelAgeKm info={car?.KM} />
                </div>

                <p className="price">R$ {car?.price}</p>

                <ButtonAuction />

            </AuctionCardStyle>
        
    )
}

export { AuctionCard };