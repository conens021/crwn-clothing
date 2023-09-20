import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCartState } from "../../../../hooks/reduxStateHelper/useCartState";
import { ProductActionsContainer } from "../../../../routes/product/Product.styles";
import { selectActiveProductItem, selectActiveProductSuccess } from "../../../../store/products/productSelector";
import Button from "../../../UI/Button/Button.component";
import Skeleton from "../../../UI/Skeleton/Skeleton.component";
import { sizes } from '../../../../styles/sizes'
import { resetChecked, setAddToCartSubmited } from "../../../../store/size/sizeSlice";
import { useEffect } from "react";
import { selectSelectedSize } from "../../../../store/size/sizeSelector";


function ProductActions() {
    const { addToCart, showCartHandler } = useCartState()
    const activeProduct = useSelector(selectActiveProductItem)
    const productLoaded = useSelector(selectActiveProductSuccess)
    const selectedSize = useSelector(selectSelectedSize)
    const dispatch = useDispatch()
    const buttonWidthLarge = sizes.button.width.large
    const buttonHeightLarge = sizes.button.height.large

    useEffect(() => {
        if (selectedSize) {
            addToCart(activeProduct, selectedSize)
            showCartHandler()

            dispatch(resetChecked())
        }
    }, [selectedSize])

    const addToCartHandler = (event) => {
        event.preventDefault()
        event.stopPropagation()

        dispatch(setAddToCartSubmited(true))
    }

    return (
        <ProductActionsContainer>
            {
                productLoaded
                    ?
                    <React.Fragment>
                        <Button variant="filled" size="large" onClick={addToCartHandler}>Add To Cart</Button>
                        <Button variant="filled" size='large'>Add To WishList</Button>
                    </React.Fragment>
                    :

                    <React.Fragment>
                        <Skeleton width={buttonWidthLarge} height={buttonHeightLarge} />
                        <Skeleton width={buttonWidthLarge} height={buttonHeightLarge} />
                    </React.Fragment>
            }

        </ProductActionsContainer>
    );
}

export default ProductActions;