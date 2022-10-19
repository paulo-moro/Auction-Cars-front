import styled from "styled-components";

const HeaderStyled = styled.header`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    background-color: var(--color-gray-10);

    .logo-MotorsShop{
        width: 50%;
        width: 135px;
        margin: 20px;
    }
    
    .nav-menu{
        display: flex;
        width: 50%;
        justify-content: flex-end;
    }

    .icon-Menu{
        width: 18px;
        margin: 35px;
    }
`

export {HeaderStyled}