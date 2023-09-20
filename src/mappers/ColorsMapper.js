class ColorsMapper {
    apiColorToClient(apiColor = {}) {
        const clientColor = {}
        clientColor.id = apiColor.id
        clientColor.title = apiColor.name
        clientColor.value = apiColor.value

        return clientColor
    }

    apiColorsToClient(apiColors = {}) {
        return apiColors.map(apiColor => this.apiColorToClient(apiColor))
    }


}


export default new ColorsMapper()