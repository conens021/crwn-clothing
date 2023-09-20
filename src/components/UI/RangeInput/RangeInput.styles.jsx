import styled from "styled-components";

/* export const RangeInputContainer = styled.input`
    background: linear-gradient(to right, ${props => props.trackingColor} 0%, ${props => props.trackingColor} ${props => props.trackingValue}%, ${props => props.backgroundColor} ${props => props.trackingValue}%, ${props => props.backgroundColor} 100%);
    border: solid 1px ${props => props.borderColor};
    border-radius: 8px;
    height: 7px;
    width: 356px;
    outline: none;
    transition: background 450ms ease-in;
    -webkit-appearance: none;
` */

export const RangeInputContainer = styled.input.attrs(props => ({
    style: (props.trackingColor && props.backgroundColor) && {
        background: `linear-gradient(to right, ${props.trackingColor} 0%, ${props.trackingColor} ${props.trackingValue}%, ${props.backgroundColor} ${props.trackingValue}%, ${props.backgroundColor} 100%)`,
        border: `solid 1px ${props.borderColor}`,
    }
}))`
        border-radius: 8px;
        height: 7px;
        width: ${props => props.width};
        outline: none;
        transition: background 450ms ease-in;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        /*Slider circle*/
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            height : 1.75rem;
            width: 1.75rem;
            background-color : blue;
            border-radius : 50%;
            cursor:pointer;
         }

         &::-moz-range-thumb {
            -webkit-appearance: none;
            height : 1.75rem;
            width: 1.75rem;
            background-color : blue;
            border-radius : 50%;
            cursor:pointer;
         }

         &::-ms-thumb {
            appearance: none;
            height : 1.75rem;
            width: 1.75rem;
            background-color : blue;
            border-radius : 50%;
            cursor:pointer;
         }

         /*Slider circle on range active*/
         &:active::-webkit-slider-thumb{
            background-color : white;
            border: 3px solid blue;
         }

`