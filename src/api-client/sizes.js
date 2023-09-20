import { axiosService } from "../services/AxiosService"

class SizeClient {
    constructor() {
        this.baseUrl = "/sizes"
    }

    async getProductAvailable(productId, cancelToken = null) {
        const response = await axiosService.get(
            `${this.baseUrl}/available/${productId}`, {
            cancelToken
        })

        return response
    }
}

export default new SizeClient()