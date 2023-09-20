import { PRODUCTS_IMAGES_FOLDER } from "../../../../../helpers/pathRegistry";
import placholderImage from '../../../../../assets/img-placeholder-dark-vertical.jpg'
import { OrderProductImageContainer, OrderProductItemContainer, OrderProductTitleContainer } from "./OrderProductItem.styles";
import AppImage from "../../../../UI/Image/Image.component";
import { round2Digits } from "../../../../../utils/auth/Digits.utils";

function OrderProductItem({ product = {} }) {
    const { id, title, price, imageSrc, contentFolder, quantity } = product
    const imageUrl = `${PRODUCTS_IMAGES_FOLDER}/${contentFolder}/${imageSrc}`

    const getProductCartPrice = () => {

        return round2Digits(price * quantity)
    }

    return (
        <OrderProductItemContainer key={product.id}>
            <OrderProductImageContainer>
                <AppImage
                    src={imageUrl}
                    placeholderSrc={placholderImage}
                />
            </OrderProductImageContainer>
            <OrderProductTitleContainer>{title}</OrderProductTitleContainer>
            <div>${price}</div>
            <div>x{quantity}</div>
            <div>{getProductCartPrice()}</div>
        </OrderProductItemContainer>
    );
}

export default OrderProductItem;