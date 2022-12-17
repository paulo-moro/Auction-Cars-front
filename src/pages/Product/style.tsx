import styled from "styled-components";
import { motion } from "framer-motion";

export const ProductPageStyled = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-bottom: 50px;
    background: linear-gradient(
      to bottom,
      var(--color-brand-2) 550px,
      #f1f3f5 0
    );

    .div--main{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }

    .div--main > .aside--mobile{
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    aside{
      display: none;
    }

    div > button{
      position: static;
    }
  }

  @media (min-width: 740px) {
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    gap: 50px;
    

    .div--main > .aside--mobile{
      display: none;
    }

    aside{
      margin-top: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const ContainerIMG = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-gray-10);
    width: 95%;
    min-height: 350px;
    max-width: 751px;
    max-height: 355px;
    margin-top: 100px;
    border-radius: 4px;
    padding: 30px 10px;

    img {
      width: 100%;
      padding: 10px;
      max-height: 441px;
      max-width: 441px;
    }
  }
`;

export const ContainerInfoProduct = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: var(--color-gray-10);
    width: 95%;
    max-width: 751px;
    padding: 30px;
    gap: 30px;
    justify-content: space-around;
    background: var(--color-gray-10);
    border-radius: 4px;

    p {
      font-weight: var(--font-heading-3-600);
      font-size: 16px;
    }

    div {
      width: 150px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    div > label {
      padding: 10px;
      width: 60px;
      text-align: center;
    }

    label {
      font-size: 13px;
    }

    button {
      width: 100px;
      height: 38px;
    }
  }
`;

export const ContainerDescription = styled(motion.div)`
  @media (min-width: 320px) {
    gap: 20px;
    width: 95%;
    max-width: 751px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: var(--color-gray-10);
    border-radius: 4px;

    p {
      width: 95%;
      color: #495057;
      font-size: 15px;
      font-family: "Inter", sans-serif;
    }
  }
`;


export const ContainerComments = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    background: var(--color-gray-10);
    width: 95%;
    max-width: 751px;
    align-items: center;
    border-radius: 5px;
    padding: 20px 0;
    gap: 40px;
  }
`;

export const ContainerNewComments = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    width: 95%;
    max-width: 751px;
    flex-direction: column;
    padding: 30px;
    gap: 20px;
    background: #ffffff;
    border-radius: 4px;
    
    input {
      width: 90%;
    }

    button {
      padding: 20px;
      text-transform: none;
      position: static;
    }

    div {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      gap: 30px;
    }
  }
`;


export const ContainerGalery = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    background: var(--color-gray-10);
    width: 95%;
    max-width: 440px;
    padding: 30px 15px;

    h3 {
      width: 90%;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    img {
      width: 30%;
      margin: 20px 0px;
    }
  }
`;


export const Aside = styled(motion.aside)`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
    gap: 30px;
}

`

export const ContainerOwnerProduct = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    background: var(--color-gray-10);
    width: 95%;
    max-width: 440px;
    align-items: center;
    height: auto;
    max-height: 480px;
    border-radius: 5px;
    padding: 40px 20px;
    gap: 30px;

    .initialsName {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      background-color: #4529e6;
      color: var(--color-gray-10);
      border-radius: 50%;
      width: 70px;
      height: 70px;
    }

    h4 {
      color: #000000;
      font-family: "Lexend", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .description {
      display: flex;
      width: 95%;
      color: #495057;
      font-size: 15px;
      font-family: "Inter", sans-serif;
    }

    button {
      padding: 15px;
      width: auto;
      height: auto;
      font-size: 15px;
      text-transform: none;
    }
  }
`;


export const LiCard = styled.li`
    display: flex;
    flex-direction: column;
    width: 90%;
    box-sizing: content-box;
    /* border: solid 1px red; */
    padding: 10px;
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