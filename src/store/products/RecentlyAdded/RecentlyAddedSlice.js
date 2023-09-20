import { createSlice } from "@reduxjs/toolkit"
import { getRecentlyAddedProudctsThunk } from "./recentlyAddedThunk"

const initialState = {
    items: [],
    loading: false,
    success: false,
    errorMsg: null,
    errorCode: null
}

const recentlyAddedProductsSlice = createSlice({
    name: 'recentlyAddedProducts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getRecentlyAddedProudctsThunk.pending, (state) => {
            state.loading = true
            state.success = false
            state.error = null
        })
        builder.addCase(getRecentlyAddedProudctsThunk.fulfilled, (state, action) => {
            const { payload } = action

            state.loading = false
            state.success = true
            state.items = payload
        })
        builder.addCase(getRecentlyAddedProudctsThunk.rejected, (state, action) => {
            const { payload } = action
            const { code, message } = payload

            state.loading = false
            state.errorMsg = message
            state.errorCode = code
        })
    }
})


export default recentlyAddedProductsSlice.reducer