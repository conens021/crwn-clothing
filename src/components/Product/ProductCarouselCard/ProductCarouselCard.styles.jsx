import styled from "styled-components";
import { Link } from 'react-router-dom'

export const ProductCardImageContainer = styled.div`
    height: 100%;
    width:100%;
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
        transition: all .3s ease-in;
    }
    &:hover {
        img{
            opacity: 0.8;
            transform:scale(1.3);
        }
    }
`
export const ProductCardContainer = styled(Link)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    row-gap: .5rem;
`

export const ProductCardFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
`