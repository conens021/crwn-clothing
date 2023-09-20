import ColorClient from '../api-client/colors'
import ColorsMapper from '../mappers/ColorsMapper'

class ColorService {
    async getAll(cancelToken = null) {
        const { data } = await ColorClient.getAll(cancelToken)

        return ColorsMapper.apiColorsToClient(data)
    }
}


export default new ColorService()