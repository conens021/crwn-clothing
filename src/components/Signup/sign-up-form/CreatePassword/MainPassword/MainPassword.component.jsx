import { useEffect, useState } from "react";
import TextInput from "../../../../UI/TextInput/TextInput.component";
import PasswordStrengthText from "./PasswordStrengthText.component";
import PassowrdRequirements from "./PasswordRequirements/PasswordRequirements.component";

function MainPassword({
    checkIsEnterPressed, passwordChanged,
    passwordIsValidHandler, passwordRequirements,
    passwordStrengthValues }) {

    const [password, setPassword] = useState("");
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [fieldsAreValid, setFieldsValid] = useState(false)
    const [requirementFields, setRequirementFields] = useState([])
    const [strengthValue, setStrengthValue] = useState([])

    useEffect(() => {
        if (passwordRequirements)
            updateRequirementFields()
        if (passwordStrengthValues && fieldsAreValid)
            updatePasswordStrengthValues()
        if (passwordTouched) {
            validatePassword();
        }
    }, [password, fieldsAreValid]);

    const updateRequirementFields = () => {
        const newRequirementFields = passwordRequirements.map(req => {
            return {
                id: req.id,
                label: req.label,
                valid: validateField(req.test)
            }
        })

        setRequirementFields(newRequirementFields)
    }

    const updatePasswordStrengthValues = () => {
        let strengthCurrentValue

        passwordStrengthValues.forEach(value => {
            strengthCurrentValue =
                validateField(value.test) ? value : strengthCurrentValue

            validateField(value.test)
        })

        setStrengthValue(strengthCurrentValue)
    }

    const passwordChangeHandler = (event) => {
        const passwordValue = event.target.value;
        setPassword(passwordValue);
        passwordChanged(passwordValue);
        setPasswordTouched(true);
    };

    const keyUpHandler = (event) => {
        checkIsEnterPressed(event);
    };

    const validateField = (test) => {
        if (typeof test === 'function') {
            return test(password)
        } else {
            return validateRegex(test, password)
        }
    }

    const validatePassword = () => {
        for (const req of passwordRequirements) {
            let valid
            if (typeof req.test === 'function') {
                valid = req.test(password)
            } else {
                valid =
                    validateRegex(req.test, password)
            }

            if (!valid) {
                setFieldsValid(false)
                passwordIsValidHandler(false)
                break
            }

            setFieldsValid(true)
            passwordIsValidHandler(true)
        }
    };

    const validateRegex = (regex, testValue) => {
        const pattern = regex.replace('/', '')
        var re = new RegExp(pattern);
        const isValid = re.test(testValue)

        return isValid
    }

    const passwordNotValid = !fieldsAreValid && passwordTouched;
    const passwordInputIsValid = fieldsAreValid && passwordTouched;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
            <TextInput
                value={password}
                id="outlined-password-input"
                label="Password"
                type="password"
                onInputChange={passwordChangeHandler}
                onKeyUp={keyUpHandler}
                required={true}
                valid={!passwordNotValid}
                success={passwordInputIsValid} />
            {
                (passwordNotValid && passwordRequirements) &&
                <PassowrdRequirements
                    allFieldsValid={fieldsAreValid}
                    requirements={requirementFields}
                    password={password} />
            }

            {passwordInputIsValid &&
                <PasswordStrengthText strengthValue={strengthValue} />}
        </div>
    );
}

export default MainPassword;
