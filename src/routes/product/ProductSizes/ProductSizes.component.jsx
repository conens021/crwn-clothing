import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormError from "../../../components/UI/FormError/FormError.component";
import { selectActiveProductItem } from "../../../store/products/productSelector";
import { selectAddToCartSubmited } from "../../../store/size/sizeSelector";
import { resetChecked, setSelected } from "../../../store/size/sizeSlice";
import EmptyProductSizes from "./EmptyProductSizes.component";
import {
    ProductSizeItemContainer,
    ProductSizesContainer,
    ProductSizesItems,
    ProductSizesLabel,
    ProductSizesWrapperConainer
} from "./ProductSizes.styles";

function ProductSizes({ productId }) {
    const [sizeErorr, setSizeError] = useState(null)
    const product = useSelector(selectActiveProductItem)
    const addToCartSubmited = useSelector(selectAddToCartSubmited)
    const dispatch = useDispatch()
    const availableSizes = product ? product.sizes : null
    const [active, setActive] = useState()

    useEffect(() => {
        if (addToCartSubmited) {
            dispatchHandler()
        }
    }, [addToCartSubmited])


    const dispatchHandler = () => {
        if (!active) {
            setSizeError('Select size')
            dispatch(resetChecked())
            return
        }

        setSizeError(null)
        dispatch(setSelected(active))
    }

    const sizes = [
        { id: 1, title: "XS", value: 1 },
        { id: 2, title: "S", value: 2 },
        { id: 3, title: "M", value: 3 },
        { id: 4, title: "L", value: 4 },
        { id: 5, title: "XL", value: 5 },
        { id: 6, title: "XXl", value: 6 },
        { id: 7, title: "XXXL", value: 7 },
    ]

    const setActiveSizeHandler = (size) => {
        if (isAvailableSize(size)) {
            setActive(size)
            setSizeError(null)
        }
    }

    const isAvailableSize = (size) => {
        return availableSizes.find(item =>
            item.id === size.id
        )
    }

    const isActive = (size) => {
        if (!active) return false
        return size.id === active.id
    }

    return (
        <ProductSizesWrapperConainer>
            <ProductSizesContainer error={sizeErorr}>
                <ProductSizesLabel>
                    Select Size
                </ProductSizesLabel>
                <ProductSizesItems>
                    {
                        product && availableSizes
                            ?
                            sizes.map(size => (
                                <ProductSizeItemContainer
                                    disabled={!isAvailableSize(size)}
                                    active={isActive(size)}
                                    onClick={() => setActiveSizeHandler(size)}
                                    key={size.id}>{size.title}
                                </ProductSizeItemContainer>
                            ))
                            :
                            <EmptyProductSizes />
                    }
                </ProductSizesItems>
            </ProductSizesContainer>
            <div>
                {sizeErorr
                    && <FormError errorMsg={sizeErorr} />}
            </div>
        </ProductSizesWrapperConainer>
    );
}

export default ProductSizes;