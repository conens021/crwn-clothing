import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export const useRedirectPath = (blacklist = []) => {
    const [redirectPath, setRedirectPath] = useState('')
    const location = useLocation()

    useEffect(() => {
        //for acccesing previus page path for redirect after user login
        //path state is coming from navigation
        const { state: pathState } = location

        if (!pathState) {
            setRedirectPath('/')
            return
        }

        const { redirectPath: redPath } = pathState

        const isExcluded = blacklist.some(item => item === redPath)

        if (isExcluded || redPath === '') {
            setRedirectPath('/')
            return
        }

        setRedirectPath(redPath)
    }, [location])


    return { redirectPath }
}