import PaymentMapper from "./PaymentMapper"
import CartProductsMaper from './ProductCartMapper'

class OrderMapper {
    OrderIntentApiToClient(apiIntent = {}, validUntil) {
        if (!apiIntent) return {}

        const { paymentIntent, products } = apiIntent

        const clilentPaymentIntent =
            PaymentMapper.CcIntentApiToClient(paymentIntent)

        const clientCartProducts = CartProductsMaper.apiCartProductsToClient(products)

        const clientOrderIntent = this.OrderApiToClient(apiIntent)

        clientOrderIntent.validUntil = validUntil

        clientOrderIntent.paymentIntent = clilentPaymentIntent
        clientOrderIntent.products = clientCartProducts

        return clientOrderIntent
    }

    ShippingDetailsClientToApi(clientShippingDetails) {
        const apiShippingDetails = {}

        const { address, city, zip, country } = clientShippingDetails

        apiShippingDetails.shippingAddress = address
        apiShippingDetails.shippingCity = city
        apiShippingDetails.shippingCountry = country
        apiShippingDetails.shippingZipCode = zip

        return apiShippingDetails
    }

    OrderApiToClient(orderApi) {
        const clientOrder = {}

        clientOrder.id = orderApi.id
        clientOrder.subtotal = orderApi.subtotal
        clientOrder.total = orderApi.total
        clientOrder.orderStatus = orderApi.orderStatus
        clientOrder.paymentStatus = orderApi.paymentStatus
        clientOrder.chargedTotal = orderApi.chargedTotal
        clientOrder.shippingAddress = orderApi.shippingAddress
        clientOrder.shippingCity = orderApi.shippingCity
        clientOrder.shippingCountry = orderApi.shippingCountry
        clientOrder.shippingZipCode = orderApi.shippingZipCode
        clientOrder.customerId = orderApi.customerId
        clientOrder.createdAt = orderApi.createdAt
        clientOrder.updatedAt = orderApi.updatedAt

        return clientOrder
    }
}


export default new OrderMapper()