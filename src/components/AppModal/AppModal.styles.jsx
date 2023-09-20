import styled from "styled-components";

export const ModalBackdropContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(41, 41, 41,0.7);
`

export const ModalContainer = styled.div`
    position:relative;
    width:  ${props => props.width};
    max-width:90%;
    height:${props => props.height};
    max-height : 90vh;
    background-color:${props => props.backgroundColor};
    border-radius:12px;
    padding:2rem 1rem;
    display:flex;
    flex-direction:column;
    overflow-y:hidden;
`

export const ModalHeadingContainer = styled.div`
   position:relative;
`

export const AppModalBody = styled.div`
    flex:1;
    overflow-y:auto;
`

export const AppModalFooter = styled.div`

`