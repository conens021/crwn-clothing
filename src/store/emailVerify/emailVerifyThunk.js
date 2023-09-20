import { createAsyncThunk } from "@reduxjs/toolkit"
import errorsHandler from "../../errorsHandler"
import UserService from "../../services/UserService"

export const verifyEmailThunk = createAsyncThunk(
    'emailVerify/verify',
    async ({ jwt, code }, { rejectWithValue }) => {
        try {
            const newJwt = await UserService.verifyEmail(jwt, code)

            return newJwt
        } catch (err) {
            const errorMsg = errorsHandler.handleClientError(err)

            return rejectWithValue(errorMsg)
        }
    }
)

export const sendVerificationCodeThunk = createAsyncThunk(
    'emailVerify/sendCode',
    async (jwt, { rejectWithValue }) => {
        try {
            const data = await UserService.getVerificationCode(jwt)

            return data
        } catch (err) {
            const errorMsg = errorsHandler.handleClientError(err)

            return rejectWithValue(errorMsg)
        }
    }
)
