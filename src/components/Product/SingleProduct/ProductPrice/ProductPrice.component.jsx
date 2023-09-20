import { useSelector } from "react-redux";
import { ProudctMainPriceContainer } from "../../../../routes/product/Product.styles";
import { selectActiveProductItem, selectActiveProductSuccess } from "../../../../store/products/productSelector";
import { fonts } from "../../../../styles/fonts";
import Skeleton from "../../../UI/Skeleton/Skeleton.component";

function ProductPrice() {
    const activeProduct = useSelector(selectActiveProductItem)
    const productLoaded = useSelector(selectActiveProductSuccess)
    const { price } = activeProduct

    return (
        <ProudctMainPriceContainer>
            {
                productLoaded ?
                    <>
                        ${price}
                    </>
                    :
                    <Skeleton
                        type='text'
                        width={'10rem'}
                        height={'2.6rem'}
                    />
            }
        </ProudctMainPriceContainer>
    );
}

export default ProductPrice;