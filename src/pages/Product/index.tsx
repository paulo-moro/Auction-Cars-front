import * as S from "./style";
import * as C from "../../components/index";
import axios from "axios";
import { useParams } from "react-router-dom";

import { convertInitialsName, getVehicle } from "../../utils/index";


import { useUser } from "../../providers/user/index";
import { useState, useEffect, useRef } from "react";
import { ICommentPropsCard, IComment } from "../../interface/propsComponents";
import { Vehicle } from "../../interface/vehicle/index";

const Product = () => {
  const [motor, setMotor]: any = useState();
  const { id }: any = useParams();
  
  useEffect(()=> {
    axios.get(`http://localhost:3000/vehicle/${id}`).then((res) => setMotor(res.data));
  })
    
  const initialsName = convertInitialsName(motor.user_name || "");

  const fotos = [
    motor?.img,
    motor?.img,
    motor?.img,
    motor?.img,
    motor?.img,
    motor?.img,
  ];

  return (
    <>
      <C.Header />
      <S.ProductPageStyled>
        <section className="div--main">
          <S.ContainerIMG>
            <img src={motor?.img} />
          </S.ContainerIMG>

          <S.ContainerInfoProduct>
            <p>{motor?.heading}</p>

            <div>
              <C.LabelAgeKm info={motor?.year} />
              <C.LabelAgeKm info={motor?.km} />
            </div>

            <label>R$ {motor?.price},00</label>

            <C.ButtonUI text="Comprar" color="primary" variant="contained" />
          </S.ContainerInfoProduct>

          <S.ContainerDescription>
            <h3>Descrição</h3>
            <p>{motor?.description}</p>
          </S.ContainerDescription>

          <section className="aside--mobile">
            <C.Aside vehicle={motor} />
          </section>

          <S.ContainerComments>
            {motor &&
              motor?.comments.map((comment: any, index: number) => {

                const initialsNameComment = convertInitialsName(comment.user_name);

                return (<S.LiCard>
                    <C.UserIcon key={index} color={""} theme={"red"} name={comment.user_name} initials={initialsNameComment} />
                  <p>{comment.comment}</p>
                </S.LiCard>)
            })}
          </S.ContainerComments>

          <S.ContainerNewComments>
          {motor &&

           (<C.UserIcon
              name={motor?.user_name}
              initials={initialsName}
              theme="black"
            />)
          }
            <C.InputText color="primary" multiline rows={3} />
            <C.ButtonUI text="Comentar" color="primary" variant="contained" />
            <div>
              <label>Comentar</label>
              <label>Comentar</label>
              <label>Comentar</label>
            </div>
          </S.ContainerNewComments>
        </section>

        <aside>
          <C.Aside vehicle={motor} />
        </aside>
      </S.ProductPageStyled>

      <C.Footer />
    </>
  );
};

export default Product;
