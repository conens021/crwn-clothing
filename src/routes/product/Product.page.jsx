import Typography from "../../components/UI/Typography/Typography.component";
import { MainProductContainer, ProductMainInfoContainer, ProductReviews } from "./Product.styles";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProductByIdThunk } from "../../store/products/productsThunk";
import { useParams } from "react-router-dom";
import MobileProductTitle from "../../components/Product/SingleProduct/ProdcutTitle/MobileProductTitle.component";
import ProductImage from "../../components/Product/SingleProduct/ProductImage/ProductImage.component";
import ProductPrice from "../../components/Product/SingleProduct/ProductPrice/ProductPrice.component";
import DekstopProductTitle from "../../components/Product/SingleProduct/ProdcutTitle/DekstopProductTitle.component";
import ProductActions from "../../components/Product/SingleProduct/ProductActions/ProductActions.component";
import { getCancelationTokenSource } from "../../services/AxiosService";
import ProductSizes from "./ProductSizes/ProductSizes.component";
import { useSignalRConnection } from "../../hooks/useSignalRConnection";

let cancelTokenSource

function ProductPage() {
    const dispatch = useDispatch()
    const { productId } = useParams()
    const { Connection: SignalRConnection, ConnectionReady : SignalRConnectionReady } =
        useSignalRConnection('http://localhost:5268/product-inventory');

    useEffect(() => {
        scrollTop()

        setCancelationTokenSource()

        dispatchHandler()

        return () => {
            cancelToken()
        }
    }, [])

    useEffect(() => {
        if (SignalRConnectionReady) {
            joinProductInventoryHub()
        }
    }, [SignalRConnectionReady])

    const joinProductInventoryHub = async () => {
        try {
            SignalRConnection.on('ProductOutOfStock', () => {
                alert('Out of stock')
            })

            await SignalRConnection.invoke('JoinProductInventoryRoom', productId)
        } catch (err) {
            console.warn(err)
        }
    }

    const scrollTop = () => {
        window.scrollTo(0, 0)
    }

    const dispatchHandler = () => {
        const payload = {
            productId,
            cancelToken: cancelTokenSource.token
        }

        dispatch(getProductByIdThunk(payload))
    }

    const setCancelationTokenSource = () => {
        cancelTokenSource = getCancelationTokenSource()
    }

    const cancelToken = () => {
        cancelTokenSource.cancel()
    }

    return (
        <>
            <MobileProductTitle />
            <MainProductContainer>
                <ProductImage />
                <ProductMainInfoContainer>
                    <ProductPrice />
                    <DekstopProductTitle />
                    <ProductSizes />
                    <ProductReviews>
                        <Typography component="h2">Reviews</Typography>
                    </ProductReviews>
                    <ProductActions />
                </ProductMainInfoContainer>
            </MainProductContainer>
        </>
    );
}

export default ProductPage;