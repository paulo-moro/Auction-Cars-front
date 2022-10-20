import { VehiclesProps } from "../../interface"
import { LiCard, DivCard, SpanCard } from "./style";

const Card = ({vehicles}: VehiclesProps) => {

    const {id, name, title, description, KM, img, year, price } = vehicles;

    return (
        <LiCard>

          <figure>
            <img src='https://th.bing.com/th/id/OIP.UQeKbZTigv91K96LGwGAZgHaE8?pid=ImgDet&rs=1' alt='' />
          </figure>

          <h2>{title}</h2>

          <p>{description}</p>
          
          <p>{name}</p>
          
          <DivCard>

            <div>

              <span>
                <p>{KM}</p>
              </span>

              <span>
                <p>{year}</p>
              </span>
              
            </div>

            <SpanCard>
              <p>{price}</p>
            </SpanCard>

          </DivCard>

        </LiCard>
    );
};
  
export default Card;