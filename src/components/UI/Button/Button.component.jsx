import { colors } from '../../../styles/colors'
import { sizes } from '../../../styles/sizes'
import { invertColor, shadeColor } from '../../../utils/colors'
import { BaseButton, ButtonFilled } from './Button'

function Button(
    {
        children, variant = 'base', size = 'medium',
        color = 'primary', mode = 'default',
        onClick = () => { }, ...otherProps
    }) {

    const buttonColor = colors[color][mode]
    const buttonSize = sizes.button.width[size]
    const buttonHeight = sizes.button.height[size]
    const fontSize = sizes.button.fontSize[size]
    const textColor = invertColor(buttonColor, 40)
    const hoverColor = shadeColor(buttonColor, -20)
    const disabledColor = '#c2c2c2'

    const BUTTON_TYPES = {
        base: 'base',
        filled: 'filled'
    }

    const getButton = (buttonType = BUTTON_TYPES.base) => (
        {
            [BUTTON_TYPES.base]: BaseButton,
            [BUTTON_TYPES.filled]: ButtonFilled
        }[buttonType]
    )

    const CustomButton = getButton(variant)

    return (
        <CustomButton
            disabledColor={disabledColor}
            onClick={onClick}
            color={buttonColor}
            hoverColor={hoverColor}
            textColor={textColor}
            variant={variant}
            width={buttonSize}
            height={buttonHeight}
            fontSize = {fontSize}
            {...otherProps}>
            {children}
        </CustomButton>
    );
}

export default Button;