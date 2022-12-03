import * as S from "./styled";
import { ButtonUI } from "../../components/buttonUI";
import { IComment, IAsideProps } from "../../interface/propsComponents";
import { useState, useEffect } from "react";
import { useUser } from "../../providers/user/index";

// { vehicle }: IAsideProps
const Aside = () => {

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

    return(
    <S.AsideStyled>
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
    </S.AsideStyled>
    )
}

export default Aside;