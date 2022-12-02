import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ProductPageStyled } from "./style";
import { ButtonUI } from "../../components/buttonUI";
import { LabelAgeKm } from "../../components/labelKmAgeCar";
import { ProfileWelcome } from "../../components/ProfileWelcome";
import { InputText } from "../../components/input";

import CardComment from "../../components/commentCard";

import { useUser } from "../../providers/user/index";
import { useState, useEffect } from "react";
import { IComment } from "../../interface/propsComponents";

const Product = () => {
  const [motor, setMotor]: any = useState();

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
    <ProductPageStyled>
      <Header />
      <div className="container container--main--img">
        <img src={motor?.img}/>
      </div>

      <div className="container container--user">
        <p>{motor?.heading}</p>

        <div>
          <LabelAgeKm info={motor?.year} />
          <LabelAgeKm info={motor?.km} />
        </div>

        <label>
          R$ {motor?.price},00
        </label>

        <ButtonUI text="Comprar" color="primary" variant="contained" />
      </div>

      <div className="container--description">
        <h3>Descrição</h3>
        <p>{motor?.description}</p>
      </div>

      <div className="container--galery">
        <h3>Fotos</h3>
        <ul>{motor && fotos?.map((foto) => <img src={foto} />)}</ul>
      </div>

      <div className="container--owner-product">
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
      </div>

      <ul className="container--comments">
        {user &&
          comentarios?.map((comment) => <CardComment comments={comment} />)}
      </ul>



      <div className="new-comments">
        <p className="user-initialsName">
          {user?.initialsName} <span>{user?.name}</span>
        </p>

        <InputText color="primary" multiline rows={3} />
        <ButtonUI text="Comentar" color="primary" variant="contained" />

        <div className="buttons">
          <label>Comentar</label>
          <label>Comentar</label>
          <label>Comentar</label>
        </div>
      </div>

      <Footer />
    </ProductPageStyled>
  );
};

export default Product;
