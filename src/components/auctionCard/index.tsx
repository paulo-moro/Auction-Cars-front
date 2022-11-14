import { UserIcon } from "../iconUser";
import { LabelAgeKm } from "../labelKmAgeCar";
import { AuctionCardStyle } from "./styled";
import TimeAuction from "../../img/icons/time.svg";
import { ActionCardProps } from "../../interface/propsComponents";
import { Vehicle } from '../../interface/vehicle/index';
import { useEffect, useState } from 'react';
import ArrowAuctionIcon from "../../img/icons/arrow-auctionCard.svg";


const AuctionCard = ({ car }: ActionCardProps) => {

    const [initialsName, setInitialsName] = useState("");

    useEffect(() => {
        if (car?.user_name) {
          const splitName = car?.user_name.split(" ");
          splitName.length > 1
            ? setInitialsName(splitName[0][0] + splitName[1][0])
            : setInitialsName(splitName[0][0]);
        }
      }, []);

    return (
        <AuctionCardStyle theme={car?.img}>

            <label className="auction-time">
                <img src={TimeAuction} className="img--time-auction" alt="" />
                {car?.created_at || "00:00:00"}</label>
            <h3>{car?.heading}</h3>
            <p className="p--descriptionCar">{car?.description}</p>

            <p>
                <UserIcon color={""} theme={"red"} name={car?.user_name} initials={initialsName} />
            </p>

            <div className="div--info-car">

                <div className="tagets">
                    <LabelAgeKm info={car?.year} />
                    <LabelAgeKm info={car?.km} />
                </div>

                <span className="price">R$ {car?.price}</span>

            </div>

            <button className="ButtonAuction">
           <p>Acessar página do leilão</p>
           <img src={ArrowAuctionIcon} alt=""/>
        </button>

        </AuctionCardStyle>
    )
}

export { AuctionCard };