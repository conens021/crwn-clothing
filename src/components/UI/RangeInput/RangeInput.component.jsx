import { colors } from "../../../styles/colors";
import { RangeInputContainer } from "./RangeInput.styles";

function RangeInput({
    minValue, maxValue,
    value, step,
    trackingColor,
    backgroundColor,
    width = '100%',
    onInputChange = () => { }, ...otherProps }) {

    var trackingValue = (value - minValue) / (maxValue - minValue) * 100

    const componentTrackingColor = trackingColor ? trackingColor : colors.secondary['default']
    const componentBackgroundColor = backgroundColor ? backgroundColor : colors.primary['default']

    return (
        <RangeInputContainer
            onChange={onInputChange}
            type="range"
            min={minValue}
            max={maxValue}
            value={value}
            step={step}
            trackingValue={trackingValue}
            borderColor={'transparent'}
            trackingColor={componentTrackingColor}
            backgroundColor={componentBackgroundColor}
            width={width}
            {...otherProps} />
    );
}

export default RangeInput;