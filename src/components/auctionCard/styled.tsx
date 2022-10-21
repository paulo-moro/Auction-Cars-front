import styled from "styled-components";

const AuctionCardStyle = styled.div`

    
    min-width: 300px;
    min-height: 490px;
    width: 70%;
    max-width: 735px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, var(--color-grey-0) 100%), url(${(props) => props.theme});
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    border-radius: 4px 4px 0px 0px;
    color: var(--color-white-fixed);
    font-family: 'Lexend', sans-serif;
    background-size: contain;
    
    .auction-time{
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-grey-1);
        margin: 10px 15px;
        background-color: var(--color-white-fixed);
        width: 110px;
        height: 30px;
        border-radius: 32px;
    }
    h3{
        font-weight: var(--font-heading-3-600);
        font-size: 22px;
        margin: 10px 15px;
    }

    .tagets{
        display: flex;
        width: 90%;
        gap: 10px;
        margin: 10px 15px;
    }

    p{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        width: 85%;
        font-size: 15px;
        font-weight: var(--font-heading-3-500);
        margin: 10px 15px;
    }
    
    .price{
        font-size: 15px;
    }
`

export { AuctionCardStyle }