import styled from "styled-components";
import { Link } from 'react-router-dom'
import AppImage from "../../UI/Image/Image.component";


export const CategoryItemBackground = styled.img`
    display:none;
    position:absolute;
    top:0;
    left:0;
    z-index:2;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    transition: all 2.8s ease-in-out;
`

export const CategoryItemBody = styled.div`
    width: 100%;
    height: 100%;
    transition: all .3s;
    background-color: rgb(37, 37, 37);
    position: absolute;
    opacity: 0.6;
    z-index: 3;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    & .text {
        border: 2px solid black;
        background-color: white;
        width: 150px;
        text-align: center;
        padding: 5px 8px 25px;
        display: flex;
        flex-direction: column;
        row-gap: .7rem;

        & p {
            text-decoration: underline;
        }
    }
`

export const CategoryItemContainer = styled(Link)`
    flex: 1 1 auto;
    height: 250px;
    width: 480px;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    & img{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
        transition: all 2.8s ease-in-out;
    }

    &:hover img {
        transform: scale(1.1);
    }

    &:hover ${CategoryItemBody} {
        opacity: 0.65;
    }

`
