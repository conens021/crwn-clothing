import { useEffect, useRef, useState } from "react";
import { CircleSliderAction, SliderContainer, SliderNavigation, SliderNavigationItem, SliderOutter } from "./Slider.styles";

function Slider({ children, itemHeight = 150, itemsGap = 10,
    itemsVisible = 4, responsive, color = 'red', bgColor = '#141414', resizedWidth }) {
    const sliderContainerRef = useRef()
    const sliderOuterRef = useRef()
    const [slideValue, setSlideValue] = useState(0)
    const [clientWidth, setClientWidth] = useState(-1)
    const [sliderWidth, setSliderWidth] = useState(-1)
    const [layoudUpdated, setLayoutUpdated] = useState(false)
    const [rightButtonDisabled, setRightButtonDisabled] = useState(false)
    const [leftButtonDisabled, setLeftButtonDisabled] = useState(true)
    const [minSlideValue, setMinSlideValue] = useState(0)
    const [sliderCount, setSliderCount] = useState(0)
    const [currentSlider, setCurrentSlider] = useState(1)
    const [actionsVisible, setActionsVisible] = useState(false)
    //mobile movement
    //starting slide position
    const [startSlide, setStartSlide] = useState(0)
    //ending slide position
    const [endSlide, setEndSlide] = useState(0)
    const [touchReleased, setTouchReleased] = useState(false)

    useEffect(() => {
        if (children)
            setClientWidthHandler()
    }, [children])

    useEffect(() => {
        if (clientWidth !== -1 && sliderWidth !== -1)
            setLayoutSizeHandler(clientWidth, sliderWidth)
    }, [clientWidth, sliderWidth])

    useEffect(() => {
        if (sliderContainerRef.current) {
            sliderContainerRef.current.addEventListener('touchstart', handleTouchStart, false)
            sliderContainerRef.current.addEventListener('touchend', handleTouchEnd, false)
        }
    }, [sliderContainerRef])

    useEffect(() => {
        if (layoudUpdated) {
            setLayoutUpdated(false)
            if (children.length >= itemsVisible) {
                setActionsVisible(true)
            }
        }
    }, [layoudUpdated])

    useEffect(() => {
        if (touchReleased) {
            handleGesture()
        }
    }, [touchReleased])

    useEffect(() => {
        if (minSlideValue !== 0) {
            const leftDisabled = slideValue === 0
            const rightDisabled = slideValue <= minSlideValue

            setLeftButtonDisabled(leftDisabled)
            setRightButtonDisabled(rightDisabled)
        }
    }, [slideValue, minSlideValue])

    useEffect(() => {
        if (resizedWidth !== clientWidth)
            resizeHandler()
    }, [resizedWidth])

    //mobile
    const handleTouchStart = event => {
        const x = event.changedTouches[0].screenX
        setTouchReleased(false)
        setStartSlide(x)
    }

    const handleTouchEnd = event => {
        const x = event.changedTouches[0].screenX
        setEndSlide(x)
        setTouchReleased(true)
    }

    const handleGesture = () => {
        if (startSlide < endSlide) {
            moveSliderHandler('right')
        }
        else if (startSlide > endSlide) {
            moveSliderHandler('left')
        }
    }

    const resizeHandler = (event) => {
        const { newClientWidth, newSliderWidth } = setClientWidthHandler()
        //update values based of cwidth  changed
        setLayoutSizeHandler(newClientWidth, newSliderWidth)
        setSlideValue(0)
        setCurrentSlider(1)
        setLeftButtonDisabled(true)
    }

    const setClientWidthHandler = () => {
        const cWidth = sliderOuterRef.current.parentElement.offsetWidth
        const sliderWidth = sliderContainerRef.current.scrollWidth

        setClientWidth(cWidth)
        setSliderWidth(sliderWidth)

        return { cWidth, sliderWidth }
    }

    const setLayoutSizeHandler = (cWidth, sliderWidth) => {
        setBasicLayoutValues(cWidth, sliderWidth)
    }

    const setBasicLayoutValues = (cWidth, sliderWidthValue) => {
        const items = responsive ? getResponsiveValues().itemsVisible : itemsVisible

        const sliderCountValue = Math.ceil(children.length / items)
        const minSlideVal = cWidth - sliderWidthValue

        setSliderCount(sliderCountValue)
        setMinSlideValue(minSlideVal)

        setLayoutUpdated(true)
    }

    const getResponsiveValues = () => {
        for (const key in responsive) {
            const device = responsive[key]
            const { breakpoint,
                itemsVisible: responsiveItemsVisible,
                itemHeight: responsiveItemHeight } = device
            const { max, min } = breakpoint

            if (clientWidth < max && clientWidth >= min) {
                return {
                    itemsVisible: responsiveItemsVisible,
                    itemHeight: responsiveItemHeight
                }
            }
        }

        return {
            itemsVisible,
            itemHeight
        }
    }

    const moveSliderHandler = (slide) => {
        let newSlideVal = slide === 'left'
            ? slideValue - clientWidth
            : slideValue + clientWidth

        newSlideVal = newSlideVal > 0
            ? 0
            : (newSlideVal < minSlideValue)
                ? minSlideValue
                : newSlideVal

        const newCurrentSlide = slide === 'left'
            ? currentSlider + 1
            : currentSlider - 1
        const active = newSlideVal === 0
            ? 1
            : newSlideVal <= minSlideValue
                ? sliderCount
                : newCurrentSlide

        setSlideValue(newSlideVal)
        setCurrentSlider(active)
    }

    const items = getResponsiveValues().itemsVisible

    const itemGap = items * (itemsGap / items)

    return (
        <SliderOutter
            ref={sliderOuterRef}
            minHeight={itemHeight}
            responsive={responsive}
        >
            <SliderContainer
                ref={sliderContainerRef}
                slideValue={slideValue}
                itemsGap={itemsGap}
                itemGap={itemGap}
                itemHeight={itemHeight}
                itemsVisible={itemsVisible}
                responsive={responsive}
            >
                {children}
            </SliderContainer>

            {
                actionsVisible &&
                <>
                    {
                        !leftButtonDisabled
                        &&
                        <CircleSliderAction
                            color={color}
                            bgColor={bgColor}
                            onClick={() => moveSliderHandler('right')} left
                        >&#x2039;</CircleSliderAction>

                    }

                    {
                        !rightButtonDisabled
                        &&
                        <CircleSliderAction

                            color={color}
                            bgColor={bgColor}
                            onClick={() => moveSliderHandler('left')} right> &#x203A;</CircleSliderAction>
                    }

                    <SliderNavigation>
                        {Array(sliderCount).fill().map((item, index) => (
                            <SliderNavigationItem
                                key={index}
                                active={index + 1 === currentSlider}
                                color={color}
                                bgColor={bgColor}
                            />
                        ))}
                    </SliderNavigation>
                </>
            }
        </SliderOutter >
    );
}

export default Slider;