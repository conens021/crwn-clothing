import styled from 'styled-components'

export const BaseButton = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    border: 1px solid transparent;
    cursor: pointer;
    height : ${props => props.height};
    min-width : ${props => props.width};
    transition : all .15s ease-in;
    color: ${props => props.color};
    background-color : transparent;
    font-size : ${props => props.fontSize};
    font-weight : bold;
    letter-spacing : .7px;

    &:hover {
        color : ${props => props.hoverColor};
        background-color : transparent;
    }

    &:disabled{
        cursor:not-allowed;
        background-color:${props => props.disabledColor} !important;
    }
`

export const ButtonFilled = styled(BaseButton)`
      color: ${props => props.textColor};
      background-color : ${props => props.color};
      
        &:hover {
            background-color:${props => props.hoverColor};
            color : ${props => props.textColor};
        }
`