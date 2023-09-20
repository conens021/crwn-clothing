import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';


export const Modal = ({ children, className = 'root-modal', el = 'div', isOpen = false, onModalCLose = () => { } }) => {
    const [container] = useState(() => {
        // This will be executed only on the initial render
        // https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
        return document.createElement(el);
    });

    useEffect(() => {
        container.classList.add(className)
        document.addEventListener('keydown', keyPressEventHandler)
        document.body.appendChild(container)
        return () => {
            document.body.removeChild(container)
        }
    }, [])

    const keyPressEventHandler = (event) => {
        const key = event.key
        if (key === 'Escape')
            onModalCLose()

    }


    return (
        isOpen && ReactDOM.createPortal(children, container)
    )
}