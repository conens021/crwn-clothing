import React from "react";
import Skeleton from "../../../components/UI/Skeleton/Skeleton.component";
import { ProductSizeItemContainer } from "./ProductSizes.styles";

function EmptyProductSizes() {
    return (
        <React.Fragment>
            {
                Array(6).fill().map((item, index) => (
                    <ProductSizeItemContainer key={index}>
                        <Skeleton type={'text'} height={'38px'} width={'64px'} />
                    </ProductSizeItemContainer>
                ))
            }
        </React.Fragment>
    );
}

export default EmptyProductSizes;