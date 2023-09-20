import { createAsyncThunk } from "@reduxjs/toolkit"
import errorsHandler from "../../../errorsHandler"
import OrderService from "../../../services/OrderService"

export const updateOrderShippingDetailsThunk = createAsyncThunk(
    'orderIntent/updateShippingDetails',
    async (shippingDetails, { getState, rejectWithValue }) => {
        try {
            const { orderIntent: orderIntentstate } = getState()
            const { id: orderId } = orderIntentstate.item

            const order = await OrderService.UpdateShippingDetails(orderId, shippingDetails)

            return order
        } catch (err) {
            const { code, message } = errorsHandler.handleClientError(err)

            return rejectWithValue({ code, message })
        }
    }
)
