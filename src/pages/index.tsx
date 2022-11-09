import HomePage from "./Homepage/index";
import ModalLogin from '../components/Modals/modalLogin/index';
import ModalRegister from '../components/Modals/modalRegister/index';
import ModalAnnouncement from '../components/Modals/modalAnnouncement/index';
import { ModalSucess } from '../components/Modals/modalSucess/index';

export const Pages = () => {
  return (
    <>
      <HomePage />
      <ModalLogin />
      <ModalRegister />
      <ModalSucess />
      <ModalAnnouncement />
    </>
  );
};
