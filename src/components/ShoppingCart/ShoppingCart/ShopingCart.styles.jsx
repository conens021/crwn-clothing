import styled from 'styled-components'
/* import { ReactComponent as CartIcon } from '../../../assets/cart-icon.svg' */
import { NotificationCircleContainer } from '../../UI/NotificationCircle/NotificationCircle.styles'

export const ShopingCartContainer = styled.div`
  position : relative;
`
export const ShoppingCartIconWrapper = styled.div`
    position: relative;
    ${NotificationCircleContainer}{
        position: absolute;
        top: -5px;
        right: -10px;
    }
`


export const ShopingCartIconContainer = `
    width: 30px;
    height: auto;
    cursor: pointer;
`

export const CartItemsCounter = styled.div`
    position: absolute;
    top: -5px;
    right: -10px;
`