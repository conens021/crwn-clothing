import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterModalVissible: false,
    filters: {
        priceFrom: 0,
        priceTo: 10000,
        colors: []
    },
    filtersConfirmed: false,
    checked: {
        priceRange: false,
        colors: false
    }
}

const ProductsFilterSlice = createSlice({
    name: 'productsFilter',
    initialState,
    reducers: {
        setFilterModalVissible: (state, action) => {
            const { payload } = action

            state.filterModalVissible = payload
        },
        setPriceRange: (state, action) => {
            const { payload } = action
            const { priceFrom, priceTo } = payload

            state.filters.priceFrom = priceFrom
            state.filters.priceTo = priceTo
            state.checked.priceRange = true
        },
        setColorFilter: (state, action) => {
            const { payload } = action

            state.filters.colors = payload
            state.checked.colors = true
        },
        uncheckFilters: (state) => {
            state.checked.priceRange = false
            state.checked.colors = false
            state.filtersConfirmed = false
        },
        setFilersConfirmed: (state, action) => {
            const { payload } = action
            state.filtersConfirmed = payload
        }
        ,
        resetFilters: (state) => {
            state.filters.priceFrom = 0
            state.filters.priceTo = 10000
            state.filters.colors = []
            state.filterModalVissible = false
            state.filtersConfirmed = false
        }
    }
})

export const {
    setPriceRange, resetFilters,
    setFilterModalVissible, setColorFilter,
    uncheckFilters, setFilersConfirmed
} = ProductsFilterSlice.actions

export default ProductsFilterSlice.reducer