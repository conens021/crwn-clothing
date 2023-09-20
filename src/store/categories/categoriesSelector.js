export const selectCategoriesItems = (state) => state.categories.items
export const selectCategoriesIsLoading = (state) => state.categories.isLoading
export const selectCategoriesLoaded = (state) => state.categories.success
export const selectCategoriesError = (state) => state.categories.error
export const selectActiveCategory = (state) => state.categories.activeCategory.category