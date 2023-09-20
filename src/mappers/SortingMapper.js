class SortingMapper {
    clientSortingToApi(clilentSorting = {}) {
        if (!clilentSorting)
            return {}

        const apiSorting = {}

        apiSorting.OB = clilentSorting.sortBy
        apiSorting.OD = clilentSorting.sortDirection


        return apiSorting
    }
}


export default new SortingMapper()