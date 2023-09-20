import styled from "styled-components";

export const GridItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(250px, 1fr) );
    grid-template-columns : repeat(4,1fr);
    column-gap: 1.3rem;
    row-gap: 2rem;
    width: 100%;
    max-width: 100%;
    grid-auto-rows: 450px;

    @media (min-width: 464px) and (max-width: 1024px) {
        grid-template-columns : repeat(3,1fr);
        grid-auto-rows: 320px;
      }
    @media (max-width: 464px) {
        grid-template-columns : repeat(2,1fr);
        grid-auto-rows: 260px;
      }

`