import styled from "styled-components";

export const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 10px;
    gap: 20px;

    .div-carousel{
        display: flex;
        align-items: center;
    }

    .carousel-list{
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        width: 100%;
        gap: 30px;
        padding: 10px;
    }

    .carousel-list::-webkit-scrollbar{
        display: none;
    }

    h2{
        margin: 20px 60px;
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
        align-items: center;
        width: 50px;
        height: 50px;
        /* transform: rotate(180deg); */
        background: none;
    }

`