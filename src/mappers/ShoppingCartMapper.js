class ShoppingCartMapper {
    clientCartProductToAPI(clientCartProduct = {}) {
        const apiCartProduct = {}

        const { id, quantity, size } = clientCartProduct

        apiCartProduct.ProductId = id
        apiCartProduct.Quantity = quantity
        apiCartProduct.SizeId = size.id

        return apiCartProduct
    }

    clientCartProductsToAPI(clientCartProducts = []) {
        return clientCartProducts.map(cp => this.clientCartProductToAPI(cp))
    }
}

export default new ShoppingCartMapper()