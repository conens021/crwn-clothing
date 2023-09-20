import { axiosService } from "../services/AxiosService"

class OrderClient {
    constructor() {
        this.baseUrl = "/orders"
    }

    async createOrderIntent() {
        const response = await axiosService.post(
            `${this.baseUrl}/create-order-intent`)

        return response
    }

    async updateOrderIntent(orderId) {
        const response = await axiosService.put(
            `${this.baseUrl}/update-order-intent/${orderId}`)

        return response
    }

    async updateShippingDetails(orderId, shippingDetails) {
        const response =
            await axiosService.patch(
                `${this.baseUrl}/shipping-details/${orderId}`,
                shippingDetails)

        return response
    }

    async startOrderRequest(orderId) {
        const response = await axiosService.patch(`${this.baseUrl}/start-order-request/${orderId}`)

        return response;
    }

    async orderRequestFailed(orderId) {
        const response = await axiosService.patch(`${this.baseUrl}/order-request-failed/${orderId}`)

        return response;
    }

}

export default new OrderClient()