import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button.component";
import './EmptyCart.styles.scss'

function EmptyCart() {
    return (
        <div className='empty-cart'>
            <span>Your cart is empty</span>
            <Link to='/shop'>
                <Button color='primary' variant='filled'>Start Shopping</Button>
            </Link>
        </div>
    );
}

export default EmptyCart;