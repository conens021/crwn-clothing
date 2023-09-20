import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ComponentLoading from "../../components/ComponentLoading/ComponentLoading.component";
import EmptyCart from "../../components/ShoppingCart/EmptyCart/EmptyCart.component";
import RemoveItemComponent from "../../components/ShoppingCart/RemoveItemIcon/RemoveItemIcon.component";
import ShoppingCartSum from "../../components/ShoppingCart/ShoppingCartSum/ShoppingCartSum";
import Button from "../../components/UI/Button/Button.component";
import NumberInput from "../../components/UI/NumberInput/NumberInput";
import Table from "../../components/UI/Table/Table.component";
import { PRODUCTS_IMAGES_FOLDER } from '../../helpers/pathRegistry'
import { useCartState } from "../../hooks/reduxStateHelper/useCartState";
import { selectCartItems, selectCartLoading, selectCartSum } from "../../store/cart/cartSelector";
import { CheckoutActionButtonContainer } from "./Checkout.page.styles";
import { round2Digits } from '../../utils/auth/Digits.utils'

const tableHeading = [
    { id: 1, title: 'Product' },
    { id: 2, title: 'Description' },
    { id: 3, title: 'Size' },
    { id: 4, title: 'Quantity' },
    { id: 5, title: 'Price' },
    { id: 6, title: 'Total price' },
    { id: 7, title: 'Remove' },
]

function CheckoutPage() {
    const { changeItemQuantity } = useCartState()
    const cartItems = useSelector(selectCartItems)
    const cartSum = useSelector(selectCartSum)
    const cartIsLoading = useSelector(selectCartLoading)

    const removeActionColumn = (item) => <RemoveItemComponent item={item} />

    const qntyChangeActionColumn = (item) => {

        return cartIsLoading ?
            <ComponentLoading />
            :
            <NumberInput
                value={item.quantity}
                minValue={0}
                style={{ width: '10rem' }}
                disabled={cartIsLoading}
                onInputChange={(ev) => qntyChangeHandler(ev, item)}
            />
    }

    const productImageColumn = (product) =>
        <img style={{ width: '150px', height: 'auto' }}
            src={`${PRODUCTS_IMAGES_FOLDER}/${product.contentFolder}/${product.imageSrc}`}
            alt={product.title} />

    //maping product to table
    //and adding new field for remove action
    const productsToTableData = () => {
        return cartItems.map(product => {
            const { title, quantity, price, size } = product
            const totalProductPrice = price * quantity
            const tableProduct = {
                title, size: size.title,
                quantity, price: `$${round2Digits(price)}`,
                totalPrice: `$${round2Digits(totalProductPrice)}`
            }
            return {
                productImage: productImageColumn(product),
                ...tableProduct,
                remove: removeActionColumn(product),
                quantity: qntyChangeActionColumn(product)
            }
        })
    }

    const qntyChangeHandler = (event, product) => {
        const newValue = event.target.value
        const { size } = product

        changeItemQuantity(product, parseInt(newValue), size)
    }

    const isCartEmpty = () => {
        return !cartItems || cartItems.length === 0
    }

    return (
        <>
            {
                isCartEmpty()
                    ?
                    <EmptyCart />
                    :
                    <>
                        <Table
                            style={{ marginBottom: '2rem' }}
                            tableHeading={tableHeading}
                            tableData={productsToTableData()} />
                        <ShoppingCartSum cartTotal={round2Digits(cartSum)} align='flex-end' />
                        <CheckoutActionButtonContainer>
                            <Link to='/payment'>
                                <Button variant="filled" size='medium' color='primary'>
                                    Go To Payment
                                </Button>
                            </Link>
                        </CheckoutActionButtonContainer>
                    </>
            }
        </>
    );
}

export default CheckoutPage;