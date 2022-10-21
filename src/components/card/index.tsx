import { VehiclesProps } from "../../interface"
import { LiCard, DivCard, SpanKm, SpanYear, SpanPrice } from "./style";

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

              <SpanKm>
                <p>{KM}</p>
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
