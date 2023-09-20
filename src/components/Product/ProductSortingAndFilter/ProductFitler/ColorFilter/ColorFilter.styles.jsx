import styled from "styled-components";

export const ColorFilterContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    column-gap: 2rem;
    flex-wrap : wrap;
    cursor : pointer;
`

export const ColorFilterItemContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    row-gap: 1rem;
`
export const ColorFilterTitle = styled.span`
    font-size : 0.85rem;
    letter-spacing : 0.9px;
    color: ${props => props.active && 'green'};
    transition : all .15s ease-in;
`

export const ColorPreviewContainer = styled.div`
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background-color: ${props => props.color};    
    border : ${props => props.active && '3px solid green'};
    transition : all .15s ease-in;
`