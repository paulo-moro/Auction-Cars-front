import styled from "styled-components";
import { motion } from "framer-motion";

export const ProductPageStyled = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: linear-gradient(
      to bottom,
      var(--color-brand-2) 500px,
      #f1f3f5 0
    );
    gap: 30px;
  }
`;

export const ContainerIMG = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: var(--color-gray-10);
    width: 95%;
    margin-top: 100px;
    min-height: 350px;
    border-radius: 4px;

    img {
      width: 80%;
      padding: 20px;
      min-width: 100%;
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
      width: 50%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    div > label {
      padding: 10px;
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
    gap: 50px;
    width: 95%;
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

export const ContainerGalery = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    background: var(--color-gray-10);
    width: 95%;
    padding: 40px 20px;

    h3 {
      width: 90%;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 10px;
    }

    img {
      width: 70px;
      height: 70px;
      margin: 5px;
    }
  }
`;

export const ContainerOwnerProduct = styled(motion.div)`
  @media (min-width: 320px) {
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

export const ContainerComments = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    background: var(--color-gray-10);
    width: 95%;
    align-items: center;
    border-radius: 5px;
    padding: 20px;
    gap: 40px;
  }
`;

export const ContainerNewComments = styled(motion.div)`
  @media (min-width: 320px) {
    border: 1px solid red;
    display: flex;
    width: 90%;
    flex-direction: column;
    padding: 10px;
    gap: 40px;
    background: #ffffff;

    input {
      width: 90%;
    }

    button {
      padding: 20px;
      text-transform: none;
    }

    div {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      gap: 30px;
    }
  }
`;
