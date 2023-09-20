import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ComponentLoading from "../../components/ComponentLoading/ComponentLoading.component";
import OrderService from "../../services/OrderService";
import { emptyUserCartThunk } from "../../store/cart/cartThunk";
import { resetOrderIntent } from "../../store/order/orderIntent/orderIntentSlice";

function OrderCompletedPage() {
    const [requestLodaing, setRequestLoading] = useState(false)
    const params = useParams()
    const { id } = params
    const dispatch = useDispatch()

    useEffect(() => {
       /*  setOrderRequestHandler() */
        dispatch(resetOrderIntent())
        dispatch(emptyUserCartThunk())
    }, [])

/*     const setOrderRequestHandler = async () => {
        setRequestLoading(true)
        try {
            const order = await OrderService.SetOrderRequest(id)
            setRequestLoading(false)

        } catch (err) {
            setRequestLoading(false)
        }
    } */

    return (
        <React.Fragment>
            {
                requestLodaing ?
                    <ComponentLoading />
                    :
                    <h1>Order {id} completed</h1>
            }
        </React.Fragment>
    );
}

export default OrderCompletedPage;