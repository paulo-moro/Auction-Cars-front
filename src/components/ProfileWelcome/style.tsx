import styled from "styled-components";

export const ProfileWelcomeStyle = styled.footer`

@media (min-width: 320px) {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 80px;
    padding: 60px 0px;
    gap: 50px;
    background: linear-gradient(to bottom, var(--color-brand-2) 0, var(--color-brand-2) 50%, var(--color-gray-10) 50%);
    color: var(--color-gray-10);
    

    .welcome-profile{
        display: flex;
        flex-direction: column;
        background-color: var(--color-gray-10);
        width: 90%;
        height: auto;
        max-height: 480px; 
        border-radius: 5px;
        padding: 40px;
        gap: 25px;
    }

    .welcome-profile > .initials{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        background-color: #4529E6;
        color: var(--color-gray-10);
        border-radius: 50%;
        width: 80px;
        height: 80px;
    }

    .welcome-profile > .name-profile{
        color: #000000;
        font-family: 'Lexend', sans-serif;
        font-style: normal;
        font-weight: 600;
        line-height: 25px;
        display: flex;
        width: 100%;
        align-items: center;
        gap: 10px;
    }

    .welcome-profile > .description{
        display: flex;
        width: 100%;
        max-height: 150px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 28px;
        color: #495057;
        overflow: hidden;
    }

    .welcome-profile > button{
        width: 160px;
        height: 48px;
        padding: 10px;
        height: auto;
        font-size: 14px;
        border: solid 2px #4529E6;
        text-transform: capitalize;
        font-weight: bold;
    }
    
}

@media (min-width: 640px) {

    .welcome-profile > .name-profile{
        font-size: 18px;
    }

    .welcome-profile > .description{
        font-size: 16px;
    }

    .welcome-profile > button{
        font-size: 16px;
    }

}

@media (min-width: 920px) {

    .welcome-profile > .name-profile{
        font-size: 20px;
    }

    .welcome-profile > .description{
        font-size: 18px;
    }
    .welcome-profile > button{
        font-size: 18px;
    }

}
`
