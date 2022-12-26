import * as S from "./styled";
import { useHistory } from "react-router-dom";
import ButtonUI from "../../components/buttonUI";
import { IComment, IAsideProps } from "../../interface/propsComponents";
import { useState, useEffect } from "react";
import { useUser } from "../../providers/user/index";
import { convertInitialsName } from "../../utils/index";
import { UserIcon } from "../iconUser";
import { useModal } from "../../providers/modal";
import ModalGalery from "../Modals/modalImage/index";
import * as C from "../";

const Aside = ({ vehicle }: IAsideProps) => {
  const [motor, setMotor]: any = useState();
  const { showModalImageGalery, inOnModalGalery } = useModal();
  const initialsName = convertInitialsName(vehicle?.username);
  const [photo, setPhoto]: any = useState("");
  const history = useHistory();

  const openModalImage = (url: any) => {
    showModalImageGalery();
    setPhoto(url);
  };

  const toHomePage = () => {
    history.push("/");
  };

  return (
    <>
      {inOnModalGalery && <ModalGalery photo={photo} />}
      <S.AsideStyled>
        <S.ContainerGalery>
          <h3>Fotos</h3>
          <ul>
            {vehicle.photos?.map((photo: any) => {
              return (
                <img
                  src={photo.url}
                  onClick={() => openModalImage(photo.url)}
                />
              );
            })}
          </ul>
        </S.ContainerGalery>

        <S.ContainerOwnerProduct>
          <UserIcon name={vehicle?.username} initials={initialsName} />

          <h4>{vehicle?.username}</h4>

          <p className="description">{vehicle?.description}</p>

          <C.ButtonUI
            setBoolean={toHomePage}
            text="Ver todos os anúncios"
            color="secondary"
            variant="contained"
          />
        </S.ContainerOwnerProduct>
      </S.AsideStyled>
    </>
  );
};

export default Aside;
