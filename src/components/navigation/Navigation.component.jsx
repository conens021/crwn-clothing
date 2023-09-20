import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import { selectCurrentUser } from '../../store/user/userSelector'
import { logoutUser } from '../../store/user/userSlice'
import { NavigationContainer, NavigationLinks, NavigationLogo } from './NavigationContainer/NavigationContainer'
import { emptyCart, setCartItems, setUserCartMerged } from '../../store/cart/cartSlice'
import { selectCartLoading } from '../../store/cart/cartSelector'
import ShoppingCart from '../ShoppingCart/ShoppingCart/ShoppingCart'
import { resetOrderIntent } from '../../store/order/orderIntent/orderIntentSlice'

function Navigation() {
    const location = useLocation()
    const { pathname: redirectPage } = location
    const currentUser = useSelector(selectCurrentUser)
    const cartIsLoading = useSelector(selectCartLoading)
    const dispatch = useDispatch()

    const signOutHandler = (event) => {
        event.preventDefault()

        dispatch(logoutUser())
        dispatch(emptyCart())
        dispatch(resetOrderIntent())
        dispatch(setUserCartMerged(false))
    }

    return (
        <div className='container'>
            <NavigationContainer>
                <Link to='/'>
                    <NavigationLogo />
                </Link>
                <NavigationLinks>
                    <Link to='/shop'>
                        <li>SHOP</li>
                    </Link>
                    {
                        currentUser
                            ?
                            <>
                                <Link to='/user-profile'>
                                    <li>{currentUser.username}</li>
                                </Link>
                                <Link to='/sign-out' onClick={signOutHandler}>
                                    <li>Sign Out</li>
                                </Link>
                            </>
                            :
                            <Link to='/sign-in' state={{ redirectPath: redirectPage }}>
                                <li>SIGN IN</li>
                            </Link>
                    }
                    <li>
                        <ShoppingCart />
                    </li>
                </NavigationLinks>
            </NavigationContainer>
        </div>
    );
}

export default Navigation;