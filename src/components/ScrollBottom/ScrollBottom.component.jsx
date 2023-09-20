import { useEffect } from "react";
import { useRef } from "react";
import { useIsInViewport } from "../../hooks/useIsInViewport";

function BottomCollision({ onCollision = () => { } }) {
    const bottomRef = useRef()

    const isIntersecting = useIsInViewport(bottomRef)

    useEffect(() => {
        if (isIntersecting) {
            onCollision()
        }
    }, [isIntersecting])

    return (
        <div ref={bottomRef}></div>
    );
}

export default BottomCollision;