import axios from "axios";
import { useEffect, useState } from "react";
import { useListVehicle } from "../../providers/listVehicle";
import Card from "../card";
import { ListStyle } from "./style";

interface ITitleSection {
  title: String;
}

const ListCard = ({ title }: ITitleSection) => {
  
  const { listVehicle } = useListVehicle();


  return (
    <ListStyle>
      <h2>{title}</h2>
      <ul className="ul--list-cars">
        {listVehicle &&
          listVehicle.map((vehicle, index) => (
            
            <Card key={index} vehicle={vehicle} />
          ))}
      </ul>
    </ListStyle>
  );
};

export default ListCard;
