import React from "react";
import CheckoutOrderPreview from "../../components/Checkout/OrderPreview/CheckoutOrderPreview.component";
import CheckoutPayment from "../../components/Checkout/Payment/CheckoutPayment.component";
import CheckoutShippingDetails from "../../components/Checkout/ShippingDetails/CheckoutPaymentDetails.component";
import Typography from "../../components/UI/Typography/Typography.component";
import { PaymentPageContainer, ShippingAndPaymentContainer } from "./Payment.page.styles";

function PaymentPage() {
    return (
        <React.Fragment>
            <Typography component="h1">Payment</Typography>
            <PaymentPageContainer>
                <ShippingAndPaymentContainer>
                    <CheckoutShippingDetails />
                    <CheckoutPayment />
                </ShippingAndPaymentContainer>
                <CheckoutOrderPreview />
            </PaymentPageContainer>
        </React.Fragment>
    );
}

export default PaymentPage;