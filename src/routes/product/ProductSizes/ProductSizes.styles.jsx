import styled from "styled-components";

export const ProductSizesWrapperConainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction : column;
    row-gap : .5rem;
    margin-bottom :2rem;
`
export const ProductSizesContainer = styled.div`
    display:flex;
    row-gap: 1rem;
    flex-direction : column;    
    padding-right: 5rem;
    border : 1px solid ${props => props.error ? 'red' : 'transparent'}; 
    padding : 0.5rem 1rem;

  
    @media (max-width: 690px){
        padding-right: 0;
    }
`
export const ProductSizesLabel = styled.span`
    font-size : 1.1rem;
`

export const ProductSizesItems = styled.div`
    display:flex;
    justify-content:flex-start;
    column-gap:1rem;
    flex-wrap : wrap;
    row-gap:1rem;
`

export const ProductSizeItemContainer = styled.div`
    width : 64px;
    height : 38px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius : 10px;
    border: 1px solid ${props => props.active ?
        'black' : props.disabled ? '#cfcfcf' : '#d4d4d4'};
    cursor :${props => props.disabled ? 'not-allowed' : 'pointer'};
    color : ${props => props.disabled && '#cfcfcf'};

    &:hover{
        border: 1px solid ${props => !props.disabled ? 'black' : '#cfcfcf'};
    }
`