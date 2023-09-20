import styled from "styled-components";

export const MainProductContainer = styled.div`
    display:grid;
    grid-template-columns : 5fr 4fr;
    column-gap:1rem;
    min-height:90vh;

    @media (max-width: 689px){
        grid-template-columns : 1fr;
    }
`
export const ProductImagesContainer = styled.div`
   img{
        object-fit: contain;
        object-position: center;
        width: 100%;
        height: auto;
        @media (min-width: 689px){
            max-height: 100vh;
        }
   }
`
export const ProductMainInfoContainer = styled.div`

`

export const ProudctMainPriceContainer = styled.div`
    font-weight : normal;
    font-size : 2.6rem;
`

export const ProducttMobileTitleContainer = styled.div`
    @media (min-width: 690px){
       display:none;
   }
`

export const ProductDekstopTitleContainer = styled.div`
    h1{
        margin-right:1rem;
    }

    @media (max-width: 689px){
        display:none;
    }
`
export const ProductReviews = styled.div`
    margin-bottom:1rem;
    min-height:6rem;
`

export const ProductActionsContainer = styled.div`
    display:flex;
    column-gap:.5rem;
    margin-bottom:1rem;
    flex-wrap : wrap;
    align-items: center;
    justify-content: center;
    row-gap: .7rem;
`

