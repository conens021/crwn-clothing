import styled from "styled-components";

export const SliderOutter = styled.div`
    min-height : calc(${props => props.minHeight}px + 50px);
    width : 100%;
    max-width : 100%;
    
    ${props => props.responsive && `
        @media (min-width: ${props.responsive['desktop'].breakpoint.min}px) and (max-width: ${props.responsive['desktop'].breakpoint.max}px ){
            min-height: calc(${props.responsive['desktop'].itemHeight}px + 50px);
        }
        @media (min-width: ${props.responsive['tablet'].breakpoint.min}px) and (max-width: ${props.responsive['tablet'].breakpoint.max}px ){
            min-height: calc(${props.responsive['tablet'].itemHeight}px + 50px);
        }
        @media (min-width: ${props.responsive['mobile'].breakpoint.min}px) and (max-width: ${props.responsive['mobile'].breakpoint.max}px ){
            min-height: calc(${props.responsive['mobile'].itemHeight}px + 50px);
        }
    `}

    position:relative;
    overflow-x :hidden;
    overflow-y : visible;
`

export const SliderContainer = styled.div.attrs(props => ({
    style: {
        transform: `translateX(${props.slideValue}px)`
    }
}))`
    display:flex;
    column-gap:${props => props.itemsGap}px;
    transition: all .5s ease-in-out;
    position:relative;
    top:0;
    left:0;

    & > * {
        position:relative;
        flex : 0 0 calc(100% / ${props => props.itemsVisible} - ${props => props.itemGap}px);
        height: ${props => props.itemHeight}px;
    }

    ${props => props.responsive && `
        @media (min-width: ${props.responsive['desktop'].breakpoint.min}px) and (max-width: ${props.responsive['desktop'].breakpoint.max}px ){
            & > * {
                flex : 0 0 calc(100% / ${props.responsive['desktop'].itemsVisible} - ${props.itemGap}px);
                height: ${props.responsive['desktop'].itemHeight}px;
            }
        }
        @media (min-width: ${props.responsive['tablet'].breakpoint.min}px) and (max-width: ${props.responsive['tablet'].breakpoint.max}px ){
            & > * {
                flex : 0 0 calc(100% / ${props.responsive['tablet'].itemsVisible} - ${props.itemGap}px);
                height: ${props.responsive['tablet'].itemHeight}px;
            }
        }
        @media (min-width: ${props.responsive['mobile'].breakpoint.min}px) and (max-width: ${props.responsive['mobile'].breakpoint.max}px ){
            & > * {
                flex : 0 0 calc(100% / ${props.responsive['mobile'].itemsVisible} - ${props.itemGap}px);
                height: ${props.responsive['mobile'].itemHeight}px;
            }
        }
    `}

`

export const BaseSliderAction = styled.div`
    position:absolute;
    top: calc(50% - 50px);
    transform:translateY(-50% + 50px);
    left : ${props => props.left && '15px'};
    right : ${props => props.right && '15px'};
    cursor:pointer;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`

export const CircleSliderAction = styled(BaseSliderAction)`
    height:40px;
    width : 40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1.8rem;
    font-weight:bold;
    background-color:${props => props.bgColor};
    color: ${props => props.color};
`

export const SliderNavigation = styled.div`
    position:relative;
    width:100%;
    top:15px;
    display:flex;
    justify-content:center;
    column-gap:.5rem;
`

export const SliderNavigationItem = styled.div`
    width:35px;
    height:8px;
    background-color:${props => props.active ? props.color : props.bgColor};
    transition:all .5s ease-in-out;
    border-radius : 10px;
`