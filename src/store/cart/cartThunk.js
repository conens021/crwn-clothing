import { createAsyncThunk } from "@reduxjs/toolkit";
import errorsHandler from "../../errorsHandler";
import CartService from "../../services/CartService";

export const addToCartThunk = createAsyncThunk(
    'cart/addToCart',
    async ({ product, quantity, size }, { rejectWithValue }) => {
        try {
            const cartItems = await CartService.addItemToCartAPI(product, quantity, size)

            return cartItems
        } catch (err) {
            const { code, message } = errorsHandler.handleClientError(err)

            return rejectWithValue({ code, message })
        }

    }
)

export const removeFromCartThunk = createAsyncThunk(
    'cart/removeFromCart',
    async ({ product, size }, { rejectWithValue }) => {
        try {
            const cartItems = await CartService.removeFromCartAPI(product, size)

            return cartItems
        } catch (err) {
            const { code, message } = errorsHandler.handleClientError(err)

            return rejectWithValue({ code, message })
        }

    }
)

export const changeQuantityThunk = createAsyncThunk(
    'cart/changeQuantity',
    async ({ product, quantity, size }, { rejectWithValue }) => {
        try {
            const cartItems = await CartService.changeItemQuantityAPI(product, quantity, size)

            return cartItems
        } catch (err) {
            const { code, message } = errorsHandler.handleClientError(err)

            return rejectWithValue({ code, message })
        }

    }
)

export const mergeUserCartThunk = createAsyncThunk(
    'cart/mergeUserCart',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { cart } = getState()
            const { cartItems } = cart
            const newCartItems = await CartService.mergeUserCartAPI(cartItems)

            return newCartItems
        } catch (err) {
            const { code, message } = errorsHandler.handleClientError(err)

            return rejectWithValue({ code, message })
        }
    }
)

export const emptyUserCartThunk = createAsyncThunk(
    'cart/empty-user-cart',
    async (arg, { rejectWithValue }) => {
        try {
            const newCartItems = await CartService.EmptyUserCart()

            return newCartItems
        } catch (err) {
            const { code, message } = errorsHandler.handleClientError(err)

            return rejectWithValue({ code, message })
        }
    }
)


