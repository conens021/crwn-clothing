import AppImage from "../../UI/Image/Image.component";
import { ProductCardContainer, ProductCardFooter, ProductCardImageContainer } from "./ProductCarouselCard.styles";
import { PRODUCTS_IMAGES_FOLDER } from '../../../helpers/pathRegistry'
import placholderImage from '../../../assets/img-placeholder-dark-vertical.jpg'


function ProductCarouselCard({ product }) {
    const { id, title, price, imageSrc, contentFolder } = product
    const imageUrl = `${PRODUCTS_IMAGES_FOLDER}/${contentFolder}/${imageSrc}`

    return (
        <ProductCardContainer to={`/shop/product/${id}`}>
            <ProductCardImageContainer>
                <AppImage
                    src={imageUrl}
                    placeholderSrc={placholderImage}
                />
            </ProductCardImageContainer>
            <ProductCardFooter>
                <span className="title">{title}</span>
                <span className="price">${price}</span>
            </ProductCardFooter>
        </ProductCardContainer>
    );
}

export default ProductCarouselCard;