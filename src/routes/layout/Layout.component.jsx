import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/Footer/Footer.component';
import Navigation from '../../components/navigation/Navigation.component';
import { setUserCartMerged } from '../../store/cart/cartSlice';
import { selectCurrentUser } from '../../store/user/userSelector';
import { selectUserCartMerged } from '../../store/cart/cartSelector';
import { mergeUserCartThunk } from '../../store/cart/cartThunk';

const Layout = () => {
    const currentUser = useSelector(selectCurrentUser)
    const userCartMerged = useSelector(selectUserCartMerged)
    const dispatch = useDispatch()

    useEffect(() => {
        if (currentUser && !userCartMerged) {
            dispatch(mergeUserCartThunk())
        }
    }, [currentUser])
    
    return (
        <>
            <Navigation />
            <div className='container main'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout;