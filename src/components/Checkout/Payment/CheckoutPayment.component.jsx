import React from "react";
import { Elements } from '@stripe/react-stripe-js'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { stripeAppereanceOtions, stripePromise } from '../../../utils/stripe/stripe';
import { createOrderIntentThunk, updateOrderIntentThunk } from "../../../store/order/orderIntent/orderIntentThunk";
import {
    selectOrderIntent,
    selectOrderIntentSuccess,
    selectOrderIntentValidUntil
} from "../../../store/order/orderIntent/orderIntentSelector";
import AppLoading from "../../AppLoading/AppLoading.component";
import PaymentForm from './PaymentForm/PaymentForm.component'
import DateTimeUtils from "../../../utils/datetime/datetime.utils";

function CheckoutPayment() {
    const orderIntent = useSelector(selectOrderIntent)
    const orderIntentValidUntil = useSelector(selectOrderIntentValidUntil)
    const paymentIntent = orderIntent && orderIntent.paymentIntent
    const clientSecret = paymentIntent && paymentIntent.clientSecret
    const paymentIntentSuccess = useSelector(selectOrderIntentSuccess)
    const dispatch = useDispatch()

    const options = stripeAppereanceOtions

    useEffect(() => {
        const uuidKey = uuidv4()

        if (!orderIntent){
            console.log('create')
            createOrderIntentHandler()
        }
        else{
            console.log('update')
            updateIntentHandler()
        }
    }, [])

    const createOrderIntentHandler = () => {
        dispatch(createOrderIntentThunk())
    }

    const updateIntentHandler = () => {
        if (!isExpired())
            dispatch(updateOrderIntentThunk())
        else
            createOrderIntentHandler()
    }

    const isExpired = () => {
        return DateTimeUtils.isPastTime(orderIntentValidUntil)
    }

    return (
        <div>
            <h2>Payments Details</h2>
            {
                paymentIntentSuccess
                    ?
                    <Elements
                        stripe={stripePromise}
                        options={{ ...options, clientSecret }}>
                        <PaymentForm />
                    </Elements>
                    :
                    <AppLoading />
            }
        </div>
    );
}

export default CheckoutPayment;