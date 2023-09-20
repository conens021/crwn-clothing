import ProductsClient from '../api-client/products'
import FilterMapper from '../mappers/FilterMapper'
import PaginationMapper from '../mappers/PaginationMapper'
import ProductMapper from '../mappers/productMapper'
import SortingMapper from '../mappers/SortingMapper'

class ProductService {
    async GetById(id, cancelToken = null) {
        const { data } = await ProductsClient.GetById(id, cancelToken);

        return ProductMapper.apiProductFullToClient(data)
    }

    async GetAll(pagination, sorting = {}, filters = {}, cancelToken = null) {
        const params = this.GetParamsHelper(pagination, sorting, filters)

        const { data } = await ProductsClient.GetAll(params, cancelToken)

        const products = data.map(product => ProductMapper.apiProductToClient(product))

        return products
    }

    async GetByCategory(
        categoryName, pagination, sorting = {},
        filters = {}, cancelToken = null) {
        const params = this.GetParamsHelper(pagination, sorting, filters)

        const { data } = await ProductsClient.GetByCategory(categoryName, params, cancelToken)

        const products = data.map(product => ProductMapper.apiProductToClient(product))

        return products
    }

    GetParamsHelper(pagination, sorting, filters) {
        const apiPagination = PaginationMapper.clientPaginationToApi(pagination)
        const apiSorting = SortingMapper.clientSortingToApi(sorting)
        const productFilter = FilterMapper.clientProductFilterToApi(filters)

        const params = { ...apiPagination, ...apiSorting, ...productFilter }

        return params
    }
}


export default new ProductService()