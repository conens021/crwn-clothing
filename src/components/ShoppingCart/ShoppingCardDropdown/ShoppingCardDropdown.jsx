import { Link } from 'react-router-dom'
import Button from '../../UI/Button/Button.component'
import ShoppingCartSum from '../ShoppingCartSum/ShoppingCartSum';
import DropdownItem from './DropdownItem/DropdownItem.component';
import EmptyCart from '../EmptyCart/EmptyCart.component';
import { CartActionContainer, CartDropdownContainer, CartDropdownItems } from './ShopingCardDropdown.styles';
import { useSelector } from 'react-redux';
import { selectDropdownVisible } from '../../../store/cart/cartSelector';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useCartState } from '../../../hooks/reduxStateHelper/useCartState';
import React, { useEffect } from 'react';

function ShopingCardDropdown({ items = null, cartCount = 0, cartSum = 0.00 }) {
    const vissible = useSelector(selectDropdownVisible)
    const { setCartDropdownVissible } = useCartState()

    const outsideClickHandler = () => {
        if (vissible)
            setCartDropdownVissible(false)
    }

    const ref = useOutsideClick(outsideClickHandler)

    const isCartEmpty = () => {
        return !items || cartCount === 0
    }


    return (
        <React.Fragment>
            {
                vissible &&
                <CartDropdownContainer vissible={vissible} ref={ref}>
                    {isCartEmpty()
                        ? <EmptyCart />
                        :
                        <CartDropdownItems>
                            {items.map(item =>
                                <DropdownItem key={item.id} item={item} />)}
                        </CartDropdownItems>
                    }
                    {!isCartEmpty() &&
                        <>
                            <ShoppingCartSum cartTotal={cartSum} />
                            <CartActionContainer to='/checkout'>
                                <Button color='primary' size='large' variant='filled'>
                                    GO TO CHECKOUT
                                </Button>
                            </CartActionContainer>
                        </>
                    }
                </CartDropdownContainer>
            }
        </React.Fragment>
    );
}

export default ShopingCardDropdown;