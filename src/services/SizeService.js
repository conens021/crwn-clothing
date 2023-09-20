import SizeClient from '../api-client/sizes'
import SizesMapper from '../mappers/SizesMapper'

class SizeService {
    async getProductAvailable(productId, cancelToken = null) {
        const { data } =
            await SizeClient.getProductAvailable(productId, cancelToken)

        return SizesMapper.apiSizesToClient(data)
    }
}


export default new SizeService()