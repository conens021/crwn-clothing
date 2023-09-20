import { axiosService } from "../services/AxiosService"

class PaymentClient {
    constructor() {
        this.baseUrl = "/payments"
        this.ccUrl = 'cc'
    }

    async makeCcIntent() {
        const response = await axiosService.post(
            `${this.baseUrl}/${this.ccUrl}/create-payment-intent`)

        return response
    }

    async updateCcIntent(id) {
        console.log('client')
        const response = await axiosService.put(
            `${this.baseUrl}/${this.ccUrl}/update-payment-intent/${id}`)

        return response
    }

}

export default new PaymentClient()