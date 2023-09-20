import { createAsyncThunk } from "@reduxjs/toolkit"
import errorsHandler from "../../errorsHandler"
import CategoryService from "../../services/CategoryService"

export const getAllCategoriesWithProductsThunk = createAsyncThunk(
    'categories/getAllWithProducts',
    async (cancelToken = null, { getState, rejectWithValue }) => {
        try {
            const { categories: categoriesState } = getState();

            const { pagination, sorting } = categoriesState

            const categoryList =
                await CategoryService.getAllWithProducts(
                    pagination, sorting, cancelToken)

            return categoryList
        } catch (err) {
            const { code, message } = errorsHandler.handleClientError(err)

            return rejectWithValue({ code, message })
        }
    }
)
