import { createAsyncThunk } from "@reduxjs/toolkit";
import errorsHandler from "../../errorsHandler";
import ProductService from "../../services/ProductService";

export const getProductsByCategoryThunk = createAsyncThunk(
    'products/getProductsByCategory',
    async ({ categoryName, cancelToken = null }, { rejectWithValue, getState }) => {
        try {
            const { products: productsState } = getState();
            const { pagination, sorting, filters } = productsState

            const products =
                await ProductService.GetByCategory(
                    categoryName, pagination, sorting, filters, cancelToken)

            return products
        } catch (err) {
            const { code, message } = errorsHandler.handleClientError(err)

            return rejectWithValue({ code, message })
        }
    }
)
export const getProductByIdThunk = createAsyncThunk(
    'products/getProductById',
    async ({ productId, cancelToken }, { rejectWithValue }) => {
        try {

            const product = await ProductService.GetById(productId, cancelToken);

            return product
        } catch (err) {
            const { code, message } = errorsHandler.handleClientError(err)

            return rejectWithValue({ code, message })
        }
    }
)
