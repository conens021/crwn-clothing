import React, { useState } from "react";
import Button from "../../components/UI/Button/Button.component";
import Skeleton from "../../components/UI/Skeleton/Skeleton.component";
import { sizes } from "../../styles/sizes";

function Testing() {
    const buttonWidthSmall = sizes.button.width.small
    const buttonHeightSmall = sizes.button.height.small
    const buttonWidthMedium = sizes.button.width.medium
    const buttonHeightMedium = sizes.button.height.medium
    const buttonWidthLarge = sizes.button.width.large
    const buttonHeightLarge = sizes.button.height.large


    return (
        <div style={{ display: 'flex', columnGap: "1rem", alignItems: 'center' }}>
            <Skeleton width={buttonWidthSmall} height={buttonHeightSmall} />
            <Button variant="filled" color="primary" size="small">Small</Button>
            <Skeleton width={buttonWidthMedium} height={buttonHeightMedium} />
            <Button variant="filled" color="primary" size="medium">Medium</Button>
            <Skeleton width={buttonWidthLarge} height={buttonHeightLarge} />
            <Button variant="filled" color="primary" size="large">Large</Button>
        </div>
    );
}

export default Testing;