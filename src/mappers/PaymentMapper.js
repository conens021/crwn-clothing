class PaymentMapper {
    CcIntentApiToClient(apiIntent = {}) {
        if (!apiIntent) return {}

        const clientIntent = {}
        clientIntent.clientSecret = apiIntent.clientSecret
        clientIntent.id = apiIntent.id

        return clientIntent
    }
}


export default new PaymentMapper()