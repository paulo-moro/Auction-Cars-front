import styled from "styled-components";

export const ProfileWelcomeStyle = styled.footer`

@media (min-width: 320px) {
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 80px;
    padding: 60px 0px;
    gap: 50px;
    background: linear-gradient(to bottom, var(--color-brand-2) 0, var(--color-brand-2) 50%, var(--color-gray-10) 50%);
    color: var(--color-gray-10);
    min-height: 470px;

    .welcome-profile{
        display: flex;
        flex-direction: column;
        background-color: var(--color-gray-10);
        /* border: solid 3px green; */
        width: 90%;
        min-height: 360px;
        border-radius: 5px;
    }

    .welcome-profile > .initials{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        margin: 35px 25px 20px 25px;
        background-color: #4529E6;
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
        padding: 0px 20px;
    }

    .welcome-profile > .description{
        display: flex;
        width: 100%;
        justify-content: center;
        max-height: 150px;
        padding: 5% 10%;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 28px;
        color: #495057;
        overflow: hidden;
    }

    .welcome-profile > button{
        width: 50%;
        padding: 10px;
        height: auto;
        font-size: 14px;
        margin: 10%;
        border: solid 2px #4529E6;
        text-transform: capitalize;
        font-weight: bold;
    }
    
}

@media (min-width: 640px) {


}

@media (min-width: 640px) {



}
`
