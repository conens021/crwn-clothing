import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const TextInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height : 50px;
    min-height : 50px;
    background-color : #e6e6e6;
    flex: ${props => props.fullWidth && '1'};
    max-width : 100%;
`

export const TextInputHelperText = styled.span`
    position: relative;
    font-size:.85rem;
    top: 10px;
    color : ${props => !props.valid ?
        colors.error.default :
        (props.success ? colors.success.default : 'color: rgb(53, 53, 53)')};
`

export const TextInputField = styled.input`
    padding-top:1rem;
    font-size : 15px;
    width: 100%;
    height: 50px;
    min-height : 50px;
    border: 1px solid transparent;
    border-bottom: 1px solid gray;
    z-index: 3;
    background-color: transparent;
    transition : all .3s ease-in-out;
    border-bottom-color : ${props => props.active && props.color};
    border-bottom-color : ${props => !props.valid && props.errorColor};
    border-bottom-color : ${props => props.success && props.successColor};

    &:focus {
        outline: none !important;
    }

    &.label{
        transition: all .3s ease-in-out;
    }

    &:focus+.label {
        top: -15px;
        color: rgb(53, 53, 53);
        font-size: 13px;
    }
`
export const Label = styled.label`
    position: absolute;
    top: ${props => props.fixed ? '0' : '15px'};
    left : ${props => props.fixed ? '0' : '5px'};
    font-size : ${props => props.fixed ? '12px' : '15px'};
    color: ${props => props.fixed ? props.color : 'gray'};
    z-index: 2;
    transition: all ease-in-out .12s;
`
