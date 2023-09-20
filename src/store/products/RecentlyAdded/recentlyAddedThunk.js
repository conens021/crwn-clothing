import { createAsyncThunk } from "@reduxjs/toolkit";
import { productsSorting } from "../../../constants/sorting";
import errorsHandler from "../../../errorsHandler";
import ProductService from '../../../services/ProductService'

export const getRecentlyAddedProudctsThunk = createAsyncThunk(
    'recentlyAdded/getRecentlyAdded',
    async (cancelationToken = null, { rejectWithValue }) => {
        try {
            const sorting = productsSorting['newest']

            const pagination = {
                page: 1,
                perPage: 20,
            }

            const products = await ProductService.GetAll(pagination, sorting, null, cancelationToken)

            return products
        } catch (err) {
            const { code, message } = errorsHandler.handleClientError(err)

            return rejectWithValue({ code, message })
        }
    }
)