import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { createOrderIntentThunk, updateOrderIntentThunk } from "./orderIntentThunk";

const initialState = {
    item: null,
    validUntil: null,
    loading: false,
    success: false,
    error: null,
    errorCode: null
}

const orderIntentSlice = createSlice({
    name: 'orderIntent',
    initialState: initialState,
    reducers: {
        resetOrderIntent: (state) => {
            state.item = null
            state.validUntil = null
            state.success = false
            state.error = null
            state.errorCode = null
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(isAnyOf(
            createOrderIntentThunk.pending,
            updateOrderIntentThunk.pending
        ), (state) => {
            state.loading = true
            state.error = null
            state.errorCode = null
            state.success = false
        })
        builder.addMatcher(isAnyOf(
            createOrderIntentThunk.fulfilled,
            updateOrderIntentThunk.fulfilled
        ), (state, action) => {
            const { payload } = action
            const { validUntil } = payload

            state.loading = false
            state.success = true
            state.item = payload
            state.validUntil = validUntil ? validUntil : state.validUntil
        })
        builder.addMatcher(isAnyOf(
            createOrderIntentThunk.rejected,
            updateOrderIntentThunk.rejected
        ), (state, action) => {
            const { payload } = action
            const { message, code } = payload

            state.loading = false
            state.success = false
            state.error = message
            state.errorCode = code
        })
    }
})

export const { resetOrderIntent } = orderIntentSlice.actions

export default orderIntentSlice.reducer