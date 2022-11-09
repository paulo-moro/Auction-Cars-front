import { useListVehicle } from "../../providers/listAllVehicles";
import { AuctionCard } from "../auctionCard";
import { ListAuctionStyle } from "./style";
import { useRef } from "react";
import asset from "../../img/icons/asset.png";
import styled from 'styled-components';

export const ListAuction = () => {
  const { listVehicles } = useListVehicle();

  const carousel: any = useRef(null);

  const handleLeftClick = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth/1.3;
  };

  const handleRigthClick = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth/1.3;
  };

  return (
    <ListAuctionStyle>
      <h2>Leilão</h2>
      <div className="div-carousel">
        <button className="asset--left" onClick={(e) => handleLeftClick(e)}>
          <img src={asset} />
        </button>
        <ul className="carousel-list"  ref={carousel}>
          {listVehicles?.map((car: any, index: number) => {
            return <AuctionCard key={index} car={car} />;
          })}
        </ul>
        <button className="asset--rigth" onClick={(e) => handleRigthClick(e)}>
          <img src={asset} />
        </button>
      </div>
    </ListAuctionStyle>
  );
};
