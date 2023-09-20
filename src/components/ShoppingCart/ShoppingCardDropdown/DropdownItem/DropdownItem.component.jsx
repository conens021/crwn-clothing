import { Link } from 'react-router-dom'
import './DropdownItem.styles.scss'
import RemoveItemComponent from '../../RemoveItemIcon/RemoveItemIcon.component'
import { PRODUCTS_IMAGES_FOLDER } from '../../../../helpers/pathRegistry'

function DropdownItem({ item = {} }) {
    const { title, price, quantity, imageSrc, contentFolder, id, size } = item
    const imageUrl = `${PRODUCTS_IMAGES_FOLDER}/${contentFolder}/${imageSrc}`

    return (
        <Link to={`shop/product/${id}`} className="dropdown-cart-item">
            <img className='product-image' src={imageUrl} alt='' />
            <div className="product-info">
                <span className="title">{title}</span>
                <span className='title'>Size: {size.title}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
            <RemoveItemComponent item={item} />
        </Link>
    );
}

export default DropdownItem;