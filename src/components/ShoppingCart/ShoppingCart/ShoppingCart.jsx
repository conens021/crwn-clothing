import ShopingCardDropdown from '../ShoppingCardDropdown/ShoppingCardDropdown';
import { colors } from '../../../styles/colors';
import { invertColor } from '../../../utils/colors';
import { ShopingCartContainer, ShopingCartIconContainer, ShoppingCartIconWrapper } from './ShopingCart.styles';
import { NotificationCircleContainer } from '../../UI/NotificationCircle/NotificationCircle.styles';
import { useSelector } from 'react-redux';
import {
    selectCartCount, selectCartItems,
    selectCartSum, selectDropdownVisible
} from '../../../store/cart/cartSelector';
import { useCartState } from '../../../hooks/reduxStateHelper/useCartState';

function ShoppingCart() {
    const textColor = invertColor(colors.primary.default)

    const { setCartDropdownVissible } = useCartState()

    const cartDropdownIsVisible = useSelector(selectDropdownVisible)
    const cartItems = useSelector(selectCartItems)
    const cartCount = useSelector(selectCartCount)
    const cartSum = useSelector(selectCartSum)

    const cartIconClickedHandler = (event) => {
        event.stopPropagation();
        
        setCartDropdownVissible(!cartDropdownIsVisible)
    }

    return (
        <ShopingCartContainer>
            <ShoppingCartIconWrapper onClick={cartIconClickedHandler}>
                <ShopingCartIconContainer
                />
                <NotificationCircleContainer
                    backgroundColor={colors.primary.default}
                    textColor={textColor}>
                    {cartCount}
                </NotificationCircleContainer>
            </ShoppingCartIconWrapper>
            <ShopingCardDropdown
                items={cartItems}
                cartCount={cartCount}
                cartSum={cartSum} />
        </ShopingCartContainer>
    );
}

export default ShoppingCart;