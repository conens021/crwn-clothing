import styled from "styled-components"

export const OrderProductItemContainer = styled.div`
    display : flex;
    align-items:center;
    justify-content:space-between;
    column-gap: 2rem;
`
export const OrderProductImageContainer = styled.div`
    height: 140px;
    width:100px;
    position: relative;
    overflow:hidden;

    img{
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
    }
`

export const OrderProductTitleContainer = styled.div`
    flex:1;
    display: flex;
    justify-content : flex-start;
    align-items: center;
`