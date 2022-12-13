import styled from "styled-components";
import { motion } from "framer-motion";

export const AsideStyled = styled(motion.section)`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
  }

  @media (min-width: 740px) {
    max-width: 440px;
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
    max-width: 751px;
    padding: 30px 15px;
    border-radius: 4px;

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
