import { Vehicle, VehiclesProps } from "../../interface/vehicle"
import { UserIcon } from "../iconUser";
import { LiCard, DivCard, SpanKm, SpanYear, SpanPrice } from "./style";

const Card = ({vehicle}: VehiclesProps) => {

    const {id, name, heading, description, km, img, year, price }:  Vehicle = vehicle;

    return (
        <LiCard>
          <figure>
            <img src={img} alt=''/>
          </figure>

          <h2>{heading}</h2>

          <p>{description}</p>
          
          <UserIcon color={""} theme={"red"} name={"Nome de Teste"} initials={"P"} />
          
          <DivCard>
            <div>
              <SpanKm>
                <p>{km}</p>
              </SpanKm>

              <SpanYear>
                <p>{year}</p>
              </SpanYear>
            </div>

            <SpanPrice>
              <p>{price}</p>
            </SpanPrice>
          </DivCard>

        </LiCard>
    );
};
  
export default Card;
