import { round2Digits } from "../../../utils/auth/Digits.utils";
import { CartSum } from "../ShoppingCardDropdown/ShopingCardDropdown.styles";


function ShoppingCartSum({ cartTotal = 0.00, align = 'center' }) {
    return (
        <CartSum align={align}>
            <h4 >Cart total : </h4>
            <span >${round2Digits(cartTotal)}</span>
        </CartSum>
    );
}

export default ShoppingCartSum;