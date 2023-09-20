import styled from "styled-components";

export const AppLoadingContainer = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 50;
    background: ${props => props.backgroundColor};
    display:flex;
    justify-content:center;
    align-items:center
`