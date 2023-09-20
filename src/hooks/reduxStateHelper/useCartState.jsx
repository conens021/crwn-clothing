import { useDispatch, useSelector } from "react-redux"
import CartService from "../../services/CartService"
import { selectCartItems } from "../../store/cart/cartSelector"
import { setCartDropdownVissibleValue, setCartItems } from "../../store/cart/cartSlice"
import { addToCartThunk, changeQuantityThunk, removeFromCartThunk } from "../../store/cart/cartThunk"
import { selectCurrentUser } from "../../store/user/userSelector"

let dropdownTimer = null

export const useCartState = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const currentUser = useSelector(selectCurrentUser)

    const addToCart = async (item, size) => {
        if (currentUser) {
            const payload = { product: item, quantity: 1, size }

            dispatch(addToCartThunk(payload))
        }
        else {
            const newCartItems = CartService.addItemToCart(cartItems, item, 1, size)
            updateCartItemsReducer(newCartItems)
        }
    }

    const removeFromCart = async (item, size) => {
        if (currentUser) {
            const payload = {
                product: item,
                size
            }
            dispatch(removeFromCartThunk(payload))
        }
        else {
            const newCartItems = CartService.removeFromCart(cartItems, item, size)

            updateCartItemsReducer(newCartItems,)
        }
    }

    const changeItemQuantity = async (item, quantity, size) => {
        if (currentUser) {
            const payload = { product: item, quantity, size }

            dispatch(changeQuantityThunk(payload))
        }
        else {
            const newCartItems = CartService.changeItemQuantity(cartItems, item, quantity, size)

            updateCartItemsReducer(newCartItems)
        }

    }

    const setCartDropdownVissible = (value) => {
        dispatch(setCartDropdownVissibleValue(value))
    }

    const setCurrentUserItemsHandler = () => {
        const newCartItems = CartService.getStorageCartItems(currentUser)

        updateCartItemsReducer(newCartItems)
    }

    const updateCartItemsReducer = (newCartItems, cartSum) => {
        const newCartCount = CartService.getCartCount(newCartItems)
        const newCartSum = cartSum ? cartSum : CartService.getCartSum(newCartItems)

        const payload = {
            cartItems: newCartItems,
            cartCount: newCartCount,
            cartSum: newCartSum
        }

        dispatch(setCartItems(payload))
    }

    const showCartHandler = () => {
        if (dropdownTimer) clearTimeout(dropdownTimer)

        setCartDropdownVissible(true)

        dropdownTimer = setTimeout(() => {
            setCartDropdownVissible(false)
        }, 2000)
    }

    return {
        addToCart, removeFromCart,
        changeItemQuantity, setCartDropdownVissible,
        setCurrentUserItemsHandler, showCartHandler
    }
}


