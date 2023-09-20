import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { setCartHelper } from "./cartSliceHelper";
import { addToCartThunk, changeQuantityThunk, emptyUserCartThunk, mergeUserCartThunk, removeFromCartThunk } from "./cartThunk";

const initialState = {
    cartDropdownIsVisible: false,
    cartItems: [],
    cartCount: 0,
    cartSum: 0.00,
    userCartMerged: false,
    loading: false,
    error: null
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartDropdownVissibleValue: (state, action) => {
            const { payload } = action

            state.cartDropdownIsVisible = payload
        },
        setUserCartMerged: (state, action) => {
            const { payload } = action

            state.userCartMerged = payload
        },
        setCartItems: (state, action) => {
            const { payload } = action

            const { cartItems, cartCount, cartSum } = payload

            state.cartItems = cartItems
            state.cartCount = cartCount
            state.cartSum = cartSum
        },
        emptyCart: (state) => {
            state.cartItems = []
            state.cartCount = 0
            state.cartSum = 0.00
        }
    },
    extraReducers: (builder) => {
        builder.addCase(mergeUserCartThunk.pending, (state) => {
            state.loading = true
            state.error = null
            state.userCartMerged = true
        })
        builder.addCase(mergeUserCartThunk.rejected, (state, action) => {
            const { payload } = action

            state.loading = false
            state.error = payload
            state.userCartMerged = false
        })
        builder.addCase(emptyUserCartThunk.fulfilled, state => {
            state.cartItems = []
            state.cartCount = 0
            state.cartSum = 0.00
        })
        builder.addMatcher(
            isAnyOf(addToCartThunk.pending,
                removeFromCartThunk.pending,
                changeQuantityThunk.pending),
            (state) => {
                state.loading = true
                state.error = null
            })
        builder.addMatcher(
            isAnyOf(addToCartThunk.fulfilled,
                removeFromCartThunk.fulfilled,
                changeQuantityThunk.fulfilled,
                mergeUserCartThunk.fulfilled),
            (state, action) => {
                setCartHelper(state, action)
            })
        builder.addMatcher(
            isAnyOf(addToCartThunk.rejected,
                removeFromCartThunk.rejected,
                changeQuantityThunk.rejected),
            (state, action) => {
                const { payload } = action

                state.loading = false
                state.error = payload
            })
    }
})

export const { setCartDropdownVissibleValue, setCartItems, setUserCartMerged, emptyCart } = cartSlice.actions

export default cartSlice.reducer

