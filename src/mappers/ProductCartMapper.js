import productMapper from "./productMapper"
import SizesMapper from "./SizesMapper"

class CartProductsMaper {
    clientCartProductToApi(clientShoppingCart = {}) {
        const apiShoppingCart = {}

        const { product, size } = clientShoppingCart

        const { id } = product
        const { id: sizeId } = size

        apiShoppingCart.ProductId = id
        apiShoppingCart.Quantity = clientShoppingCart.quantity
        apiShoppingCart.SizeId = sizeId

        return apiShoppingCart
    }

    apiCartProductToClient(apiCartProduct = {}) {
        const { product, quantity, size } = apiCartProduct

        const clientProduct = productMapper.apiProductToClient(product)
        const clientSize = SizesMapper.apiSizeToClient(size)

        const cartClient = { ...clientProduct, quantity, size: clientSize }

        return cartClient
    }

    apiCartProductsToClient(apiCartProducts = []) {
        return apiCartProducts.map(cartProduct =>
            this.apiCartProductToClient(cartProduct))
    }

    clientDeleteCartItemToApi(item, size) {
        const apiRemove = {}

        apiRemove.ProductId = item.id
        apiRemove.SizeId = size.id


        return apiRemove
    }

}


export default new CartProductsMaper()