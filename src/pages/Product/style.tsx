import styled from "styled-components";
import { motion } from "framer-motion";

const ProductPageStyled = styled(motion.body)`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: linear-gradient(to bottom, var(--color-brand-2) 500px, #F1F3F5 0);
    gap: 30px;
    
    .container{
      display: flex;
      justify-content: center;
      flex-direction: column;
      background: var(--color-gray-10);
      width: 95%;
    }

    .container--main--img{
      margin-top: 100px;
      min-height: 350px;
      border-radius: 4px;
    }
      
    .container--main--img > img{
      width: 80%;
      padding: 20px;
      min-width: 100%;
    }

    .container--user{
      padding: 30px;
      gap: 30px;
      justify-content: space-around;
      background: var(--color-gray-10);
      border-radius: 4px;
    }

    .container--user > p{
        font-weight: var(--font-heading-3-600);
        font-size: 16px;
    }

    .container--user > div{
        width: 50%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .container--user > div > label{
      padding: 10px;
    }
    
    .container--user > label{
      font-size: 13px;
    }

    .container--user > button{
      width: 100px;
      height: 38px;
    }

    .container--description{
      gap: 50px;
      width: 95%;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background: var(--color-gray-10);
      border-radius: 4px;
    }

    .teste-description > h3{
    }

    .container--description > p{
      width: 95%;
      color: #495057;
      font-size: 15px;
      font-family: 'Inter', sans-serif;
    }

    .container--galery{
      display: flex;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
      background: var(--color-gray-10);
      width: 95%;
      padding: 40px 20px;
    }

    .container--galery > h3{
      width: 90%;
    }

    .container--galery > ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 10px;
    }

    .container--galery > ul > img{
        width: 70px;
        height: 70px;
        margin: 5px;
    }


    .container--owner-product{
        display: flex;
        flex-direction: column;
        background: var(--color-gray-10);
        width: 95%;
        align-items: center;
        height: auto;
        max-height: 480px; 
        border-radius: 5px;
        padding: 40px 20px;
        gap: 30px;
    }

  .container--owner-product > .initialsName{
    display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      background-color: #4529E6;
      color: var(--color-gray-10);
      border-radius: 50%;
      width: 70px;
      height: 70px;
    }


    .container--owner-product > h4{
        color: #000000;
        font-family: 'Lexend', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .container--owner-product > .description{
      display: flex;
      width: 95%;
      color: #495057;
      font-size: 15px;
      font-family: 'Inter', sans-serif;
    }

    .container--owner-product > button{
      padding: 15px;
      width: auto;
      height: auto;
      font-size: 15px;
      text-transform: none;
    }

    .container--comments{
        display: flex;
        flex-direction: column;
        background: var(--color-gray-10);
        width: 95%;
        align-items: center;
        border-radius: 5px;
        padding: 20px;
        gap: 40px;
    }

    .new-comments{
      border: 1px solid red;
      display: flex;
      width: 90%;
      flex-direction: column;
      padding: 10px;
      gap: 40px;
      background: #ffffff;
    }

    .new-comments > input{
      width: 90%;
    }

    .new-comments > button{
      padding: 20px;
      text-transform: none;
    }

    .new-comments > .buttons {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      gap: 30px;
    }

`;

const LiCard = styled.li`
    display: flex;
    flex-direction: column;
    width: 90%;
    box-sizing: content-box;
    /* border: solid 1px red; */
    padding: 10px;
    margin: 40px 0;
    font-family: 'Inter', sans-serif;

    
    p {
        color: #495057;
        display: flex;
        text-align: justify;
        width: 100%;
        margin: 0;
        margin-top: 10px;
        font-size: 13px;
        
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
    }
`
export {ProductPageStyled, LiCard};
