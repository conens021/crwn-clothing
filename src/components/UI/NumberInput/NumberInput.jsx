import { FormRowContainer } from "../FormRow/FormRow.styles";
import { NumberInputContainer } from "./NumberInput.styles";

function NumberInput({ label, value = 0, minValue = 0, step = 1, maxValue = 100, onInputChange = () => { }, name, ...otherProps }) {
    return (
        <FormRowContainer>
            {
                label &&
                <label htmlFor={name}>{label}</label>
            }
            <NumberInputContainer
                type='number'
                min={minValue}
                max={maxValue}
                value={value}
                onChange={onInputChange}
                name={name}
                step={step}
                {...otherProps} />
        </FormRowContainer>
    );
}

export default NumberInput;