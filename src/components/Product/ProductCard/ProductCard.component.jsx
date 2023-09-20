import Button from '../../UI/Button/Button.component';
import { PRODUCTS_IMAGES_FOLDER } from '../../../helpers/pathRegistry'
import {
    ProductCardButtonContainer,
    ProductCardContainer, ProductCardFooter,
    ProductCardImageContainer
} from './ProductCard.styles';
import AppImage from '../../UI/Image/Image.component';
import placholderImage from '../../../assets/img-placeholder-dark-vertical.jpg'
import { useCartState } from '../../../hooks/reduxStateHelper/useCartState';
import { useSelector } from 'react-redux';
import { selectCartLoading } from '../../../store/cart/cartSelector';
import ComponentLoading from '../../ComponentLoading/ComponentLoading.component';

function ProductCard({ product = {}, height = '420px', width = '100%' }) {
    const { addToCart, showCartHandler } = useCartState()
    const cartIsLoading = useSelector(selectCartLoading)
    const { id, title, price, imageSrc, contentFolder } = product
    const imageUrl = `${PRODUCTS_IMAGES_FOLDER}/${contentFolder}/${imageSrc}`

    const addToCartHandler = (event) => {
        event.preventDefault()
        event.stopPropagation()
        if (cartIsLoading)
            return
        addToCart(product)
        showCartHandler()
    }

    return (
        <ProductCardContainer to={`/shop/product/${id}`}>
            <ProductCardImageContainer height={height} width={width}>
                <AppImage
                    src={imageUrl}
                    placeholderSrc={placholderImage}
                />
                <ProductCardButtonContainer>
                    <Button
                        type='button'
                        color='primary'
                        size='medium'
                        variant='filled'
                        onClick={addToCartHandler}>
                        {
                            cartIsLoading ?
                                <ComponentLoading color='light' width='40px' height='40px' />
                                :
                                'ADD TO CART'
                        }
                    </Button>
                </ProductCardButtonContainer>
            </ProductCardImageContainer>
            <ProductCardFooter>
                <span className="title">{title}</span>
                <span className="price">${price}</span>
            </ProductCardFooter>
        </ProductCardContainer>

    );
}

export default ProductCard;