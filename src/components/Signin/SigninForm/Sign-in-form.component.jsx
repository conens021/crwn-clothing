import { useState } from "react";
import { useDispatch } from 'react-redux'
import { signInUserThunk } from "../../../store/user/userThunk";
import { FormContainer, FormActionsContainer } from "../../UI/Form/Form.styles";
import Button from "../../UI/Button/Button.component";
import FormError from "../../UI/FormError/FormError.component";
import TextInput from "../../UI/TextInput/TextInput.component";
import { AUTH_FORM_TYPE, USER_ERROR_TYPES } from "../../../constants/user";

function SignInForm({ errorMsg, errorType, redirectPath, isLoading, loadingType }) {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailChangeHandler = event => {
        setEmail(event.target.value)
    }

    const passwordChangeHandler = event => {
        setPassword(event.target.value)
    }

    const formSubmitedHandler = (event) => {
        event.preventDefault()

        const authUser = {
            email,
            password
        }

        serviceRequestHandler(authUser)
    }

    const serviceRequestHandler = async (authUser) => {
        const payload = {
            authUser,
            redirectPath,
        }

        dispatch(signInUserThunk(payload))
    }

    const isFormLoading = isLoading && AUTH_FORM_TYPE.signInEmail

    return (
        <FormContainer onSubmit={formSubmitedHandler}>
            <TextInput
                value={email}
                id='login-email'
                type='text'
                name='email'
                label='Email'
                required
                onInputChange={emailChangeHandler} />
            <TextInput
                value={password}
                type='password'
                name='password'
                label='Password'
                required
                onInputChange={passwordChangeHandler} />
            <FormActionsContainer>
                {(errorMsg && errorType === USER_ERROR_TYPES.signIn)
                    && <FormError errorMsg={errorMsg} />}
                <Button
                    type='submit'
                    disabled={isFormLoading}
                    variant='filled'
                    color='primary'
                    size='large'>
                    Login
                </Button>
            </FormActionsContainer>
        </FormContainer>
    );
}

export default SignInForm;