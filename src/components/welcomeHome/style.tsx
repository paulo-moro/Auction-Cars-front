import styled from "styled-components";

export const WelcomeCardStyle = styled.footer`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 80px;
    padding: 60px 0px;
    gap: 50px;
    background: var(--color-brand-2);
    color: var(--color-gray-10);
    font-family: "Lexend", sans-serif;

    h1{
        width: 90%;
        font-size: 25px;
        text-align: center;
    }

    p{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 95%;
    }

    .div--botoes{
        display: flex;
        flex-direction: column;
        width: 90%;
        gap: 15px;
      
    }
`
