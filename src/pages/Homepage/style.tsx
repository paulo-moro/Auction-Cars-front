import styled from "styled-components";

const HomePageStyled = styled.body`
  @media (min-width: 320px) {
    .welcome {
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
      height: 470px;

      h1 {
        width: 90%;
        max-width: 680px;
        font-size: 25px;
        text-align: center;
      }

      p {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 95%;
        font-size: 18px;
      }

      .div--botoes {
        display: flex;
        flex-direction: column;
        width: 90%;
        max-width: 400px;
        gap: 15px;
      }
    }
  }

  @media (min-width: 640px) {
    .welcome {
      h1 {
        font-size: 30px;
      }

      p {
        font-size: 22px;
      }

      .div--botoes {
        flex-direction: row;
        max-width: 740px;
        justify-content: space-around;

        button {
          width: 200px;
          height: 50px;
        }
      }
    }
  }

  @media (min-width: 640px) {
    .welcome {
      h1 {
        font-size: 40px;
      }
    }
  }
`;

export default HomePageStyled;
