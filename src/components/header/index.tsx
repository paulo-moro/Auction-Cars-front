import { HeaderStyled, MenuStyled } from "./style";
import MotorShop from "../../img/Motors-shop.svg";
import Menu from "../../img/Menu-Header.svg";
import CloseMenu from "../../img/Close-Menu.svg";
import { useState } from "react";
import { useModal } from "../../providers/modal";

export const Header = () => {

    const {
        inOnSucess, 
        setInOnSucess, 
        showModalSucess, 
        hideModalSucess,
        showModalAnnouncement,
        inOnLogin, 
        setInOnLogin, 
        showModalLogin, 
        hideModalLogin,
        setInOnRegister
     } = useModal();
    
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <HeaderStyled>
        <img className="logo-MotorsShop" src={MotorShop} alt="" />

        <nav className="nav-menu">
          {!openMenu ? (
            <button onClick={() => setOpenMenu(true)}>
              {" "}
              <img src={Menu} alt="" />{" "}
            </button>
          ) : (
            <button onClick={() => setOpenMenu(false)}>
              {" "}
              <img src={CloseMenu} alt="" />{" "}
            </button>
          )}
        </nav>

        <nav className="nav--menu-desktop">
          <button className="nav--menu-desktop-button">Carros</button>
          <button className="nav--menu-desktop-button">Motos</button>
          <button
            onClick={() => showModalAnnouncement()}
            className="nav--menu-desktop-button"
          >
            Leilão
          </button>

          <div className="nav--login-register-desktop">
            <div id="div-line"></div>
            <h4
              onClick={() => setInOnLogin(true)}
              className="nav--menu-desktop-h4"
            >
              Fazer Login
            </h4>
            <button
              onClick={() => setInOnRegister(true)}
              className="nav--menu-desktop-button-register"
            >
              Cadastrar
            </button>
          </div>
        </nav>
      </HeaderStyled>

      {openMenu && (
        <MenuStyled>
          <nav className="nav--menu-mobile">
            <button className="nav--menu-mobile-button">Carros</button>
            <button className="nav--menu-mobile-button">Motos</button>
            <button 
            onClick={() => showModalAnnouncement()}
            className="nav--menu-mobile-button">Leilão</button>
          </nav>
          <div className="nav--login-register-mobile">
            <h4
              onClick={() => setInOnLogin(true)}
              className="nav--menu-mobile-h4"
            >
              Fazer Login
            </h4>
            <button
              onClick={() => setInOnRegister(true)}
              className="nav--menu-mobile-button"
            >
              Cadastrar
            </button>
          </div>
        </MenuStyled>
      )}
      

    </>
  );
};
