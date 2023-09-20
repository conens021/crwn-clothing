import { createSlice } from "@reduxjs/toolkit"
import { VERIFICATION_EMAIL_STATUS } from "../../constants/user"
import { sendVerificationCodeThunk, verifyEmailThunk } from "./emailVerifyThunk"

const initialState = {
    jwt: null,
    sendCode: {
        status: null,
        error: null,
    },
    verification: {
        status: null,
        error: null
    },
}

export const emailVerifySlice = createSlice({
    name: 'emailVerify',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(sendVerificationCodeThunk.pending, (state) => {
            state.sendCode.error = null
            state.sendCode.status = VERIFICATION_EMAIL_STATUS.loading
        })
        builder.addCase(sendVerificationCodeThunk.fulfilled, (state) => {
            state.sendCode.status = VERIFICATION_EMAIL_STATUS.success
        })
        builder.addCase(sendVerificationCodeThunk.rejected, (state, action) => {
            const { payload } = action
            const { message } = payload

            state.sendCode.status = VERIFICATION_EMAIL_STATUS.rejected

            state.sendCode.error = message
        })

        builder.addCase(verifyEmailThunk.pending, (state) => {
            state.verification.status = VERIFICATION_EMAIL_STATUS.loading
        })
        builder.addCase(verifyEmailThunk.fulfilled, (state, action) => {
            const { payload } = action

            state.jwt = payload
            state.verification.status = VERIFICATION_EMAIL_STATUS.success
        })
        builder.addCase(verifyEmailThunk.rejected, (state, action) => {
            const { payload } = action
            const { message } = payload

            state.verification.status = VERIFICATION_EMAIL_STATUS.rejected
            state.verification.error = message
        })
    }
})


export default emailVerifySlice.reducer

