import { ButtonAuction } from "../auctionButton";
import { UserIcon } from "../iconUser";
import { LabelAgeKm } from "../labelKmAgeCar";
import { AuctionCardStyle } from "./styled";
import TimeAuction from "../../img/icons/time.svg";

interface ActionCardProps
    extends React.HTMLAttributes<HTMLOptionElement> {
    car?: {
        name: string, title: string, description: string, user: string, color: string, year: string, KM: string, price: string, auctionTime: string
        img: string, time?: string;
    }
}

const AuctionCard = ({ car }: ActionCardProps) => {

    return (
        <AuctionCardStyle theme={car?.img}>

            <label className="auction-time">
                <img src={TimeAuction} className="img--time-auction" alt="" />
                {car?.time || "00:00:00"}</label>
            <h3>{car?.title}</h3>
            <p>{car?.description}</p>

            <p>
                <UserIcon color={""} theme={"red"} name={car?.name} initials={car?.name[0]} />
            </p>

            <div className="div--info-car">

                <div className="tagets">
                    <LabelAgeKm info={car?.year} />
                    <LabelAgeKm info={car?.KM} />
                </div>

                <p className="price">R$ {car?.price}</p>

            </div>
            <ButtonAuction />

        </AuctionCardStyle>

    )
}

export { AuctionCard };