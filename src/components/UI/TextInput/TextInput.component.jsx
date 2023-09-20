import { useEffect } from 'react';
import { useState } from 'react';
import { colors } from '../../../styles/colors';
import {
    Label,
    TextInputContainer,
    TextInputField, TextInputHelperText
} from './TextInput.styles';

function TextInput(
    {
        fullWidth = false,
        id = '', label = '', type = 'text', name = '',
        required, valid = true, helperText = '', successText,
        success = false, color = 'primary', colorMode = 'default',
        onInputChange = () => { }, onKeyUp = () => { }, onBlur = () => { }, ...other
    }) {

    const [itemActive, setItemActive] = useState()
    const [labelFixed, setLabelFixed] = useState()
    const inputColor = colors[color][colorMode]
    const errorColor = colors.error.default
    const successColor = colors.success.default

    const onBlurHandler = (ev) => {
        setItemActive(false)
        onBlur(ev)
    }

    const setInputActiveHandler = () => {
        setItemActive(true)
        setLabelFixed(true)
    }

    return (
        <TextInputContainer fullWidth={fullWidth}>
            <TextInputField
                id={id}
                valid={valid} success={success}
                type={type} name={name}
                required={required}
                active={itemActive}
                onChange={onInputChange}
                onKeyUp={onKeyUp}
                onFocus={setInputActiveHandler}
                onBlur={onBlurHandler}
                color={inputColor}
                errorColor={errorColor}
                successColor={successColor}
                {...other} />
            <Label fixed={labelFixed} color={inputColor}> {label} </Label>
            {!valid &&
                <TextInputHelperText valid={valid} success={success}>{helperText}</TextInputHelperText>}
            {(valid && success && successText) &&
                <TextInputHelperText success={success} valid={valid}>{successText}</TextInputHelperText>}

        </TextInputContainer>
    );
}

export default TextInput;