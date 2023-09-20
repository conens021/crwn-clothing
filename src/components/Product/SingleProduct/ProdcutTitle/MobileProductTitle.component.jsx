import { useSelector } from "react-redux";
import { ProducttMobileTitleContainer } from "../../../../routes/product/Product.styles";
import { selectActiveProductItem, selectActiveProductSuccess } from "../../../../store/products/productSelector";
import { fonts } from "../../../../styles/fonts";
import Skeleton from "../../../UI/Skeleton/Skeleton.component";
import Typography from "../../../UI/Typography/Typography.component";

function MobileProductTitle() {
    const activeProduct = useSelector(selectActiveProductItem)
    const productLoaded = useSelector(selectActiveProductSuccess)
    const { title } = activeProduct
    const { fontSize: h1Size, marginBottom } = fonts.h1

    return (
        <ProducttMobileTitleContainer>
            {
                productLoaded
                    ?
                    <Typography component="h1">
                        {title}
                    </Typography>
                    :
                    <Skeleton
                        type='text'
                        width={'15rem'}
                        height={h1Size}
                        style={{ marginBottom: marginBottom }} />
            }

        </ProducttMobileTitleContainer>
    );
}

export default MobileProductTitle;