import CartService from "../../services/CartService"

export const setCartHelper = (state, action) => {
    const { payload } = action

    const count = CartService.getCartCount(payload)
    const sum = CartService.getCartSum(payload)

    state.loading = false
    state.cartItems = payload
    state.cartCount = count
    state.cartSum = sum
}