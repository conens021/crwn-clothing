import ProductSorting from "./ProductSorting/ProductSorting";
import ProductFilter from './ProductFitler/ProductFilter.component'
import { FilterAndSortingContainer } from "./ProductSortingAndFIlter.styles";
import React from "react";
import Skeleton from "../../UI/Skeleton/Skeleton.component";

function ProductSortingAndFilter({ loading = false }) {

    return (
        <FilterAndSortingContainer>
            {
                loading ?
                    <Skeleton
                        type='text'
                        width={'15rem'}
                        height={'30px'}
                    />
                    :
                    <React.Fragment>
                        <ProductSorting />
                        <ProductFilter />
                    </React.Fragment>
            }

        </FilterAndSortingContainer>
    );
}

export default ProductSortingAndFilter;