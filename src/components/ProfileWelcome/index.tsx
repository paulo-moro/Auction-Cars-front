import { UserIcon } from "../iconUser";
import { ProfileWelcomeStyle } from "./style";
import { LabelAgeKm } from "../labelKmAgeCar/index";
import { ButtonUI } from "../buttonUI/index";
import { useUser } from "../../providers/user/index";
import { useState, useEffect } from "react";
import { useModal } from '../../providers/modal/index';

export const ProfileWelcome = () => {
  const { user } = useUser();
  const { showModalAnnouncement } = useModal();
  
  const statusUser = user?.is_active ? "Anunciante" : "Comprador";
  
  return (
    <ProfileWelcomeStyle>
      <div className="welcome-profile">
        <p className="initials">{user?.initialsName}</p>
        <p className="name-profile">
          {user?.name}
          <LabelAgeKm info={statusUser} />
        </p>

        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          nobis esse perferendis iusto voluptatum. Inventore ex ipsum quam
          quisquam consectetur aperiam, cumque ab vitae nisi fugit numquam rem
          quo quidem!
        </p>

        {user?.is_active && (
          <ButtonUI setBoolean={showModalAnnouncement} text="Criar anuncio" variant="outlined" size="large" />
        )}
      </div>
    </ProfileWelcomeStyle>
  );
};
