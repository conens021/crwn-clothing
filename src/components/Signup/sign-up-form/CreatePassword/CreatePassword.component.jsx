import { useEffect, useState } from "react";
import { passwordRequirements, passwordStrengthValues } from "../../../../utils/validations";
import TextInput from "../../../UI/TextInput/TextInput.component";
import MainPassword from "./MainPassword/MainPassword.component";

function CreatePassword({ checkIsEnterPressed, setPasswordIsValid, setPassword }) {
  const [mainPassword, setMainPassword] = useState("");
  const [mainPasswordValid, setMainPasswordValid] = useState(false);

  const [repeatPassowrd, setRepeatPassword] = useState("");
  const [repeatPasswordTouched, setRepeatPasswordTocuhed] = useState(false)
  const [repeatPassowrdIsValid, setRepeatPasswordIsValid] = useState(false);

  useEffect(() => {
    //for parent component
    setPassword(mainPassword)
    if (mainPasswordValid && repeatPassowrdIsValid) {
      setPasswordIsValid(true)
    }
    else setPasswordIsValid(false)
  }, [
    mainPassword, mainPasswordValid,
    repeatPassowrd, repeatPasswordTouched,
    repeatPassowrdIsValid
  ])

  const repeatPasswordChangeHandler = (event) => {
    const repeatPassowrdValue = event.target.value;
    setRepeatPassword(repeatPassowrdValue);
    validateRepeatPassword(repeatPassowrdValue)
    setRepeatPasswordTocuhed(true)
  };
  const mainPasswordChangedHandler = (value) => {
    setMainPassword(value)
  };

  const keyUpHandler = (event) => {
    checkIsEnterPressed(event);
    validateRepeatPassword(repeatPassowrd)
  };

  const passwordIsValidHandler = (isValid) => {
    setMainPasswordValid(isValid);
  };

  const validateRepeatPassword = (value) => {
    if (value === mainPassword) setRepeatPasswordIsValid(true)
    else setRepeatPasswordIsValid(false)
  }

  const repeatPasswordIsNotValid = !repeatPassowrdIsValid && repeatPasswordTouched

  return (
    <>
      <MainPassword
        passwordRequirements={passwordRequirements}
        passwordStrengthValues={passwordStrengthValues}
        passwordIsValidHandler={passwordIsValidHandler}
        checkIsEnterPressed={keyUpHandler}
        passwordChanged={mainPasswordChangedHandler}
      />
      <TextInput
        value={repeatPassowrd}
        id="outlined-password-input"
        label="Repeat password"
        type="password"
        onInputChange={repeatPasswordChangeHandler}
        onKeyUp={keyUpHandler}
        required
        valid={!repeatPasswordIsNotValid}
        helperText={repeatPasswordIsNotValid && 'Password dont match'}
        success={repeatPassowrdIsValid}
      />
    </>
  );
}

export default CreatePassword