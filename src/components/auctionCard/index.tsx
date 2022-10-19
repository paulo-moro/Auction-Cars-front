import { ButtonAuction } from "../auctionButton";
import { UserIcon } from "../iconUser";
import { LabelAgeKm } from "../labelKmAgeCar";
import { AuctionCardStyle } from "./styled";

interface ActionCardProps extends React.HTMLAttributes<HTMLOptionElement> {
    theme?: { background: string };
    car?: { name?: string, title?: string, description?: string, user?: string, color?: string, age?: string, km?: string, price?: string, owner?: string, auctionTime?: string }

}

const AuctionCard = ({ theme, car }: ActionCardProps) => {
    return (
        <>
            <AuctionCardStyle>
                {car?.auctionTime && <label className="auction-time">00:00:00</label>}
                <h3>{car?.title}</h3>
                <p>{car?.description}</p>

                <p>
                    <UserIcon name={car?.owner} initials={car?.owner} />
                </p>

                <div className="tagets">
                    <LabelAgeKm info={car?.age} />
                    <LabelAgeKm info={car?.km} />
                </div>

                <p className="price">R$ {car?.price}</p>

                <ButtonAuction />

            </AuctionCardStyle>
        </>
    )
}

export { AuctionCard };