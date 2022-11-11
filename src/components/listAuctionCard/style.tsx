import styled from "styled-components";

export const ListAuctionStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
    
    .div-carousel{
        display: flex;
        align-items: center;
    }

    .carousel-list{
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        width: 100%;
        gap: 20px;
        padding: 10px;
    }

    .carousel-list::-webkit-scrollbar{
        display: none;
    }

    h2{
        height: 10%;
        margin: 20px;
    }

    .asset--rigth{
        display: flex;
        width: 50px;
        height: 50px;
        align-items: center;
        background: none;
    }

    .asset--left{
        display: flex;
        width: 50px;
        height: 50px;
        align-items: center;
        background: none;
        transform: rotate(180deg);
    }

`