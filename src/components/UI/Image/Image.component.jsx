import React from "react";
import { useState, useEffect } from "react";
import useIsMounted from "../../../hooks/useIsMounted";

const AppImage = ({ placeholderSrc, src, ...props }) => {
    const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
    const isMounted = useIsMounted()

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            if (isMounted.current)
                setImgSrc(src);
        };
    }, [src]);

    return (
        <img
            {...{ src: imgSrc, ...props }}
            alt={props.alt || ""}
        />
    );
};

export default AppImage