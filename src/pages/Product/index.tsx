import * as S from "./style";
import * as C from "../../components/index";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useVehicle } from "../../providers/vehicles";
import {
  convertInitialsName,
  getVehicle,
  postCommentVehicle,
} from "../../utils/index";
import { useUser } from "../../providers/user/index";
import { useState, useEffect, useRef } from "react";
import { ICommentPropsCard, IComment } from "../../interface/propsComponents";
import { Vehicle } from "../../interface/vehicle/index";

const Product = () => {
  const {
    listCars,
    listMotorcycles,
    listVehicles,
    vehicle,
    setId,
    setNewComment,
    setNewOffer
  } = useVehicle();

  const [newCommentState, setNewCommentState] = useState("");
  const [inputDisabled, setInputDisabled] = useState(true);
  const [offer, setOffer] = useState(0);
  const { id }: any = useParams();
  const { user } = useUser();

  useEffect(() => {
    setId(id);
    user.email ? setInputDisabled(false) : setInputDisabled(true);
  }, [id, user]);
  
  const commentFunction = () => {
    setNewComment(newCommentState);
  };

  console.log(offer)
  const newOfferFunction = () => {
    setNewOffer(Number(offer));
    
  };


  const initialsName = convertInitialsName(vehicle.user_name);
  const intialsProfile = convertInitialsName(user.name);
  const priceBRL = Number(vehicle.price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  const lastesOffers = vehicle.offers ? vehicle.offers.slice(vehicle.offers?.length-6, vehicle.offers.length-1) : [];

  return (
    <>
      <C.Header />
      <S.ProductPageStyled>
        <section className="div--main">
          <S.ContainerIMG>
            <img src={vehicle.img} />
          </S.ContainerIMG>

          <S.ContainerInfoProduct>
            <p>{vehicle.heading}</p>

            <div>
              <C.LabelAgeKm info={vehicle.year} />
              <C.LabelAgeKm info={vehicle.km} />
            </div>
            <label>{priceBRL}</label>

            <C.ButtonUI text="Comprar" color="primary" variant="contained" />
          </S.ContainerInfoProduct>

          <S.ContainerDescription>
           <h3>Descrição</h3>
            <p>{vehicle.description}</p>
          </S.ContainerDescription>

          <section className="aside--mobile">
            {vehicle && <C.Aside vehicle={vehicle} />}
          </section>

          <S.ContainerComments>
            {vehicle &&
              vehicle.comments?.map((comment: any, index: number) => {
                const initialsNameComment = convertInitialsName(
                  comment.user_name
                );

                return (
                  <S.LiCard>
                    <C.UserIcon
                      key={index}
                      color={""}
                      theme={"red"}
                      name={comment.user_name}
                      initials={initialsNameComment}
                    />
                    <p>{comment.comment}</p>
                  </S.LiCard>
                );
              })}
          </S.ContainerComments>

          <S.ContainerNewComments>
            {user && <C.UserIcon name={user.name} initials={intialsProfile} />}
            <C.InputText
              setFunction={setNewCommentState}
              color="primary"
              multiline
              rows={3}
              disabled={inputDisabled}
            />
            <C.ButtonUI
              setBoolean={commentFunction}
              text="Comentar"
              color="primary"
              variant="contained"
            />
            {user && (
              <div className="comments-standart">
                <label onClick={() => setNewComment("Gostei muito!")}>
                  Gostei muito!
                </label>
                <label onClick={() => setNewComment("Incrível!")}>
                  Incrível!
                </label>
                <label onClick={() => setNewComment("Recomendarei para meus amigos!")}>
                  Recomendarei para meus amigos!
                </label>
              </div>
            )}
          </S.ContainerNewComments>
        </section>

        <aside>
          {vehicle && <C.Aside vehicle={vehicle} />}
        
            <S.ListOffersStyled>
              <h2>Lances </h2>
                
                <ul>
                  {vehicle &&
                  lastesOffers.map((offer: any, index: number) => {
                    const priceOffer = Number(offer.offer).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
                    return (<li><p>{priceOffer}</p></li>);
                  }).reverse()
                  }
                </ul>

                <div>
                  <C.InputText
                  setFunction={setOffer}
                  color="primary"
                  multiline
                  rows={1}
                  disabled={inputDisabled}
                /> 
                <C.ButtonUI setBoolean={newOfferFunction} text="Enviar" color="primary" variant="contained" />
                </div>
             
            </S.ListOffersStyled>
          
        </aside>
      </S.ProductPageStyled>

      <C.Footer />
    </>
  );
};

export default Product;
