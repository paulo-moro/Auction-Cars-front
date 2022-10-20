import { HeaderStyled, MenuStyled } from "./style";
import MotorShop from "../../img/Motors-shop.svg";
import Menu from "../../img/Menu-Header.svg";
import CloseMenu from "../../img/Close-Menu.svg";


import { useState } from "react";


const Header = () => {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <HeaderStyled>
                <img className="logo-MotorsShop" src={MotorShop} alt="" />

                <nav className="nav-menu">
                    {!openMenu ?
                        <button onClick={() => setOpenMenu(true)}>
                            <img src={Menu} alt="" />

                        </button>
                        :
                        <button
                        
                            onClick={() => setOpenMenu(false)}
                        >
                            <img src={CloseMenu} alt="" />
                        </button>
                    }
                </nav>
            </HeaderStyled>

            {openMenu &&
                <MenuStyled>
                    <nav className="nav--menu-mobile">
                        <button className="nav--menu-mobile-button"
                        >Carros</button>
                        <button
                        className="nav--menu-mobile-button"
                        >Motos</button>
                        <button
                        className="nav--menu-mobile-button"
                        >Leilão</button>
                    </nav>
                    <div>
                        <h4>Fazer Login</h4>

                        <button>
                            Cadastrar
                        </button>
                    </div>

                </MenuStyled>
            }
        </>
    )
}

export { Header };