import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { ListAuction } from "../../components/listAuctionCard";
import ListCard from "../../components/listCard";
import { WelcomeHome } from "../../components/welcomeHome";

const HomePage = () => {
    return(
        <>
        <Header/>
        <WelcomeHome/>
        <ListAuction/>
        <ListCard title={"Carros"}/>
        <ListCard title={"Motos"}/>
        <Footer/>
        </>
    )
}

export default HomePage;