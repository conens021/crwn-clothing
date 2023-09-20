import { createSlice } from "@reduxjs/toolkit";
import { getDirectoryCategoriesThunk } from "./directoryCategoriesThunk";

const initialState = {
    items: [],
    isLoading: false,
    success: false,
    error: null
}

const directoryCategoriesSlice = createSlice({
    name: 'directoryCategories',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getDirectoryCategoriesThunk.pending, (state) => {
            state.error = null
            state.success = null
            state.isLoading = true
        })
        builder.addCase(getDirectoryCategoriesThunk.fulfilled, (state, action) => {
            const { payload } = action

            state.items = payload
            state.isLoading = false
            state.success = true
        })
        builder.addCase(getDirectoryCategoriesThunk.rejected, (state, action) => {
            const { payload } = action
            const { message } = payload

            state.isLoading = false
            state.error = message
        })
    }
})

export default directoryCategoriesSlice.reducer