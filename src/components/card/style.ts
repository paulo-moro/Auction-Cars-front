import styled from "styled-components";

export const LiCard = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 16px;
  
  width: 312px;
  height: 350px;
  cursor: pointer;

  > figure {

    box-sizing: border-box;
    width: 312px;
    height: 152px;
    margin: 0;

    background-color: var(--color-gray-7);

  }

  > img {

    width: 262px;
    height: 150.28px;
    margin-left: 25px;
    margin-top: 1px;

  }

  > h2 {

    font-family: 'Lexend', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;

    width: 312px;
    height: 22px;
    margin: 0;

  }

  > P {

    width: 312px;
    height: 48px;
    margin: 0;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

  }

`;

export const DivCard = styled.div`

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 28px;
  
  width: 309px;
  height: 32px;

  > div {
    display: flex;
    flex-direction: row;
  }

  > span {

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 10px;

    width: 51px;
    height: 32px;

    background: var(--color-brand-4);
    border-radius: 4px;
    box-sizing: border-box;
  }

  > p {

    margin: 0;
    width: 35px;
    height: 24px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    color: var(--color-brand-1);
  }

`;

export const SpanCard = styled.span`

  > p {
    width: 105px;
    height: 20px;
    margin-left: 85px;
    margin-top: 4px;
   }
`;
