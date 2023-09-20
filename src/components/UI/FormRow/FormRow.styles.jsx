import styled from "styled-components";

export const FormRowContainer = styled.div`
    flex: 1;
    display: flex;
    row-gap: 3rem; 
    flex-wrap : wrap;
    column-gap : .5rem;
    max-width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
      }
`