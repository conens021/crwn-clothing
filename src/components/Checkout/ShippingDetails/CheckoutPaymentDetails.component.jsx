import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectShippingDetails } from "../../../store/order/shippingDetails/shippingDetailsSelector";
import { setShippingDetails } from "../../../store/order/shippingDetails/shippingDetailsSlice";
import { FormContainer } from "../../UI/Form/Form.styles";
import { FormRowContainer } from "../../UI/FormRow/FormRow.styles";
import TextInput from "../../UI/TextInput/TextInput.component";
import Typography from "../../UI/Typography/Typography.component";

function CheckoutShippingDetails() {
    const shippingDetails = useSelector(selectShippingDetails)
    const dispatch = useDispatch()

    const onBlurHandler = ev => {
        const name = ev.target.name

        const shippingDetilsNewValues = { ...shippingDetails }
        shippingDetilsNewValues[name] = ev.target.value

        dispatch(setShippingDetails(shippingDetilsNewValues))
    }

    return (
        <div >
            <Typography component="h2">Shipping Details</Typography>
            <FormContainer >
                <FormRowContainer>
                    <TextInput
                        fullWidth
                        id='shipping-address'
                        type='text'
                        name='address'
                        label='Shipping Address'
                        required
                        onBlur={onBlurHandler}
                    />
                </FormRowContainer>
                <FormRowContainer>
                    <TextInput
                        fullWidth
                        id='shipping-city'
                        type='text'
                        name='city'
                        label='Shipping City'
                        required
                        onBlur={onBlurHandler}
                    />
                </FormRowContainer>
                <FormRowContainer>
                    <TextInput
                        fullWidth
                        id='shipping-zip-code'
                        type='text'
                        name='zip'
                        label='Shipping ZIP Code'
                        required
                        onBlur={onBlurHandler}
                    />
                    <TextInput
                        fullWidth
                        id='shipping-country'
                        type='text'
                        name='country'
                        label='Shipping Country'
                        required
                        onBlur={onBlurHandler}
                    />
                </FormRowContainer>
            </FormContainer>
        </div>
    );
}

export default CheckoutShippingDetails;