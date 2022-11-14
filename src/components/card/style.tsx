import styled from "styled-components";

export const LiCard = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 16px;
  font-family: 'Lexend';
  font-style: normal;
  
  width: 312px;
  height: 460px;
  cursor: pointer;

  > figure {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 152px;
    margin: 0;

    background-color: #E9ECEF;

  }

  > figure > img {

    height: 100%;
    margin-left: 25px;
    margin-top: 1px;

  }

  > h2 {

    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    overflow: hidden;

    width: 100%;
    height: 22px;
    margin: 0;

  }

  > p {

    width: 100%;
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
    width: 100%;
    gap: 20px;

  }


  .div-buttons > button{
    text-transform: capitalize;
    font-size: 13px;
    padding: 15px;

  }
`;

export const DivCard = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 32px;
  gap: 10px;

  font-size: 13px;
  
  div{
    display: flex;
    justify-content: space-between;
    width: 65%;
  }


`;

export const Span = styled.span`

  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 5px;

  background: #EDEAFD;
  border-radius: 4px;
  box-sizing: border-box;

  margin: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
          
  color: #4529E6;
  
`;

