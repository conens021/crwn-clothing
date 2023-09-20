import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useState } from 'react';
import Skeleton from '../../../UI/Skeleton/Skeleton.component';
import Button from '../../../UI/Button/Button.component';
import {
    PaymentFormContainer,
    StripePaymentContainer,
    StripePaymentElementContainer
} from './PaymentForm.styles';
import { sizes } from '../../../../styles/sizes';
import { useDispatch, useSelector } from 'react-redux';
import { selectShippingDetails } from '../../../../store/order/shippingDetails/shippingDetailsSelector';
import { updateOrderShippingDetailsThunk } from '../../../../store/order/orderConfirm/orderConfirmThunk';
import { selectOrderConfirmError, selectOrderConfirmItem, selectOrderConfirmSuccess } from '../../../../store/order/orderConfirm/orderConfirmSelector';
import ComponentLoading from '../../../ComponentLoading/ComponentLoading.component';
import { useEffect } from 'react';
import FormError from '../../../UI/FormError/FormError.component';
import { resetOrderIntent } from '../../../../store/order/orderIntent/orderIntentSlice';
import OrderService from '../../../../services/OrderService';
import { selectOrderIntent } from '../../../../store/order/orderIntent/orderIntentSelector';

function PaymentForm() {
    const [formIsLoaded, setFormIsLoaded] = useState(false)
    const [formIsLoading, setFormIsLoading] = useState(false)
    const [formError, setFormError] = useState(null)

    const shippingDetails = useSelector(selectShippingDetails)
    const orderIntent = useSelector(selectOrderIntent)
    const orderConfirm = useSelector(selectOrderConfirmItem)
    const orderConfirmSuccess = useSelector(selectOrderConfirmSuccess)
    const orderConfirmError = useSelector(selectOrderConfirmError)

    const dispatch = useDispatch()
    const stripe = useStripe()
    const elements = useElements()

    const buttonWidthMedium = sizes.button.width.medium
    const buttonHeightMedium = sizes.button.height.medium

    useEffect(() => {
        if (orderConfirmSuccess)
            paymentRequestHandler()
        if (orderConfirmError) {
            setFormError(orderConfirmError)
            setFormIsLoading(false)
        }

    }, [orderConfirmSuccess, orderConfirmError])

    const paymentHandler = async (event) => {
        event.preventDefault()

        if (stripeNotRegister())
            return

        setFormIsLoading(true)
        setFormError(null)

        const { id: orderId } = orderIntent

        try {
            await OrderService.StartOrderRequest(orderId)
        } catch (err) {
            setFormError("Order already requested!")
            setFormIsLoading(false)

            /* await OrderService.OrderRequestFailed(orderId) */

            return
        }

        dispatch(updateOrderShippingDetailsThunk(shippingDetails))
    }

    const paymentRequestHandler = async () => {
        if (stripeNotRegister() || !orderConfirm)
            return

        const { id: orderId } = orderConfirm

        //set payment in proccess
        /*   await OrderService.StartOrderProccess(orderId) */

        await OrderService.StartOrderRequest(orderId)

        const { error } = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
                return_url: `http://localhost:3000/order/${orderId}/completed`,
            },
        });

        if (error) {
            // This point will only be reached if there is an immediate error when
            // confirming the payment. Show error to your customer (for example, payment
            // details incomplete)
            setFormError(error.message);
            setFormIsLoading(false)
            //set payment request failed
            await OrderService.OrderRequestFailed(orderId)
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
        }
    }

    const stripeNotRegister = () => {
        if (!stripe || !elements) {
            setFormIsLoading(false)
            setFormError('Payment service not register! Please refresh page!')
            return true
        }

        return false
    }

    const orderRequestHandler = async (orderId) => {

    }

    return (
        <PaymentFormContainer>
            <StripePaymentContainer onSubmit={paymentHandler}>
                <StripePaymentElementContainer>
                    {
                        !formIsLoaded &&
                        <Skeleton style={{ position: 'absolute', zIndex: '100' }} width={'100%'} height={'100%'} />
                    }
                    <PaymentElement onReady={() => setFormIsLoaded(true)} />
                </StripePaymentElementContainer>
                {formError && <FormError errorMsg={formError} />}
                {
                    !formIsLoaded
                        ?
                        <Skeleton width={buttonWidthMedium} height={buttonHeightMedium} />
                        :
                        <Button variant='filled' size='medium' color='primary'>
                            {
                                formIsLoading ?
                                    <ComponentLoading color='light' />
                                    :
                                    "PAY NOW"
                            }
                        </Button>
                }
            </StripePaymentContainer>
        </PaymentFormContainer>
    );
}

export default PaymentForm;