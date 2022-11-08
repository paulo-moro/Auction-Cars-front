import { ITitleSection } from "../../interface/propsComponents";
import { useListVehicle } from "../../providers/listAllVehicles";
import Card from "../card";
import { ListStyle } from "./style";


const ListCard = ({ title, listVehicles }: ITitleSection) => {
  
  return (
    <ListStyle>
      <h2>{title}</h2>
      <ul className="ul--list-cars">
        {listVehicles?.map((vehicle, index) => (
            <Card key={index} vehicle={vehicle} />
          ))}
      </ul>
    </ListStyle>
  );
};

export default ListCard;
