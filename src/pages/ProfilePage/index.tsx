import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { ListAuction } from "../../components/listAuctionCard";
import ListCard from "../../components/listCard";
import { useListVehicle } from "../../providers/listAllVehicles";
import { ProfileWelcome } from '../../components/ProfileWelcome/index';
import { useState } from 'react';
import { useUser } from '../../providers/user/index';
import { Redirect, Link } from "react-router-dom";

const ProfilePage = () => {

    const [userToken, setUserToken] = useState('');
        
    const { user } = useUser();

    const motorCycles = user.vehicles?.filter((vehicle) => vehicle.category === "motorcycle")  || null;

    const cars = user.vehicles?.filter((vehicle) => vehicle.category === "car");
    
    if(!sessionStorage.getItem("user")){ return <Redirect to="/home"/>}

    return(
        <>
        <Header/>
        <ProfileWelcome/>
        {user?.is_active && <ListAuction listVehicles={user.vehicles}/>}
        { cars ? <ListCard title={"Carros"} listVehicles={cars}/> : null }
        { motorCycles ? (<ListCard title={"Motos"} listVehicles={motorCycles}/>) : null }
        <Footer/>
        </>
    )
}

export default ProfilePage;