import OrderClient from '../api-client/orders'
import OrderMapper from '../mappers/OrderMapper'
import DateTimeUtils from '../utils/datetime/datetime.utils'

class OrderService {
    async CreateOrderIntent() {
        const { data } = await OrderClient.createOrderIntent()

        const validUntil = DateTimeUtils.appendHours(12)


        return OrderMapper.OrderIntentApiToClient(data, validUntil)
    }

    async UpdateOrderIntent(orderId) {
        const { data } = await OrderClient.updateOrderIntent(orderId)


        return OrderMapper.OrderIntentApiToClient(data)
    }

    async UpdateShippingDetails(orderId, clientShippingDetails) {
        const apiShippingDetails =
            OrderMapper.ShippingDetailsClientToApi(clientShippingDetails)

        const { data } = await
            OrderClient.updateShippingDetails(orderId, apiShippingDetails)


        return OrderMapper.OrderApiToClient(data)
    }

    async StartOrderRequest(orderId) {
        const { data } = await OrderClient.startOrderRequest(orderId)

        return OrderMapper.OrderApiToClient(data)
    }

    async OrderRequestFailed(orderId) {
        const { data } = await OrderClient.orderRequestFailed(orderId)

        return OrderMapper.OrderApiToClient(data)
    }
}

export default new OrderService()