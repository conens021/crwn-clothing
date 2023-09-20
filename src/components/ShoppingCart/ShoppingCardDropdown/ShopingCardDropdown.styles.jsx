import styled from "styled-components";
import { BaseButton, ButtonFilled } from '../../UI/Button/Button'
import { colors } from "../../../styles/colors";
import { Link } from "react-router-dom";

export const CartDropdownContainer = styled.div`
    position: absolute;
    height: 520px;
    width: 340px;
    max-height : 90vh;
    max-width : 90vw;
    z-index: 5;
    background-color: white;
    border: 2px solid ${colors.primary.default};
    top: 50px;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    padding: 2rem;
    row-gap: 2rem;
    display: ${props => props.vissible ? 'flex' : 'none'};
`

export const CartDropdownItems = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    justify-content: flex-start;
    align-items: stretch;
    height : 320px;
    overflow-y: auto;
    padding-right: 1rem;
`

export const CartSum = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${props => props.align};
    columnGap: .3rem;
    margin-bottom:1rem;
`

export const CartActionContainer = styled(Link)`
    flex: 1;
    display:flex;
    justify-content:center;
`
