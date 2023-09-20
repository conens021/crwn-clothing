/* import { ReactComponent as TrashIcon } from '../../../assets/trash-icon.svg' */
import './RemoveItemIcon.styles.scss'
import { useCartState } from "../../../hooks/reduxStateHelper/useCartState";


function RemoveItemComponent({ item }) {
    const { size } = item
    const { removeFromCart } = useCartState()

    const removeFromCartHandler = (event) => {
        event.preventDefault()
        event.stopPropagation()

        removeFromCart(item, size)
    }

    return (
        <div>Icon</div>
       /*  <TrashIcon className='trash-icon' onClick={removeFromCartHandler} /> */
    );
}

export default RemoveItemComponent;