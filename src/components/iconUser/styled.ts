import styled from "styled-components"

const UserIconStyle = styled.div`
    
    display: flex;
    width: 80%;
    gap: 10px;
    font-size: 15px;

    .icon-user{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background-color: red;
        border-radius: 50%;
    }

    .name-user{
        display: flex;
        align-items: center;
    }

`

export { UserIconStyle };