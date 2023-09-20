import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategoryThunk } from "../../../store/products/productsThunk";
import {
    selectProductFilters,
    selectProductPagination,
    selectProducts,
    selectProductsLoaded,
    selectProductsRehidrate,
    selectProductsSorting
} from "../../../store/products/productSelector";
import EmptyItems from "../../EmptyItems/EmptyItems.component";
import ProductCard from "../ProductCard/ProductCard.component";
import { GridItemsContainer } from "../../UI/GridItems/GridItems.styles";
import Skeleton from "../../UI/Skeleton/Skeleton.component";
import Typography from "../../UI/Typography/Typography.component";
import Underline from "../../UI/Underline/Underline.component";
import { resetProductsState } from "../../../store/products/productSlice";
import { ProductsPreviewTitleContainer } from './ProductsPreview.styles'
import { fonts } from "../../../styles/fonts";
import ProductSortingAndFilter from "../ProductSortingAndFilter/ProductSortingAndFilter.component";
import { resetFilters, setFilterModalVissible } from "../../../store/products/ProductFilter/productsFilterSlice";
import ProductPagination from "../ProductPagination/ProductPagination.component";
import config from '../../../config.json'
import { getCancelationTokenSource } from "../../../services/AxiosService";

const pageSize = config.PAGE_SIZE.PRODUCTS
let cancelTokenSource

function ProductsPreview() {
    const dispatch = useDispatch()
    const products = useSelector(selectProducts)
    const productsLoaded = useSelector(selectProductsLoaded)
    const currentProdctSorting = useSelector(selectProductsSorting)
    const currentProductFilter = useSelector(selectProductFilters)
    const { page, pageIsLoading } = useSelector(selectProductPagination)
    const prodctsRehidrate = useSelector(selectProductsRehidrate)
    const params = useParams()
    const { categoryName } = params
    const { fontSize, marginBottom } = fonts.h1

    useEffect(() => {
        cancelTokenSource = getCancelationTokenSource()
        fetchProductsHandler()

        return () => {
            dispatch(resetProductsState())
            dispatch(setFilterModalVissible(false))
            dispatch(resetFilters())
            cancelTokenSource.cancel();
        }
    }, [])

    useEffect(() => {
        if (prodctsRehidrate)
            fetchProductsHandler()
    }, [currentProdctSorting, currentProductFilter, page])

    const fetchProductsHandler = async () => {
        const payload = {
            categoryName,
            cancelToken: cancelTokenSource.token
        }
        dispatch(getProductsByCategoryThunk(payload))
    }

    return (
        <React.Fragment>
            {
                productsLoaded ?
                    <Typography component="h1" align={'center'}>
                        <Underline>
                            {categoryName}
                        </Underline>
                    </Typography>
                    :
                    <ProductsPreviewTitleContainer
                        marginBottom={marginBottom}>
                        <Skeleton
                            type='text'
                            width={'12rem'}
                            height={fontSize}
                        />
                    </ProductsPreviewTitleContainer>
            }
            <ProductSortingAndFilter loading={!productsLoaded} />

            <GridItemsContainer>
                {
                    productsLoaded ?
                        products.map(product => {
                            return (<ProductCard key={product.id} product={product} />)
                        })
                        :
                        <EmptyItems size={pageSize} itemHeight={'100%'} itemWidth={'100%'} />
                }
                {
                    pageIsLoading &&
                    <EmptyItems size={pageSize} itemHeight={'100%'} itemWidth={'100%'} />
                }
            </GridItemsContainer>
            {
                productsLoaded &&
                <ProductPagination />
            }
        </React.Fragment>
    );
}

export default ProductsPreview;