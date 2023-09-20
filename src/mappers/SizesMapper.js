class SizeMapper {
    apiSizeToClient(apiSize = {}) {
        const clientSize = {}
        clientSize.id = apiSize.id
        clientSize.title = apiSize.name
        clientSize.value = apiSize.value

        return clientSize
    }

    apiSizesToClient(apiSizes = {}) {
        return apiSizes.map(apiSize => this.apiSizeToClient(apiSize))
    }


}


export default new SizeMapper()