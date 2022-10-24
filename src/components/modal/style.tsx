import styled from "styled-components";

export const Container = styled.section`

    .containerModal {

        position: absolute;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;

    }

    .containerModal .modal {

        width: 371px;
        height: 342px;
        border: solid 1px;
        background-color: white;
        position: relative;
        border-radius: 4px;
        gap: 22px;

        background: #212529;

        box-shadow: 0px 4px 40px -10px 
        rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        box-sizing: border-box;

    }

    .containerModal .modal button.removedModal
    {
        color: #868E96;
        background: none;
        border: none;
        font-family: "Nunito", sans-serif;
        font-style: normal;
        font-size: 20px;
        position: absolute;
    
        width: 11px;
        height: 26px;
        top: 8px;
        right: 30px;
        cursor: pointer;
    }

    > .hidden {
        display: none;
    }

    .modalHeader {
    
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 12px 20px;

        /*position: absolute;*/
        width: 369px;
        height: 50px;
        box-sizing: border-box;

        background: #FFFFFF;
        border-radius: 4px 4px 0px 0px;
    
    }

    .modalHeader > h1 {

        width: 150px;
        height: 24px;
        display: flex;
        align-items: center;

        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 700;
        line-height: 2px;

        color: #212529;

    }

    .modalBody {

        width: 347px;
        height: 252px;
        margin: 10px;

        display: flex;
        justify-content: space-around;
        align-items: center;

        background: #FFFFFF;
        border-radius: 4px 4px 0px 0px;
        box-sizing: border-box;

    }


    ::placeholder {
        color: #F8F9FA;
    }

`;

// export const DivProps = styled.div`

//     position: absolute;
//     width: 100vw;
//     height: 100vh;
//     position: fixed;
//     top: 0;
//     background-color: rgba(0, 0, 0, 0.2);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     z-index: 2;

//     > DivModal {

//     }

// `;

// export const DivModal = styled.div`

//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 0px;
//   gap: 28px;
  
//   width: 309px;
//   height: 32px;

//   > div {
//     display: flex;
//     flex-direction: row;
//   }


// `;
