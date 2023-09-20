import CategoryClient from "../api-client/category"
import CategoryMapper from "../mappers/CategoryMapper"
import PaginationMapper from "../mappers/PaginationMapper"
import SortingMapper from "../mappers/SortingMapper"

class CategoryService {
    async getAll(cancelToken = null) {
        const { data } = await CategoryClient.GetAll(cancelToken)

        return data.map(category => CategoryMapper.apiCategoryToClient(category))
    }

    async getAllWithProducts(pagination, sorting = {}, cancelToken = null) {
        const apiPagination = PaginationMapper.clientPaginationToApi(pagination)
        const apiSorting = SortingMapper.clientSortingToApi(sorting)

        const params = { ...apiPagination, ...apiSorting }

        const { data } = await CategoryClient.GetAllWithProducts(params, cancelToken)


        return data.map(category => CategoryMapper.apiCategoryWithProducts(category))
    }

}

export default new CategoryService()