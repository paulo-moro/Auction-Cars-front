import styled from "styled-components";

const AuctionCardStyle = styled.div`
    min-width: 300px;
    min-height: 490px;
    width: 70%;
    max-width: 735px;
    /* max-height: 360px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    border-radius: 4px 4px 0px 0px;
    color: var(--color-white-fixed);
    font-family: 'Lexend', sans-serif;
    background-image: ${props => props.theme.background};
    
    
    .auction-time{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
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