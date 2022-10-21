import styled from "styled-components"

const UserIconStyle = styled.div`
    
    display: flex;
    gap: 10px;
    font-size: 15px;

    .icon-user{
        color: ${props => props.color ? props.color : "#FFFFFF"};
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background-color: ${props => props.theme && props.theme};
        border-radius: 50%;
    }

    .name-user{
        display: flex;
        align-items: center;
        color: ${props => props.color && props.color};
    }

`

export { UserIconStyle };