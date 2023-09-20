import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { priceRangeFilter } from "../../../../../constants/filtering";
import { selectFiltersConfirmed, selectProductFilter } from "../../../../../store/products/ProductFilter/productsFilterSelector";
import { setPriceRange } from "../../../../../store/products/ProductFilter/productsFilterSlice";
import NumberInput from "../../../../UI/NumberInput/NumberInput";
import RangeTwoHandle from "../../../../UI/RangeITwoHandle/RangeTwoHandle.component";
import Typography from "../../../../UI/Typography/Typography.component";

const step = priceRangeFilter.step
const minGap = priceRangeFilter.minGap
const minPrice = priceRangeFilter.minPrice
const maxPrice = priceRangeFilter.maxPrice

function PriceRangeFilter() {
    const {
        priceFrom: priceFromDefault,
        priceTo: priceToDefault } = useSelector(selectProductFilter)
    const filtersConfirmed = useSelector(selectFiltersConfirmed)
    const [priceFrom, setPriceFrom] = useState(priceFromDefault)
    const [priceTo, setPriceTo] = useState(priceToDefault)
    const dispatch = useDispatch()

    useEffect(() => {
        if (filtersConfirmed) {
            dispatchHandler()
        }
    }, [filtersConfirmed])

    const dispatchHandler = () => {
        const payload = { priceFrom: priceFrom, priceTo: priceTo }

        dispatch(setPriceRange(payload))
    }

    const priceFromChangeHandler = (event) => {
        const priceFromValue = parseInt(event.target.value)

        setPriceFrom(priceFromValue)
    }

    const priceToChangeHandler = (event) => {
        const priceToValue = parseInt(event.target.value)
        setPriceTo(priceToValue)
    }

    const rangeInputChangeHandler = ({ fromValue, toValue }) => {
        setPriceFrom(fromValue)
        setPriceTo(toValue)
    }

    return (
        <div className="range-input">
            <Typography component="h3">Price range</Typography>
            <div style={{ width: '100%' }}>
                <RangeTwoHandle
                    min={minPrice}
                    max={maxPrice}
                    from={priceFrom}
                    to={priceTo}
                    step={step}
                    minGap={minGap}
                    color='secondary'
                    onInputChange={rangeInputChangeHandler} />
            </div>
            <br />
            <div style={{ display: 'flex', alignItems: 'center', columnGap: '.5rem' }}>
                <NumberInput
                    onInputChange={priceFromChangeHandler}
                    name='min-price'
                    minValue={minPrice}
                    maxValue={maxPrice}
                    value={priceFrom}
                    step={step}
                    label='Price From' />
                -
                <NumberInput
                    onInputChange={priceToChangeHandler}
                    name='max-price'
                    minValue={minPrice}
                    maxValue={maxPrice}
                    value={priceTo}
                    step={step}
                    label='Price To' />
            </div>
        </div>
    );
}

export default PriceRangeFilter;