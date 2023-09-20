import { axiosService } from "../services/AxiosService"

class CategoryClient {
    constructor() {
        this.categoryUrl = "/categories"
    }

    async GetAll(cancelToken = null) {
        const response = await axiosService.get(this.categoryUrl, {
            cancelToken
        })

        return response
    }

    async GetAllWithProducts(params, cancelToken = null) {
        const response = await axiosService.get(`${this.categoryUrl}/products`, {
            cancelToken,
            params
        })

        return response
    }

}

export default new CategoryClient()