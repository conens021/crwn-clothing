import React from "react";
import HorizontalDivider from "../../../UI/HorizontalDivider/HorizontalDivider.component";
import OrderProductItem from "./OrderProductItem/OrderProductItem.component";
import { OrderProductsPreviewContainer } from "./OrderProductsPreview.styles";

function OrderProductsPreview({ order }) {
    const { products } = order

    return (
        <React.Fragment>
            <OrderProductsPreviewContainer>
                {
                    products
                        ?
                        products.map(product => (
                            <React.Fragment>
                                <OrderProductItem product={product} />
                                <HorizontalDivider />
                            </React.Fragment>
                        ))
                        :
                        <div>loading...</div>
                }
            </OrderProductsPreviewContainer>
        </React.Fragment>
    );
}

export default OrderProductsPreview;