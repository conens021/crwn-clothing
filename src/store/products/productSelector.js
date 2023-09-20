export const selectProducts = (state) => state.products.items
export const selectProductsLoading = (state) => state.products.isLoading
export const selectProductsLoaded = (state) => state.products.success
export const selectProductsError = (state) => state.products.error
export const selectProductsSorting = (state) => state.products.sorting
export const selectProductFilters = (state) => state.products.filters
export const selectProductPagination = (state) => state.products.pagination
export const selectProductsRehidrate = (state) => state.products.rehidrate
export const selectProductsNoMoreItems = (state) => state.products.noMoreItems

export const selectActiveProductItem = (state) => state.products.activeProduct.item
export const selectActiveProductIsLoading = (state) => state.products.activeProduct.isLoading
export const selectActiveProductSuccess = (state) => state.products.activeProduct.success
export const selectActiveProductError = (state) => state.products.activeProduct.error

