import styled from "styled-components";

const ButtonStyled = styled.button`
    max-width: 146px;
    max-height: 48px;
    min-width: 119px;
    min-height: 38px;
    width: auto;
    height: auto;
    background: ${props => props.theme};
    color: ${props => props.color};
    border-radius: 4px;
    border: solid 1.5px;
    padding: 12px 28px;
    box-sizing: border-box;
`

export default ButtonStyled;