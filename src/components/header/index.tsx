import { HeaderStyled } from "./style";
import MotorShop from "../../styles/Motors-shop.svg";
import Menu from "../../styles/Menu-Header.svg";


const Header = () => {
    return (
        <HeaderStyled>
            <img className="logo-MotorsShop" src={MotorShop} alt="" />

            <nav className="nav-menu">
                <img className="icon-Menu" src={Menu} alt="" />
            </nav>
        </HeaderStyled>
    )
}

export { Header };