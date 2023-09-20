import CategoryMapper from './CategoryMapper'
import SizeMapper from './SizesMapper'

class ProductsMaper {

    clientProductToApi(clientProduct = {}) {
        const apiProduct = {}

        apiProduct.id = clientProduct.id
        apiProduct.name = clientProduct.title
        apiProduct.imageUrl = clientProduct.imageSrc
        apiProduct.price = clientProduct.price
        apiProduct.createdAt = clientProduct.createdAt
        apiProduct.updatedAt = clientProduct.updatedAt
        apiProduct.contentId = clientProduct.contentFolder

        return apiProduct
    }

    apiProductToClient(apiProduct = {}) {
        const clientProduct = {}

        clientProduct.id = apiProduct.id
        clientProduct.title = apiProduct.name
        clientProduct.imageSrc = apiProduct.imageUrl
        clientProduct.price = apiProduct.price
        clientProduct.createdAt = apiProduct.createdAt
        clientProduct.updatedAt = apiProduct.updatedAt
        clientProduct.contentFolder = apiProduct.contentId


        return clientProduct
    }

    apiProductFullToClient(apiProduct = {}) {
        const clientProduct = {}
        const { product, sizes, category } = apiProduct

        clientProduct.id = product.id
        clientProduct.title = product.name
        clientProduct.imageSrc = product.imageUrl
        clientProduct.price = product.price
        clientProduct.createdAt = product.createdAt
        clientProduct.updatedAt = product.updatedAt
        clientProduct.contentFolder = product.contentId

        clientProduct.sizes = SizeMapper.apiSizesToClient(sizes)
        clientProduct.category = CategoryMapper.apiCategoryToClient(category)

        return clientProduct
    }
}


export default new ProductsMaper()