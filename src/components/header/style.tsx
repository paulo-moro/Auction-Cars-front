import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  position: fixed;
  left: 0px;
  top: 0px;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  width: 100%;
  background-color: var(--color-gray-10);
  border-bottom: 1.5px solid var(--color-gray-5);

  .div-line {
    display: none;
  }

  .logo-MotorsShop {
    width: 10%;
    min-width: 120px;
    margin: 20px 10px 20px 20px;
  }

  .nav-menu {
    display: flex;
    width: 70px;
  }

  .icon-Menu {
    width: 18px;
  }

  .nav--menu-desktop {
    display: none;
  }

  @media (min-width: 640px) {
    font-size: 16px;
    #div-line {
      height: 80px;
      border: 1px solid var(--color-gray-6);
    }

    .nav-menu {
      display: none;
    }

    .nav--menu-desktop {
      margin-right: 5%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      min-width: 50%;
      gap: 10px;
    }

    .nav--menu-desktop-button {
      width: 50%;
    }

    .nav--login-register-desktop {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 50%;
      min-width: 200px;
      gap: 10px;
    }

    .nav--menu-desktop-h4 {
      display: flex;
      justify-content: center;
      min-width: 50%;
      color: var(--color-gray-2);
    }

    .nav--menu-desktop-button-register {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 50px;
      padding: 0px 10px;
      border: 1.5px solid var(--color-gray-4);
      border-radius: 4px;
      background-color: var(--color-white-fixed);
    }

    .nav--login-register-desktop > .initials{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        background-color: #4529E6;
        color: var(--color-gray-10);
        border-radius: 50%;
        padding: 10px;
    }

    .nav--login-register-desktop > .name-profile{
        color: #000000;
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;
        font-family: 'Lexend', sans-serif;
        font-style: normal;
        font-weight: 600;
        line-height: 25px;
        display: flex;
        width: 50%;
        align-items: center;
        gap: 10px;
    }
  }

  @media (min-width: 920px) {

    .nav--login-register-desktop{
      min-width: 250px;
    }

    .nav--menu-desktop-button {
      font-size: 20px;
    }
    .nav--menu-desktop {
      font-size: 20px;
    }
    .nav--menu-desktop-button-register {
      font-size: 20px;
    }
  }

  @media (min-width: 1200px) {
    
    .nav--menu-desktop-button-register {
      width: 50%;
    }
  }
`;

export const MenuStyled = styled.div`
  @media (min-width: 320px) {
    display: flex;
    position: fixed;
    flex-direction: column;
    width: 100%;
    height: auto;
    box-shadow: 0px 50px 55px var(--color-grey-1);

    .nav--menu-mobile {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
      background-color: var(--color-white-fixed);
      padding: 20px;
    }
    
    .nav--menu-mobile > .nav--menu-mobile-button {
      display: flex;
      align-items: center;
      width: 100%;
      height: 30px;
      margin: 20px;
      background: none;
      color: var(--color-gray-2);
    }

    .nav--login-register-mobile {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
      height: 170px;
      background-color: var(--color-white-fixed);
      border-top: 1.5px solid var(--color-gray-4);
      padding: 20px;

      .nav--menu-mobile-h4 {
        flex-direction: column;
        width: 90%;
        max-width: 341px;
        margin: 20px;
        color: var(--color-gray-2);
      }

      .mobile-button-register {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px 28px;
        margin: 20px;
        gap: 10px;
        width: 90%;
        max-width: 341px;
        min-height: 40px;
        border: 1.5px solid var(--color-gray-4);
        border-radius: 4px;
        background-color: var(--color-white-fixed);
      }
    }
  }

  @media (min-width: 640px) {
    display: none;
  }
`;
