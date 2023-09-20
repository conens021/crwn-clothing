import { FormRowContainer } from "../FormRow/FormRow.styles";
import { SelectContainer } from "./Select.styles";

function Select({ children, value, label, onSelectChange = () => { }, name, ...otherProps }) {

    return (
        <FormRowContainer>
            {
                label &&
                <label htmlFor={name}>{label}</label>
            }
            <SelectContainer value={value} onChange={onSelectChange} name={name} {...otherProps}>
                {children}
            </SelectContainer >
        </FormRowContainer>
    );
}

export default Select;