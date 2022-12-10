import { Header } from "../../components/header";
import ListAuction from "../../components/listAuctionCard";
import ListCard from "../../components/listCard";
import WelcomeHome from "../../components/welcomeHome";
import { useListVehicle } from "../../providers/listAllVehicles";
import Button from '../../components/button';
import HomePageStyled from './style';
import { motion } from 'framer-motion';

import * as C from "../../components/index";

const HomePage = () => {

    const { listCars, listMotorcycles, listVehicles } = useListVehicle();

    return(
        <HomePageStyled>
            <Header/>
            <motion.div className="welcome">
                <h1>Velocidade e experiência em um lugar perfeito para você</h1>
                
                <p>Um ambiente feito para você explorar o seu melhor</p>

                <div className="div--botoes">
                    <Button theme="none" color="white" name="Leilão" />
                    <Button theme="none" color="white" name="Carros" />
                    <Button theme="none" color="white" name="Motos" />
                </div>
            </motion.div>
            <ListAuction listVehicles={listVehicles}/>
            <ListCard title={"Carros"} listVehicles={listCars}/>
            <ListCard title={"Motos"} listVehicles={listMotorcycles}/>
            <C.Footer/>
        </HomePageStyled>
        )
}

export default HomePage;