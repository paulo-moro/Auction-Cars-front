import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { ListAuction } from "../../components/listAuctionCard";
import ListCard from "../../components/listCard";
import { WelcomeHome } from "../../components/welcomeHome";
import { useListVehicle } from "../../providers/listAllVehicles";

const HomePage = () => {

    const { listCars, listMotorcycles } = useListVehicle();

    return(
        <>
        <Header/>
        <WelcomeHome/>
        <ListAuction/>
        <ListCard title={"Carros"} listVehicles={listCars}/>
        <ListCard title={"Motos"} listVehicles={listMotorcycles}/>
        <Footer/>
        </>
    )
}

export default HomePage;