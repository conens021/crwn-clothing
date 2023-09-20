import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { updateOrderShippingDetailsThunk } from "./orderConfirmThunk";

const initialState = {
    item: null,
    loading: false,
    success: false,
    error: null,
    errorCode: null
}

const orderConfirm = createSlice({
    name: 'orderConfirm',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(updateOrderShippingDetailsThunk.pending, (state) => {
            state.error = null
            state.errorCode = null
            state.success = false
            state.loading = true
        })
        builder.addCase(updateOrderShippingDetailsThunk.fulfilled, (state, action) => {
            const { payload } = action
            state.loading = false
            state.success = true
            state.item = payload
        })
        builder.addCase(updateOrderShippingDetailsThunk.rejected, (state, action) => {
            const { payload } = action
            const { message, code } = payload

            state.loading = false
            state.success = false
            state.error = message
            state.errorCode = code
        })
    }
})

export const { resetOrderIntent } = orderConfirm.actions

export default orderConfirm.reducer