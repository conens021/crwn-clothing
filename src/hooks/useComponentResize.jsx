import { useEffect } from "react"
import { useState } from "react"

let timer = null
let observer

export const useComponentResize = (ref) => {
    const [width, setWidth] = useState()

    useEffect(() => {
        observer = new ResizeObserver(outputsize)

        observer.observe(ref.current)
    }, [])

    const outputsize = () => {
        if (!ref)
            return

        if (timer)
            clearTimeout(timer)

        timer = setTimeout(() => {
            if (ref && ref.current) {
                const newWidthValue = ref.current.offsetWidth
                setWidth(newWidthValue)
            }
        }, 500);
    }

    const resizeCleanup = () => {
        if (observer)
            observer.disconnect()
    }


    return { width, resizeCleanup }
}