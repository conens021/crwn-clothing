import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

function usePageErrors() {
    const [errorMsg, setErrorMsg] = useState()
    const [errorCode, setErrorCode] = useState()
    const location = useLocation()

    useEffect(() => {
        //for acccesing previus page path for redirect after user login
        //path state is coming from navigation
        const { state: pathState } = location
        const errorMsg = pathState.errorMsg


        const code = errorMsg ? errorMsg.code : null
        const msg = errorMsg ? errorMsg.message : null

        setErrorCode(code)
        setErrorMsg(msg)
    }, [])


    const removeErrorMsg = () => {
        location.state.errorMsg = {}

        setErrorCode()
        setErrorMsg()
    }

    return { errorMsg, errorCode,removeErrorMsg }
}

export default usePageErrors;