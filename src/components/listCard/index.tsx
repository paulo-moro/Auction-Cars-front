import { ITitleSection } from "../../interface/propsComponents";
import { useListVehicle } from "../../providers/listAllVehicles";
import Card from "../card";
import { ListStyle } from "./style";
import { useRef } from "react";
import asset from "../../img/icons/asset.png";
import styled from "styled-components";

const ListCard = ({ owner, title, listVehicles }: ITitleSection) => {
  const carousel: any = useRef(null);

  const handleLeftClick = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth / 1.3;
  };

  const handleRigthClick = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth / 1.3;
  };

  return (
    <ListStyle>
      <h2>{title}</h2>

      <div className="div-carousel" id={`${title}`}>
        <button className="asset--left" onClick={(e) => handleLeftClick(e)}>
          <img src={asset} />
        </button>
        <ul className="carousel-list" ref={carousel}>
          {listVehicles?.map((vehicle, index) => (
            <Card owner={owner} key={index} vehicle={vehicle} />
          ))}
        </ul>
        <button className="asset--rigth" onClick={(e) => handleRigthClick(e)}>
          <img src={asset} />
        </button>
      </div>
    </ListStyle>
  );
};

export default ListCard;
