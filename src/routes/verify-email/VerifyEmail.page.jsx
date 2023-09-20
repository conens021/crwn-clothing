import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppLoading from "../../components/AppLoading/AppLoading.component";
import Button from "../../components/UI/Button/Button.component";
import FormError from "../../components/UI/FormError/FormError.component";
import TextInput from "../../components/UI/TextInput/TextInput.component";
import Typography from "../../components/UI/Typography/Typography.component";
import { AUTH_FORM_TYPE, VERIFICATION_EMAIL_STATUS } from "../../constants/user";
import { useRedirectPath } from "../../hooks/useRedirectPath";
import {
    selectEmailVerification,
    selectEmailVerifyCodeStatus,
    selectEmailVerifyJwt,
} from "../../store/emailVerify/emailVerifySelector";
import { sendVerificationCodeThunk, verifyEmailThunk } from "../../store/emailVerify/emailVerifyThunk";
import { selectUserJwt, selectUserLoading } from "../../store/user/userSelector";
import { signInWithJwtThunk } from "../../store/user/userThunk";
import { VeifyFormRow, VerifyForm } from "./VerifyEmail.styles";

function VerifyEmailPage() {
    const [code, setCode] = useState('')
    const jwt = useSelector(selectUserJwt)

    const codeSendingState = useSelector(selectEmailVerifyCodeStatus)
    const { status: codeSendingStatus, error: codeSendingError } = codeSendingState

    const verificationState = useSelector(selectEmailVerification)
    const { status: verificationStatus, error: verificationError } = verificationState

    const userLoading = useSelector(selectUserLoading)
    const { type: userLoadingType, isLoading: userIsLoading } = userLoading

    const verificationJwt = useSelector(selectEmailVerifyJwt)

    const dispatch = useDispatch()

    const { redirectPath } = useRedirectPath()

    useEffect(() => {
        if (verificationJwt) {
            loginUserHandler()
        }
    }, [verificationJwt])

    const loginUserHandler = async () => {
        const loginUserObj = { jwt: verificationJwt, redirectPath }

        dispatch(signInWithJwtThunk(loginUserObj))
    }

    const codeSubmitedHandler = async (event) => {
        event.preventDefault()

        dispatch(verifyEmailThunk({ jwt, code }))
    }

    const codeRequestedHandler = async (event) => {
        event.preventDefault()

        dispatch(sendVerificationCodeThunk(jwt))
    }

    return (
        <>
            {userIsLoading && userLoadingType === AUTH_FORM_TYPE.signInJwt && <AppLoading />}
            <Typography component="h1" align="center">Just one more step, and yoou good to go!</Typography>
            <VerifyForm onSubmit={codeSubmitedHandler}>
                <p style={{ textAlign: 'center' }}>Please verify that email is realy belong to you</p>
                <VeifyFormRow>
                    <TextInput
                        required
                        value={code}
                        label="6-digits code"
                        onInputChange={(event) => setCode(event.target.value)} />
                    <Button
                        type="button"
                        disabled={codeSendingStatus === VERIFICATION_EMAIL_STATUS.loading}
                        onClick={codeRequestedHandler}>
                        Get code
                    </Button>
                </VeifyFormRow>
                {codeSendingStatus === VERIFICATION_EMAIL_STATUS.success
                    &&
                    <p>Verification code has been sent to your email. Check your inbox and spam folder</p>
                }
                {codeSendingStatus === VERIFICATION_EMAIL_STATUS.rejected
                    && <FormError errorMsg={codeSendingError} />}
                <Button
                    disabled={verificationStatus === VERIFICATION_EMAIL_STATUS.loading}
                    onClick={codeSubmitedHandler}
                    variant="filled"
                    size="large"
                    type="submit">Submit Code</Button>
                {verificationStatus === VERIFICATION_EMAIL_STATUS.rejected
                    && <FormError errorMsg={verificationError} />}
            </VerifyForm>
        </>
    );
}

export default VerifyEmailPage;