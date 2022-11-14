import styled from "styled-components";

export const ListStyle = styled.div`

    width: 751px;
    height: 557px;
    margin-top: 30px;
    padding: 36px 44px;
    gap: 24px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    background: #FDFDFD;
    border-radius: 4px;


    .ul--list-comments{
        display: flex;
        flex-direction: column;
        height: 420px;
        overflow-y: scroll;
        gap: 20px;
    }

    h2{
        height: 10%;
        margin: 20px;

        font-family: 'Lexend';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;

        color: #212529;
    }

`