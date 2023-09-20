class PaginationMapper {
    clientPaginationToApi(clientPagination = {}) {
        const apiPagination = {}

        apiPagination.page = clientPagination.page
        apiPagination.pageSize = clientPagination.perPage


        return apiPagination
    }
}


export default new PaginationMapper()