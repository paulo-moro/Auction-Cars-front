import { Vehicle, VehiclesProps } from "../../interface/vehicle";
import { UserIcon } from "../iconUser";
import { LiCard, DivCard, Span } from './style';
import { useEffect, useState } from "react";
import { ButtonUI } from "../buttonUI"

const Card = ({ vehicle }: VehiclesProps) => {
  const [initialsName, setInitialsName] = useState("");
  const {
    id,
    user_name,
    name,
    heading,
    description,
    km,
    img,
    year,
    price,
  }: Vehicle = vehicle;

  useEffect(() => {
    if (user_name) {
      const splitName = user_name?.split(" ");
      splitName.length > 1
        ? setInitialsName(splitName[0][0] + splitName[1][0])
        : setInitialsName(splitName[0][0]);
    }
  }, []);

  return (
    <LiCard>
      <figure>
        <img src={img} alt="" />
      </figure>

      <h2>{heading}</h2>

      <p>{description}</p>

      <UserIcon
        color={""}
        theme={"red"}
        name={user_name}
        initials={initialsName}
      />

      <DivCard>
        <div>
          <Span>
            {km} KM
          </Span>

          <Span>
            {year}
          </Span>
          </div>

          <span>R$ {price},00</span>
        
      </DivCard>

      <div className="div-buttons">
        <ButtonUI text="Editar" color="secondary" variant="outlined"/>

        <ButtonUI text="Ver como" color="secondary" variant="outlined"/>
      </div>
    </LiCard>
  );
};

export default Card;
