import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import * as S from "./style";
import { ButtonUI } from "../../components/buttonUI";
import { LabelAgeKm } from "../../components/labelKmAgeCar";
import { ProfileWelcome } from "../../components/ProfileWelcome";
import { InputText } from "../../components/input";

import CardComment from "../../components/commentCard";

import { useUser } from "../../providers/user/index";
import { useState, useEffect, useRef } from "react";
import { IComment } from "../../interface/propsComponents";

import Aside from "../../components/asideProduct";

const Product = () => {
  const [motor, setMotor]: any = useState();
  const isMobile = useRef() as React.MutableRefObject<HTMLDivElement>;

  const { user } = useUser();

  useEffect(() => {
    if (user.vehicles) {
      setMotor(user?.vehicles[0]);
    }
    console.log(user);
    console.log(motor);
  });

  const fotos = [
    motor?.img,
    motor?.img,
    motor?.img,
    motor?.img,
    motor?.img,
    motor?.img,
  ];

  const id = user;
  const name = user;

  const comentarios: Array<IComment> = [
    {
      id: "123",
      username: "Paulo Vitor",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium rerum minus eum et facilis esse sequi maiores ratione, debitis quibusdam tenetur inventore voluptatibus ipsum.",
    },
    {
      id: "123",
      username: "Paulo Vitor",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium rerum minus eum et facilis esse sequi maiores ratione, debitis quibusdam tenetur inventore voluptatibus ipsum.",
    },
    {
      id: "123",
      username: "Paulo Vitor",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium rerum minus eum et facilis esse sequi maiores ratione, debitis quibusdam tenetur inventore voluptatibus ipsum.",
    },
    {
      id: "123",
      username: "Paulo Vitor",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium rerum minus eum et facilis esse sequi maiores ratione, debitis quibusdam tenetur inventore voluptatibus ipsum.",
    },
    {
      id: "123",
      username: "Paulo Vitor",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium rerum minus eum et facilis esse sequi maiores ratione, debitis quibusdam tenetur inventore voluptatibus ipsum.",
    },
  ];

  return (
    <>
      <Header />

      <S.ProductPageStyled ref={isMobile}>
          <section className="div--main">
            <S.ContainerIMG>
              <img src={motor?.img} />
            </S.ContainerIMG>

            <S.ContainerInfoProduct>
              <p>{motor?.heading}</p>

              <div>
                <LabelAgeKm info={motor?.year} />
                <LabelAgeKm info={motor?.km} />
              </div>

              <label>R$ {motor?.price},00</label>

              <ButtonUI text="Comprar" color="primary" variant="contained" />
            </S.ContainerInfoProduct>

            <S.ContainerDescription>
              <h3>Descrição</h3>
              <p>{motor?.description}</p>
            </S.ContainerDescription>

            <section className="aside--mobile">
              <Aside />
            </section>

            {/* <S.Aside>
            <S.ContainerGalery>
              <h3>Fotos</h3>
              <ul>{motor && fotos?.map((foto) => <img src={foto} />)}</ul>
            </S.ContainerGalery>

            <S.ContainerOwnerProduct>
              <p className="initialsName">{user?.initialsName}</p>

              <h4>{user?.name}</h4>

              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                accusantium rerum minus eum et facilis esse sequi maiores ratione,
                debitis quibusdam tenetur inventore voluptatibus ipsum.
              </p>

              <ButtonUI
                text="Ver todos os anúncios"
                color="secondary"
                variant="contained"
              />
            </S.ContainerOwnerProduct>
          </S.Aside> */}

            <S.ContainerComments>
              {user &&
                comentarios?.map((comment) => (
                  <CardComment comments={comment} />
                ))}
            </S.ContainerComments>

            <S.ContainerNewComments>
              <p className="user-initialsName">
                {user?.initialsName} <span>{user?.name}</span>
              </p>
              <InputText color="primary" multiline rows={3} />
              <ButtonUI text="Comentar" color="primary" variant="contained" />
              <div>
                <label>Comentar</label>
                <label>Comentar</label>
                <label>Comentar</label>
              </div>
            </S.ContainerNewComments>
          </section>

          <aside>
            <Aside />
          </aside>
      </S.ProductPageStyled>

      <Footer />
    </>
  );
};

export default Product;
