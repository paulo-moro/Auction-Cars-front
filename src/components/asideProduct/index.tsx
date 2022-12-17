import * as S from "./styled";
import ButtonUI from "../../components/buttonUI";
import { IComment, IAsideProps } from "../../interface/propsComponents";
import { useState, useEffect } from "react";
import { useUser } from "../../providers/user/index";
import { convertInitialsName } from "../../utils/index";
import { UserIcon } from "../iconUser";
import * as C from "../";

const Aside = ({ vehicle }: IAsideProps) => {
  const [motor, setMotor]: any = useState();
  const initialsName = convertInitialsName(vehicle?.user_name || "");

  return (
    <S.AsideStyled>
      <S.ContainerGalery>
        <h3>Fotos</h3>
        <ul>
          {
            vehicle.photos?.map((foto: any) => {
              console.log(foto);
             return(<img src={foto.url} />)
          })
          }
        </ul>
      </S.ContainerGalery>

      <S.ContainerOwnerProduct>
        <UserIcon
            name={vehicle?.user_name}
            initials={initialsName}
          />

        <h4>{vehicle?.user_name}</h4>

        <p className="description">{vehicle?.description}</p>

        <C.ButtonUI
          text="Ver todos os anúncios"
          color="secondary"
          variant="contained"
        />
      </S.ContainerOwnerProduct>
    </S.AsideStyled>
  );
};

export default Aside;
