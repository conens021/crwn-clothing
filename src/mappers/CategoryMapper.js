import productMapper from "./productMapper"

class CategoryMaper {
    apiCategoryToClient(apiCategory = {}) {
        const clientCategory = {}
        clientCategory.id = apiCategory.id
        clientCategory.title = apiCategory.name
        clientCategory.coverImageSrc = apiCategory.coverImageUrl
        clientCategory.createdAt = apiCategory.createdAt
        clientCategory.updatedAt = apiCategory.updatedAt

        return clientCategory
    }

    apiCategoryWithProducts(apiCategory = {}) {
        const clientCategoryWithoutProducts = this.apiCategoryToClient(apiCategory)
        
        const apiProducts = apiCategory.products

        const clientProducts = apiProducts.map(product => productMapper.apiProductToClient(product))


        return { ...clientCategoryWithoutProducts, products: clientProducts }
    }
}


export default new CategoryMaper()