import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductPagination, selectProductsNoMoreItems } from "../../../store/products/productSelector";
import { setCategoryProductsPage } from "../../../store/products/productSlice";
import BottomCollision from "../../ScrollBottom/ScrollBottom.component";

function ProductPagination() {
    const { page, pageIsLoading } = useSelector(selectProductPagination)
    const noMoreItems = useSelector(selectProductsNoMoreItems)
    const dispatch = useDispatch()

    const changePage = () => {
        if (noMoreItems || pageIsLoading)
            return

        const newPage = page + 1

        dispatch(setCategoryProductsPage(newPage))
    }

    return (
        <React.Fragment>
            <BottomCollision onCollision={changePage} />
        </React.Fragment>
    );
}

export default ProductPagination;