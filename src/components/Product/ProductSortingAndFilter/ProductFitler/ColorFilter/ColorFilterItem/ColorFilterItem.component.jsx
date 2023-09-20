import { useEffect } from "react";
import { useState } from "react";
import { ColorFilterItemContainer, ColorFilterTitle, ColorPreviewContainer } from "../ColorFilter.styles";

function ColorFilterItem({ initalActive,color, addColor = () => { }, removeColor = () => { } }) {
    const { id, title, value } = color
    const [active, setActive] = useState(initalActive)

    useEffect(() => {
        if (active)
            addColor(color)
        else
            removeColor(color)
    }, [active])

    return (
        <ColorFilterItemContainer className="noselect" onClick={() => setActive(!active)}>
            <ColorPreviewContainer color={value} active={active} />
            <ColorFilterTitle active={active}>{title}</ColorFilterTitle>
        </ColorFilterItemContainer>
    );
}

export default ColorFilterItem;