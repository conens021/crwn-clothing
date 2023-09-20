import { ProductImagesContainer } from "../../../../routes/product/Product.styles";
import AppImage from "../../../UI/Image/Image.component";
import placeHolderImage from '../../../../assets/img-placeholder-dark-vertical.jpg'
import { useSelector } from "react-redux";
import { selectActiveProductItem, selectActiveProductSuccess } from "../../../../store/products/productSelector";
import { PRODUCTS_IMAGES_FOLDER } from "../../../../helpers/pathRegistry";
import Skeleton from "../../../UI/Skeleton/Skeleton.component";

function ProductImage() {
    const { contentFolder, imageSrc } = useSelector(selectActiveProductItem)
    const productLoaded = useSelector(selectActiveProductSuccess)
    const imageUrl = `${PRODUCTS_IMAGES_FOLDER}/${contentFolder}/${imageSrc}`


    return (
        <ProductImagesContainer>
            {
                productLoaded ?
                    <AppImage
                        src={imageUrl}
                        placeholderSrc={placeHolderImage} />
                    :
                    <Skeleton height={'100vh'} width='100%' />

            }
        </ProductImagesContainer>
    );
}

export default ProductImage;