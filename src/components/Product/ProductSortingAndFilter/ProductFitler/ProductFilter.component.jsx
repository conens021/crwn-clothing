import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCheckedFilters,
    selectFilterModalVissible,
    selectFiltersConfirmed,
    selectProductFilter,
} from "../../../../store/products/ProductFilter/productsFilterSelector";
import { setFilterModalVissible, uncheckFilters } from "../../../../store/products/ProductFilter/productsFilterSlice";
import { setCategoryProductsFilters } from "../../../../store/products/productSlice";
import AppModal from '../../../AppModal/AppModal.component'
import HorizontalDivider from "../../../UI/HorizontalDivider/HorizontalDivider.component";
import FilterIcon from "../../../UI/Icons/Filter/FilterIcon";
import Typography from "../../../UI/Typography/Typography.component";
import ColorFilter from "./ColorFilter/ColorFIlter.component";
import ProductFilterFooter from "./FilterFooter/ProductFilterFooter.component";
import PriceRangeFilter from "./PriceRangeFilter/PriceRangeFilter.component";
import { FilterButtonContainer } from "./ProductFilter.styles";

function ProductFilter() {
    const filterModalVissible = useSelector(selectFilterModalVissible)
    const checkedFilters = useSelector(selectCheckedFilters)
    const filtersConfirmed = useSelector(selectFiltersConfirmed)
    const productFilter = useSelector(selectProductFilter)

    const dispatch = useDispatch()

    useEffect(() => {
        if (filterModalVissible)
            document.body.style.overflowY = "hidden";
        else
            document.body.style.overflowY = "auto";
    }, [filterModalVissible])

    useEffect(() => {
        if (filtersConfirmed) {
            const allChecked = filtersCheckingCompleted()
            applyFiltersHandler(allChecked)
        }
    }, [checkedFilters, filtersConfirmed])

    const openFilterModalHandler = () => {
        dispatch(setFilterModalVissible(true))
    }

    const closeModalHandler = () => {
        dispatch(setFilterModalVissible(false))
    }

    const applyFiltersHandler = (allChecked) => {
        if (allChecked) {
            dispatch(uncheckFilters())
            dispatch(setCategoryProductsFilters(productFilter))
            closeModalHandler()
        }
    }

    const filtersCheckingCompleted = () => {
        for (const key in checkedFilters) {
            if (!checkedFilters[key])
                return false
        }

        return true
    }

    return (
        <React.Fragment>
            <FilterButtonContainer
                onClick={openFilterModalHandler}>
                <FilterIcon color="primary" />
                <Typography component="text-primary">
                    Filter
                </Typography>
            </FilterButtonContainer>
            <AppModal
                isOpen={filterModalVissible}
                onModalCLose={closeModalHandler}
                height={'700px'}
                width={'650px'}
                backgroundColor={'white'}
                modalTitle='Product Filter'
                modalFooter={<ProductFilterFooter />}>
                <PriceRangeFilter />
                <HorizontalDivider />
                <ColorFilter />
            </AppModal>
        </React.Fragment>
    );
}

export default ProductFilter;