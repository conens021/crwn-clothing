import { useSelector } from "react-redux";
import { selectOrderIntent } from "../../../store/order/orderIntent/orderIntentSelector";
import ComponentLoading from "../../ComponentLoading/ComponentLoading.component";
import HorizontalDivider from "../../UI/HorizontalDivider/HorizontalDivider.component";
import Typography from "../../UI/Typography/Typography.component";
import { CheckoutOrderPreviewContainer } from "./CheckoutOrderPreview.style";
import OrderProductsPreview from "./ProductsPreview/OrderProductsPreview.component";

function CheckoutOrderPreview() {
    const orderIntent = useSelector(selectOrderIntent)

    return (
        <CheckoutOrderPreviewContainer>
            <Typography component="h2" align="center">Order Preview</Typography>
            <HorizontalDivider />
            {
                orderIntent ?
                    <OrderProductsPreview order={orderIntent} />
                    :
                    <ComponentLoading />

            }
        </CheckoutOrderPreviewContainer>
    );
}

export default CheckoutOrderPreview;