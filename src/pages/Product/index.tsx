import * as S from "./style";
import * as C from "../../components/index";
import axios from "axios";
import { useParams } from "react-router-dom";

import { useVehicle } from "../../providers/vehicles";

import { convertInitialsName, getVehicle, postCommentVehicle } from "../../utils/index";


import { useUser } from "../../providers/user/index";
import { useState, useEffect, useRef } from "react";
import { ICommentPropsCard, IComment } from "../../interface/propsComponents";
import { Vehicle } from "../../interface/vehicle/index";

const Product = () => {
  
  const { listCars, listMotorcycles, listVehicles, vehicle, setId, setNewComment } = useVehicle();
  const [newCommentState, setNewCommentState]:any = useState("");
  const { id }: any = useParams();
  const { user } = useUser();
  
  useEffect(()=> {
    setId && setId(id);
  }, [id])


  const commentFunction = () => {
    setNewComment(newCommentState)
  }
  
  const initialsName = convertInitialsName(vehicle?.user_name);
  const intialsProfile = convertInitialsName(user?.name);


  return (
    <>
      <C.Header />
      <S.ProductPageStyled>
        <section className="div--main">
          <S.ContainerIMG>
            <img src={vehicle?.img} />
          </S.ContainerIMG>

          <S.ContainerInfoProduct>
            <p>{vehicle?.heading}</p>

            <div>
              <C.LabelAgeKm info={vehicle?.year} />
              <C.LabelAgeKm info={vehicle?.km} />
            </div>

            <label>R$ {vehicle?.price},00</label>

            <C.ButtonUI text="Comprar" color="primary" variant="contained" />
          </S.ContainerInfoProduct>

          <S.ContainerDescription>
            <h3>Descrição</h3>
            <p>{vehicle?.description}</p>
          </S.ContainerDescription>

          <section className="aside--mobile">
          {vehicle &&
            <C.Aside vehicle={vehicle} />
          }
          </section>

          <S.ContainerComments>
            {vehicle &&
              vehicle.comments?.map((comment: any, index: number) => {

                const initialsNameComment = convertInitialsName(comment.user_name);

                return (<S.LiCard>
                    <C.UserIcon key={index} color={""} theme={"red"} name={comment.user_name} initials={initialsNameComment} />
                  <p>{comment.comment}</p>
                </S.LiCard>)
            })}
          </S.ContainerComments>

          <S.ContainerNewComments>
          {
          vehicle &&
           (<C.UserIcon
              name={user.name}
              initials={intialsProfile}
            />)
          }
            <C.InputText setFunction={setNewCommentState} color="primary" multiline rows={3} />
            <C.ButtonUI setBoolean={commentFunction} text="Comentar" color="primary" variant="contained" />
            <div>
              <label>Comentar</label>
              <label>Comentar</label>
              <label>Comentar</label>
            </div>
          </S.ContainerNewComments>
        </section>

        <aside>
        {vehicle &&
          <C.Aside vehicle={vehicle} />
        }
        </aside>
      </S.ProductPageStyled>

      <C.Footer />
    </>
  );
};

export default Product;
