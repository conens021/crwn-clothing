import ShoppingCartClient from "../api-client/shoppingCarts"
import ProductCartMapper from "../mappers/ProductCartMapper"
import ShoppingCartMapper from "../mappers/ShoppingCartMapper"

class CartService {
    isItemInCart(cartItems = [], itemToAdd = {}, size) {
        return cartItems.find(item =>
            item.id === itemToAdd.id && item.size.id === size.id)
    }

    addItemToCart(cartItems, itemToAdd, quantity = 1, size) {
        const itemInCart = this.isItemInCart(cartItems, itemToAdd, size)
        if (itemInCart) {
            return cartItems.map(item =>
                item.id === itemToAdd.id && item.size.id === size.id ?
                    { ...itemToAdd, quantity: item.quantity + 1, size }
                    :
                    item
            )
        }

        return [...cartItems, { ...itemToAdd, quantity, size }]
    }

    async addItemToCartAPI(itemToAdd, quantity = 1, size) {
        const clientProductCart = { product: itemToAdd, quantity, size }

        const apiCartProduct = ProductCartMapper.clientCartProductToApi(clientProductCart)

        const { data } = await ShoppingCartClient.AddProductToCart(apiCartProduct)

        return ProductCartMapper.apiCartProductsToClient(data)
    }

    removeFromCart(cartItems, itemToRemove, size) {
        return cartItems.filter(item =>
            item.id !== itemToRemove.id
                ?
                item
                :
                item.size.id !== size.id
                    ?
                    item :
                    null)
    }

    async removeFromCartAPI(itemToRemove, size) {
        const itemApiToRemove = ProductCartMapper.clientDeleteCartItemToApi(itemToRemove, size)

        const { data } = await ShoppingCartClient.RemoveFromCart(itemApiToRemove)

        return ProductCartMapper.apiCartProductsToClient(data)
    }

    getCartCount(cartItems) {
        const cartCount = cartItems.reduce((sum, currentItem) => sum + currentItem.quantity, 0)

        return cartCount
    }

    getCartSum(cartItems) {
        return cartItems.reduce((sum, currentItem) =>
            sum + (currentItem.price * currentItem.quantity), 0.00)
    }

    changeItemQuantity(cartItems, itemToUpdate, newQuantity, size) {
        if (newQuantity === 0) return this.removeFromCart(cartItems, itemToUpdate, size)

        return cartItems.map(item =>
            item.id === itemToUpdate.id &&
                item.size.id === size.id
                ?
                { ...item, quantity: newQuantity, size }
                : item)
    }

    async changeItemQuantityAPI(itemToUpdate, newQuantity, size) {
        const clientProductCart = { product: itemToUpdate, quantity: newQuantity, size }

        const apiCartProduct = ProductCartMapper.clientCartProductToApi(clientProductCart)

        const { data } = await ShoppingCartClient.ChangeQuantity(apiCartProduct)

        return ProductCartMapper.apiCartProductsToClient(data)
    }

    async mergeUserCartAPI(cartItems = []) {
        const cartItemsAPI = ShoppingCartMapper.clientCartProductsToAPI(cartItems)

        const { data } = await ShoppingCartClient.AddProductToCartBulk(cartItemsAPI)

        return ProductCartMapper.apiCartProductsToClient(data)
    }

    async EmptyUserCart() {
        await ShoppingCartClient.EmptyUserCart()

        return []
    }


    mergeGuestAndUserCartItems(userCart, guestCart) {
        if (this.cartIsEmpty(userCart) && this.cartIsEmpty(guestCart))
            return []

        if (this.cartIsEmpty(guestCart)) return userCart

        if (this.cartIsEmpty(userCart))
            return guestCart

        guestCart.forEach(item => {
            userCart = this.addItemToCart(userCart, item, item.quantity)
        })

        return userCart
    }

    cartIsEmpty(cartItems) {
        return !cartItems || cartItems.length === 0
    }
}


export default new CartService()