import styled from "styled-components";

export const PaymentPageContainer = styled.div`
    display : flex;
    justify-content : space-between;
    flex-wrap : wrap;
    column-gap : 3rem;

    @media (max-width: 768px) {
        flex-direction: column;
      }
`

export const ShippingAndPaymentContainer = styled.div`
    flex : 1;
    display : flex;
    flex-direction: column;
    row-gap:2rem;
    margin-bottom : 2rem;
    margin-top : 2rem;
`