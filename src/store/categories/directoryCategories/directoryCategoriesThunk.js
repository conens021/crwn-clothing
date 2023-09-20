import { createAsyncThunk } from "@reduxjs/toolkit"
import errorsHandler from "../../../errorsHandler"
import CategoryService from "../../../services/CategoryService"

export const getDirectoryCategoriesThunk = createAsyncThunk(
    'directoryCategories/getDirectory',
    async (cancelToken, { rejectWithValue }) => {
        try {
            const categoryList = await CategoryService.getAll(cancelToken)

            return categoryList
        } catch (err) {
            const { code, message } = errorsHandler.handleClientError(err)

            return rejectWithValue({ code, message })
        }
    }
)