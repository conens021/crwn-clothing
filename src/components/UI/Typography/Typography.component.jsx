import { fonts } from "../../../styles/fonts";
import { TypographyContainer } from "./Typographi.styles";

function Typography({ children, component = 'p', align = 'left' }) {
    const { fontSize, color, fontWeight, fontStyle, marginBottom, componentName }
        = fonts[component]

    return (
        <TypographyContainer
            as={componentName}
            fontSize={fontSize}
            color={color}
            fontWeight={fontWeight}
            fontStyle={fontStyle}
            marginBottom={marginBottom}
            align={align}
        >
            {children}
        </TypographyContainer>
    );
}

export default Typography;