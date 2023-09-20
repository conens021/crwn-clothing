import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    address: '',
    city: '',
    zip: '',
    country: ''
}

const shippingDetailsSlice = createSlice({
    name: 'shippingDetails',
    initialState,
    reducers: {
        setShippingDetails: (state, action) => {
            const { payload } = action
            const { address, city, country, zip } = payload

            state.address = address
            state.city = city
            state.country = country
            state.zip = zip
        }
    }
})


export const { setShippingDetails } = shippingDetailsSlice.actions

export default shippingDetailsSlice.reducer