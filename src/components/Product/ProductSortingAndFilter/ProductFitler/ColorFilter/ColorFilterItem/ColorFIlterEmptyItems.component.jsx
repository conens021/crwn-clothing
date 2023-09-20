import React from "react"
import Skeleton from "../../../../../UI/Skeleton/Skeleton.component"
import { ColorFilterItemContainer } from "../ColorFilter.styles"

export const ColorFilerEmptyItems = () => {
    return (
        <React.Fragment>
            {
                Array(6).fill().map((item, index) => (
                    <ColorFilterItemContainer key={index}>
                        <Skeleton type={'circle'} height={'35px'} width={'35px'} />
                        <Skeleton type="text" height={'16px'} width={'70px'} />
                    </ColorFilterItemContainer>
                ))
            }
        </React.Fragment>
    )
}
