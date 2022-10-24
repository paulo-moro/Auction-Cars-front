import ButtonAuctionStyled from "./styled";
import ArrowAuctionIcon from "../../img/icons/arrow-auctionCard.svg";

const ButtonAuction = () => {
    return(
        <ButtonAuctionStyled>
           <p>Acessar página do leilão</p>
           <img src={ArrowAuctionIcon} alt=""/>
        </ButtonAuctionStyled>
    )
}

export { ButtonAuction };

