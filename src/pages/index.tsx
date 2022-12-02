import HomePage from "./Homepage/index";
import Product from "./Product/index";
import ModalLogin from '../components/Modals/modalLogin/index';
import ModalRegister from '../components/Modals/modalRegister/index';
import ModalAnnouncement from '../components/Modals/modalAnnouncement/index';
import ModalSucess from '../components/Modals/modalSucess/index';
import ProfilePage from './ProfilePage/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  return (
    <AnimatePresence>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/profile" component={ProfilePage}/>
      <Route path="/product" component={Product}/>
    </Switch>

      <ModalLogin />
      <ModalRegister />
      <ModalSucess />
      <ModalAnnouncement />
    </AnimatePresence>
  );
};

export default Pages;
