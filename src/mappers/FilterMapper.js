class FilterMapper {
    clientProductFilterToApi(clientProductFilter = {}) {
        if (!clientProductFilter)
            return {}
        const apiProductFilter = {}

        apiProductFilter.priceFrom = clientProductFilter.priceFrom
        apiProductFilter.priceTo = clientProductFilter.priceTo
        apiProductFilter.ColorIds = clientProductFilter.colors ?
            clientProductFilter.colors.map(color => color.id)
            :
            []

        return apiProductFilter
    }
}


export default new FilterMapper()