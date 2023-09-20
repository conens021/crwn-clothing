import { colors } from "../../styles/colors"
import {
    digitCharacter,
    email,
    lowerCaseLetter, lowerCaseUpperCaseDigit,
    lowerCaseUpperCaseDigitSpecial, onlyLetters, phoneNumber, upperCaseLetter, userName,

} from "./regex"

export const signUpFormValidations = {
    displayName: {
        valid: false,
        touched: false,
        validationRegex: userName(4, 20),
        validationMsg: 'Display name must contain 4-20 chars,at least 1 letter and 1 number!'
    },
    email: {
        valid: false,
        touched: false,
        validationRegex: email,
        validationMsg: 'Not a valid email address!'
    },
    firstName: {
        valid: false,
        touched: false,
        validationRegex: onlyLetters,
        validationMsg: 'Not a valid firstname value(only accept alphabetic letters)'
    },
    lastName: {
        valid: false,
        touched: false,
        validationRegex: onlyLetters,
        validationMsg: 'Not a valid lastname value(only accept alphabetic letters)'
    },
    phoneNumber: {
        valid: false,
        touched: false,
        validationRegex: phoneNumber,
        validationMsg: 'Not a valid phone number'
    }
}

export const passwordRequirements = [
    { id: 1, test: (value) => value.length >= 8, label: '8 Chars' },
    { id: 2, test: lowerCaseLetter, label: '1 lowercase letter' },
    { id: 3, test: upperCaseLetter, label: '1 uppercase letter' },
    { id: 4, test: digitCharacter, label: '1 number' },
]

export const passwordStrengthValues = [
    {
        test: lowerCaseUpperCaseDigit(8),
        label: 'Weak password', color: colors.error.default
    },
    {
        test: lowerCaseUpperCaseDigitSpecial(8),
        label: 'Good password', color: colors.secondary.default
    },
    {
        test: lowerCaseUpperCaseDigitSpecial(12),
        label: 'Strong password', color: colors.success.default
    },
]