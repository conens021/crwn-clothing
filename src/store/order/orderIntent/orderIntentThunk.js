import { createAsyncThunk } from "@reduxjs/toolkit";
import errorsHandler from "../../../errorsHandler";
import OrderService from "../../../services/OrderService";

export const createOrderIntentThunk = createAsyncThunk(
    'orderIntent/createOrderIntent',
    async (arg, { rejectWithValue }) => {
        try {
            const orderIntent = await OrderService.CreateOrderIntent();

            return orderIntent
        } catch (err) {
            const { code, message } = errorsHandler.handleClientError(err)

            return rejectWithValue({ code, message })
        }
    }
)

export const updateOrderIntentThunk = createAsyncThunk(
    'orderIntent/updatePaymentIntent',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { orderIntent: orderIntentstate } = getState()
            const { id: orderId } = orderIntentstate.item

            const paymentIntent = await OrderService.UpdateOrderIntent(orderId);

            return paymentIntent
        } catch (err) {
            const { code, message } = errorsHandler.handleClientError(err)

            return rejectWithValue({ code, message })
        }
    }
)

