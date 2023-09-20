import { axiosService } from "../services/AxiosService"

class ProductsClient {
    constructor() {
        this.productUrl = "/products"
    }

    async GetAll(params, cancelToken) {
        const response = await axiosService.get(this.productUrl, {
            cancelToken,
            params
        })

        return response
    }

    async GetByCategory(categoryName, params, cancelToken = null) {
        const response = await axiosService.get(`${this.productUrl}/category/${categoryName}`, {
            cancelToken,
            params
        })

        return response
    }

    async GetById(id, cancelToken = null) {
        const response = await axiosService.get(`${this.productUrl}/client/${id}`, {
            cancelToken
        })

        return response
    }

    async CreateProduct(product) {
        const response = await axiosService.post(this.productUrl, product)

        return response
    }
}

export default new ProductsClient()