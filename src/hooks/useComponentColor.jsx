import { useEffect, useState } from "react";

function useComponentColor(colorInput = 'primary.default') {
    const [color, setColor] = useState('primary')
    const [colorMode, setColorMode] = useState('default')

    useEffect(() => {
        let [mainColor, colorModeString] = colorInput.split('.')

        setColor(mainColor)

        colorModeString = !colorModeString ? 'default' : colorModeString

        setColorMode(colorModeString)
    }, [])


    return { color, colorMode }
}

export default useComponentColor;