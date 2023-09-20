import React, { useState } from "react";
import { useEffect } from "react";
import ColorService from "../../../../../services/ColorService";
import Typography from "../../../../UI/Typography/Typography.component";
import { ColorFilterContainer } from "./ColorFilter.styles";
import ColorFilterItem from "./ColorFilterItem/ColorFilterItem.component";
import { useDispatch, useSelector } from "react-redux";
import { setColorFilter } from "../../../../../store/products/ProductFilter/productsFilterSlice";
import { selectFiltersConfirmed, selectProductFilter } from "../../../../../store/products/ProductFilter/productsFilterSelector";
import { getCancelationTokenSource } from "../../../../../services/AxiosService";
import { ColorFilerEmptyItems } from "./ColorFilterItem/ColorFIlterEmptyItems.component";

let cancelTokenSource

function ColorFilter() {
    const [colors, setColors] = useState()
    const productFilter = useSelector(selectProductFilter)
    const filtersConfirmed = useSelector(selectFiltersConfirmed)
    const { colors: alreadySelected } = productFilter
    const [activeColors, setActiveColors] = useState(alreadySelected)
    const dispatch = useDispatch()

    useEffect(() => {
        setCancelationTokenSource()

        serviceHandler()

        return () => {
            cancelToken()
        }
    }, [])

    useEffect(() => {
        if (filtersConfirmed)
            dispatch(setColorFilter(activeColors))
    }, [filtersConfirmed])

    const serviceHandler = async () => {
        const colorsData = await ColorService.getAll(getCancelToken())

        setColors(colorsData)
    }

    const addActiveColor = (itemToAdd) => {
        if (itemInActiveColors(itemToAdd))
            return

        else setActiveColors([...activeColors, itemToAdd])
    }

    const removeActiveColor = (itemToRemove) => {
        if (itemInActiveColors(itemToRemove)) {
            const newActiveColors =
                activeColors.filter(color => color.id !== itemToRemove.id)

            setActiveColors(newActiveColors)
        }
    }

    const itemInActiveColors = (item) => {
        return activeColors.find(color => color.id === item.id)
    }

    const setCancelationTokenSource = () => {
        cancelTokenSource = getCancelationTokenSource()
    }

    const cancelToken = () => {
        cancelTokenSource.cancel()
    }

    const getCancelToken = () => {
        return cancelTokenSource.token
    }

    return (
        <>
            <Typography component="h3">Color</Typography>
            <ColorFilterContainer>
                {
                    colors ?
                        colors.map(color => <ColorFilterItem
                            initalActive={itemInActiveColors(color)}
                            addColor={addActiveColor}
                            removeColor={removeActiveColor}
                            color={color} />)
                        :
                        <ColorFilerEmptyItems />
                }
            </ColorFilterContainer>
        </>
    );
}

export default ColorFilter;