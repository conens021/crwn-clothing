import { useState } from "react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useComponentResize } from "../../../hooks/useComponentResize";
import { getCancelationTokenSource } from "../../../services/AxiosService";
import { selectRecentlyAddedProducts, selectRecentlyAddedProductsSuccess } from "../../../store/products/RecentlyAdded/recentlyAddedSelector";
import { getRecentlyAddedProudctsThunk } from "../../../store/products/RecentlyAdded/recentlyAddedThunk";
import ProductsCarousel from "../../AppCarousel/ProductsCarousel.component";
import Typography from "../../UI/Typography/Typography.component";
import Underline from "../../UI/Underline/Underline.component";

let cancelTokenSource

function RecentlyAdded() {
    const dispatch = useDispatch()
    const products = useSelector(selectRecentlyAddedProducts)
    const loadingSuccess = useSelector(selectRecentlyAddedProductsSuccess)
    const sliderWrapperRef = useRef()
    const { width: resizedWidth, resizeCleanup } = useComponentResize(sliderWrapperRef)

    useEffect(() => {
        cancelTokenSource = getCancelationTokenSource()

        return () => {
            resizeCleanup()
            cancelTokenSource.cancel();
        }
    }, [])

    useEffect(() => {
        if (cancelTokenSource) {
            disaptchHandler()
        }
    }, [cancelTokenSource])

    const disaptchHandler = () => {
        const cancelationToken = cancelTokenSource.token

        dispatch(getRecentlyAddedProudctsThunk(cancelationToken))
    }

    return (
        <div style={{ marginTop: '3rem', width: '100%' }} ref={sliderWrapperRef}>
            <Typography component="h2"><Underline> Recently Added</Underline></Typography>
            <ProductsCarousel products={products} success={loadingSuccess} resizedWidth={resizedWidth} />
        </div>
    );
}

export default RecentlyAdded;