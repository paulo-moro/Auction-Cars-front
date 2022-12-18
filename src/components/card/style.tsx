import styled from "styled-components";

export const LiCard = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  font-family: 'Lexend';
  font-style: normal;
  width: 312px;
  height: 460px;
  padding: 0 10px;
  cursor: pointer;

  > figure {
    display: flex;
    justify-content: center;
    width: 300px;
    height: 152px;
    margin: 0;

  }

  > figure > img {
    height: 152px;
    max-width: 100%;
    margin-top: 1px;
  }

  > h2 {
    display: flex;
    flex-wrap: nowrap;
    font-style: normal;
    width: 100%;
    font-weight: 600;
    font-size: 16px;
    overflow: hidden;
    margin: 0;
    height: 20px;
  }

  > p {
    width: 95%;
    height: 48px;
    margin: 0;
    overflow: hidden;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

  label{
    font-size: 13px;
  }
  
  .div-buttons{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 15%;
    gap: 10px;
  }

  .div-buttons > button{
    text-transform: capitalize;
    font-size: 13px;
    padding: 15px;
    position: static;
  }
`;

export const DivCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 90%;
  height: 32px;
  gap: 30px;
  font-size: 13px;
  justify-content: space-between;
  
  div{
    display: flex;
    gap: 8px;
  }

`;

export const Span = styled.span`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 10px;
  background: var(--color-brand-4);
  border-radius: 4px;
  box-sizing: border-box;
  margin: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: var(--color-brand-1);
`;

