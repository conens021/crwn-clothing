import { axiosService } from "../services/AxiosService"

class ColorClient {
    constructor() {
        this.baseUrl = "/colors"
    }

    async getAll(cancelToken = null) {
        const response = await axiosService.get(`${this.baseUrl}`, {
            cancelToken
        })

        return response
    }
}

export default new ColorClient()