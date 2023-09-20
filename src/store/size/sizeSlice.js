import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected: null,
    addToCartSubmited: false
}

const sizeSlice = createSlice({
    name: 'size',
    initialState,
    reducers: {
        setSelected: (state, action) => {
            const { payload } = action

            state.selected = payload
        },
        resetChecked: (state) => {
            state.selected = null
            state.addToCartSubmited = false
        },
        setAddToCartSubmited: (state, action) => {
            const { payload } = action

            state.addToCartSubmited = payload
        }
    }
})

export default sizeSlice.reducer

export const { setSelected, resetChecked,setAddToCartSubmited } = sizeSlice.actions