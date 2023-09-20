import styled from "styled-components";

export const SliderRangeContainer = styled.input`
    /*Slider circle*/
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height : 1.65rem;
        width: 1.65rem;
        background-color : white;
        border-radius : 50%;
        cursor:pointer;
        pointer-events : auto;
        border:1px solid #999999;
    }

    &::-moz-range-thumb {
        -moz-box-sizing: border-box !important;
        -moz-appearance: none;
        height : 1.65rem;
        width: 1.65rem;
        background-color : white;
        border-radius : 50%;
        cursor:pointer;
        pointer-events : auto;
        border:1px solid #999999;

    }

    &::-ms-thumb {
        -ms-box-sizing: border-box !important;
        appearance: none;
        height : 1.65rem;
        width: 1.65rem;
        background-color : white;
        border-radius : 50%;
        cursor:pointer;
        pointer-events : auto;
        border:1px solid #999999;

    }

    /*Slider circle on range active*/
    &:active::-webkit-slider-thumb{
        border: 2px solid #999999;
    }
    &:active::-moz-range-thumb{
        border: 2px solid #999999;
    }
    &:active::-ms-thumb{
        border: 2px solid #999999;
    }
`
export const RangeTwoHandleContainer = styled.div`
    position:relative;
    width : 100%;
    height:30px;

    & ${SliderRangeContainer}{
        -webkit-appearance: none;
        -moz-appearance : none;
        appearance : none;
        width : 100%;
        outline: none;
        position:absolute;
        margin:auto;
        top:0;
        bottom:0;
        background-color: transparent;
        pointer-events : none;
    }
`
export const SliderTrackContainer = styled.div.attrs(props => ({
    style: {
        background:
            `linear-gradient(to right, #dadae5 ${props.fillFrom}%, 
                ${props.background} ${props.fillFrom}% , 
                ${props.background} ${props.fillTo}%, 
                #dadae5 ${props.fillTo}% )`
    }
}))`
    width:100%;
    height : 5px;
    position:absolute;
    margin:auto;
    top:0;
    bottom:0;
    border-radius : 5px;
`