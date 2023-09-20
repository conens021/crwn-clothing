import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../UI/Button/Button.component";
import TextInput from "../../UI/TextInput/TextInput.component";
import CreatePassword from "./CreatePassword/CreatePassword.component";
import FormError from "../../UI/FormError/FormError.component";
import { FormActionsContainer, FormContainer } from "../../UI/Form/Form.styles";
import { signUpFormValidations } from "../../../utils/validations";
import { signUpUserThunk } from "../../../store/user/userThunk";
import { USER_ERROR_TYPES } from "../../../constants/user";

const defaultInputValues = {
    displayName: '',
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
}

function SignUpForm({ userErrorMsg, userErrorType, redirectPath }) {
    const [formFields, setFormFields] = useState(defaultInputValues)
    const { displayName, email, firstName, lastName, phoneNumber } = formFields

    const [inputFieldsValidation, setInputFieldValidation] = useState(signUpFormValidations)
    const {
        displayName: displayNameValidation,
        email: emailValidation, firstName: firstNameValidation,
        lastName: lastNameValidation, phoneNumber: phoneNumberValidation
    } = inputFieldsValidation

    const [password, setPassword] = useState('')
    const [passwordValid, setPasswordValid] = useState(false)

    const [formIsValid, setFormIsValid] = useState(false)
    const [formErrorMsg, setFormErrorMsg] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        if (allFieldsValid() && passwordValid) setFormIsValid(true)
        else setFormIsValid(false)
    },
        [
            formFields, inputFieldsValidation,
            password, passwordValid
        ])

    const onInputChangeHandler = ({ target }) => {
        const { name, value } = target
        setFormFields({ ...formFields, [name]: value })
        validateInputField(name, value)
    }

    const validateInputField = (name, value) => {
        const validationRegex = inputFieldsValidation[name].validationRegex
        const pattern = validationRegex.replace('/', '')
        var re = new RegExp(pattern);
        const isValid = re.test(value)
        const newValidationValue = inputFieldsValidation[name]
        newValidationValue.valid = isValid
        newValidationValue.touched = true
        setInputFieldValidation({ ...inputFieldsValidation, [name]: newValidationValue })
    }

    const allFieldsValid = () => {
        for (const key in inputFieldsValidation) {
            const field = inputFieldsValidation[key]
            if (!field.valid) return false
        }
        return true
    }

    const setPasswordHandler = (value) => {
        setPassword(value)
    }

    const passwordIsValidHandler = (value) => {
        setPasswordValid(value)
    }

    const formSubmitedHandler = async (event) => {
        event.preventDefault()
        if (formIsValid) {
            const user = {
                email,
                displayName,
                password,
                firstName,
                lastName,
                phoneNumber
            }

            const signUpUserObj = { user, redirectPath }

            dispatch(signUpUserThunk(signUpUserObj))
        }
        else {
            setFormErrorMsg('Please fill all required fields!')
        }
    }

    const { valid: displayNameValid, touched: displayNameTouched, validationMsg: displayNameErrorMsg } = displayNameValidation
    const { valid: emailValid, touched: emailTouched, validationMsg: emailErrorMsg } = emailValidation
    const { valid: firstNameValid, touched: firstNameTouched, validationMsg: firstNameErrorMsg } = firstNameValidation
    const { valid: lastNameValid, touched: lastNameTouched, validationMsg: lastNameErrorMsg } = lastNameValidation
    const { valid: phoneNumberValid, touched: phoneNumberTouched, validationMsg: phoneNumberErrorMsg } = phoneNumberValidation

    const displayNameIsInvalid = !displayNameValid && displayNameTouched
    const emailIsInvalid = !emailValid && emailTouched
    const firstNameIsInvalid = !firstNameValid && firstNameTouched
    const lastNameIsInvalid = !lastNameValid && lastNameTouched
    const phoneNumberIsInvalid = !phoneNumberValid && phoneNumberTouched

    const formErrorMsgValue =
        (userErrorMsg && userErrorType === USER_ERROR_TYPES.signUp) ? userErrorMsg : formErrorMsg ? formErrorMsg : null

    return (
        <>
            <FormContainer
                onSubmit={formSubmitedHandler}>
                <TextInput
                    value={displayName}
                    type='text'
                    name='displayName'
                    label='Display name'
                    helperText={displayNameErrorMsg}
                    valid={!displayNameIsInvalid}
                    required={true}
                    onInputChange={onInputChangeHandler}
                    success={displayNameValid}
                />
                <TextInput
                    value={email}
                    type='email'
                    name='email'
                    label='Email'
                    required={true}
                    valid={!emailIsInvalid}
                    helperText={emailErrorMsg}
                    onInputChange={onInputChangeHandler}
                    success={emailValid} />
                <CreatePassword
                    checkIsEnterPressed={
                        () => { }} setPassword={setPasswordHandler}
                    setPasswordIsValid={passwordIsValidHandler} />
                <TextInput
                    value={firstName}
                    type='text'
                    name='firstName'
                    label='First name'
                    required={true}
                    valid={!firstNameIsInvalid}
                    helperText={firstNameErrorMsg}
                    onInputChange={onInputChangeHandler}
                    success={firstNameValid} />
                <TextInput
                    value={lastName}
                    type='text'
                    name='lastName'
                    label='Last name'
                    required={true}
                    valid={!lastNameIsInvalid}
                    helperText={lastNameErrorMsg}
                    onInputChange={onInputChangeHandler}
                    success={lastNameValid} />
                <TextInput
                    value={phoneNumber}
                    type='text'
                    name='phoneNumber'
                    label='Phone number'
                    required={true}
                    valid={!phoneNumberIsInvalid}
                    helperText={phoneNumberErrorMsg}
                    onInputChange={onInputChangeHandler}
                    success={phoneNumberValid} />
                <FormActionsContainer>
                    {formErrorMsgValue && <FormError errorMsg={formErrorMsgValue} />}
                    <Button
                        type='submit'
                        id='sign-up-button'
                        variant='filled'
                        color='primary'
                        size='large'
                        disabled={!formIsValid}>
                        Sign Up
                    </Button>
                </FormActionsContainer>
            </FormContainer>
        </>
    );
}

export default SignUpForm;