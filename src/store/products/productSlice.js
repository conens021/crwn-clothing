import { createSlice } from "@reduxjs/toolkit";
import { productsSorting } from "../../constants/sorting";
import config from '../../config.json'
import { getProductByIdThunk, getProductsByCategoryThunk } from "./productsThunk";

const productsPerPage = config.PAGE_SIZE.PRODUCTS
const defaultSort = productsSorting['newest']

const initialState = {
    activeProduct: {
        item: {},
        isLoading: false,
        success: false,
        error: null,
    },
    items: [],
    pagination: {
        page: 1,
        perPage: productsPerPage,
        pageIsLoading: false
    },
    sorting: {
        ...defaultSort
    },
    filters: null,
    rehidrate: false,
    noMoreItems: false,
    isLoading: false,
    success: false,
    error: null,
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        resetProductsState: (state) => {
            state.items = []
            state.pagination = { page: 1, perPage: productsPerPage, pageIsLoading: false }
            state.sorting = { ...defaultSort }
            state.filters = null
            state.rehidrate = false
            state.noMoreItems = false
            state.isLoading = false
            state.success = false
            state.error = null
        },
        setCategoryProductsPage: (state, action) => {
            const { payload } = action

            state.rehidrate = true
            state.pagination.page = payload
        },
        setCategoryProductsSorting: (state, action) => {
            const { payload } = action
            state.sorting = { ...payload }
            state.rehidrate = true
            state.pagination.page = 1
            state.noMoreItems = false
        },
        setCategoryProductsFilters: (state, action) => {
            const { payload } = action

            state.filters = { ...payload }
            state.rehidrate = true
            state.noMoreItems = false
            state.pagination.page = 1
        },
        clearCategoryProductsFilters: (state) => {
            state.filters = null
            state.rehidrate = true
            state.noMoreItems = false
            state.pagination.page = 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProductsByCategoryThunk.pending, (state) => {
            if (state.pagination.page === 1) {
                state.isLoading = true
                state.error = null
                state.success = null
            }
            else
                state.pagination.pageIsLoading = true
        })
        builder.addCase(getProductsByCategoryThunk.fulfilled, (state, action) => {
            const { payload } = action
            //if we get empty items set noMoreItems to true
            //we need this for pagination, to not load more items
            if (Array.isArray(payload) && !payload.length)
                state.noMoreItems = true
            if (payload.length < productsPerPage)
                state.noMoreItems = true
            if (state.pagination.page === 1) {
                state.isLoading = false
                state.success = true
                state.items = payload
            } else {
                state.items = [...state.items, ...payload]
                state.pagination.pageIsLoading = false
            }
        })
        builder.addCase(getProductsByCategoryThunk.rejected, (state, action) => {
            const { payload } = action
            const { message } = payload

            state.isLoading = false
            state.error = message
            state.pagination.pageIsLoading = false
        })

        builder.addCase(getProductByIdThunk.pending, (state) => {
            state.activeProduct.isLoading = true
            state.activeProduct.error = false
            state.activeProduct.success = false
        })

        builder.addCase(getProductByIdThunk.fulfilled, (state, action) => {
            const { payload } = action

            state.activeProduct.isLoading = false
            state.activeProduct.success = true
            state.activeProduct.item = payload
        })

        builder.addCase(getProductByIdThunk.rejected, (state, action) => {
            const { payload } = action
            const { message } = payload

            state.activeProduct.isLoading = false
            state.activeProduct.error = message
        })
    }
})

export const {
    resetProductsState,
    setCategoryProductsSorting,
    setCategoryProductsFilters,
    setCategoryProductsPage,
    clearCategoryProductsFilters } = productSlice.actions

export default productSlice.reducer