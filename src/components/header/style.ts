import styled from "styled-components";

export const HeaderStyled = styled.header`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: 100%;
    background-color: var(--color-gray-10);
    border-bottom:1.5px solid var(--color-gray-5);
    
    .logo-MotorsShop{
        width: 50%;
        width: 135px;
        margin: 20px;
    }
    
    .nav-menu{
        display: flex;
        width: 50%;
        justify-content: flex-end;
        margin: 0;
    }

    .icon-Menu{
        width: 18px;
        margin: 10px;
    }
`

export const MenuStyled = styled.div`
        
        display: flex;
        position: fixed;
        flex-direction: column;
        width: 100%;
        height: auto;
        box-shadow: 0px 30px 10px 15px var(--color-gray-6);
        
    .nav--menu-mobile{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        height: auto;
        background-color: var(--color-white-fixed);
        border-bottom:1.5px solid var(--color-gray-4);
        
        .nav--menu-mobile-button{
            display: flex;
            align-items: center;
            width: 100%;
            height: 30px;
            margin: 20px;
            background: none;
            color: var(--color-gray-2)
        }
    }
    
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 150px;
        background-color: var(--color-white-fixed);

        h4{
            flex-direction: column;
            width: 90%;
            color: var(--color-gray-2)
        }
        
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 12px 28px;
            gap: 10px;
            width: 90%;
            height: 40px;
            border: 1.5px solid var(--color-gray-4);
            border-radius: 4px;
            background-color: var(--color-white-fixed);
        }
    }
`
