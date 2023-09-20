import { useEffect } from "react";
import { useState } from "react";
import { colors } from "../../../styles/colors";
import { RangeTwoHandleContainer, SliderRangeContainer, SliderTrackContainer } from "./RangeTwoHandle.styles";

function RangeTwoHandle({
    color = 'primary',
    mode = 'default',
    from, to,
    min = 1, max = 100,
    step = 5, minGap = 5,
    onInputChange = () => { } }) {

    const [fromValue, setFromValue] = useState(from)
    const [toValue, setToValue] = useState(to)
    const [fillValue, setFillValue] = useState({})

    const trackerBackground = colors[color][mode]

    useEffect(() => {
        fillSliderTrackt()
        onInputChange({ fromValue, toValue })
    }, [fromValue, toValue])

    useEffect(() => {
        if (from && from !== fromValue) {
            if (toValue > (from + minGap))
                setFromValue(from)
        }
        if (to && to !== toValue) {
            if (fromValue < (to - minGap))
                setToValue(to)
        }
    }, [from, to])


    const fillSliderTrackt = () => {
        const fromPercent = (fromValue / max) * 100
        const toPercent = (toValue / max) * 100

        setFillValue({ from: fromPercent, to: toPercent })
    }

    const fromValueChangeHandler = event => {
        const fromInputValue = parseInt(event.target.value)

        setFromValueHandler(fromInputValue)
    }

    const toValueChangeHandler = event => {
        const toInputValue = parseInt(event.target.value)

        setToValueHandler(toInputValue)
    }

    const setFromValueHandler = (newFromValue) => {
        if (toValue <= (newFromValue + minGap))
            setFromValue(toValue - minGap)
        else
            setFromValue(parseInt(newFromValue))
    }

    const setToValueHandler = (newToValue) => {
        if (fromValue >= (newToValue - minGap))
            setToValue(fromValue + minGap)
        else
            setToValue(parseInt(newToValue))
    }

    const { from: fillFrom, to: fillTo } = fillValue

    return (
        <RangeTwoHandleContainer>
            <SliderTrackContainer
                background={trackerBackground}
                fillFrom={fillFrom}
                fillTo={fillTo} />
            <SliderRangeContainer
                type='range'
                onChange={fromValueChangeHandler}
                step={step}
                min={min}
                max={max}
                value={fromValue}
            />
            <SliderRangeContainer
                type='range'
                onChange={toValueChangeHandler}
                step={step}
                min={min}
                max={max}
                value={toValue} />
        </RangeTwoHandleContainer>
    );
}

export default RangeTwoHandle;