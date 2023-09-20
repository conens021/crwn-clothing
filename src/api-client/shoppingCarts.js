import { axiosService } from "../services/AxiosService";

class ShoppingCartClient {

    constructor() {
        this.baseUrl = '/shoppingCarts'
    }

    async GetShoppingCartWithProducts() {
        const response = await axiosService.get(`${this.baseUrl}`)

        return response
    }

    async AddProductToCart(cartProduct = {}) {
        const response = await axiosService.post(`${this.baseUrl}`, cartProduct)

        return response
    }

    async AddProductToCartBulk(cartProducts = []) {
        const response = await axiosService.post(`${this.baseUrl}/bulk`, cartProducts)

        return response
    }

    async ChangeQuantity(cartProduct = {}) {
        const response = await axiosService.patch(`${this.baseUrl}/quantity`, cartProduct)

        return response
    }

    async EmptyUserCart() {
        const response = await axiosService.delete(`${this.baseUrl}/empty-cart`)

        return response
    }

    async RemoveFromCart(itemToRemove) {
        const response = await axiosService.delete(`${this.baseUrl}`, {
            params: itemToRemove
        })

        return response
    }

}


export default new ShoppingCartClient(); 