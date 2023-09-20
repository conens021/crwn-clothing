import { useEffect, useState } from "react"

export const useParamsFromSocialCallback = (params = []) => {
    const [paramsValues, setParamsValues] = useState(null)

    useEffect(() => {
        const newParamsValues = {}

        params.forEach(param => {
            newParamsValues[param] = getParamValue(param)
        })

        setParamsValues(newParamsValues)
    }, [])


    const getParamValue = (param) => {
        const url = window.location.href

        const formatedUrl = url.split('#')[1]
        const startOfAccesTokenString = formatedUrl.indexOf(param)
        const equalSignAfterToken = formatedUrl.indexOf('=', startOfAccesTokenString)
        const endOfTokenString = formatedUrl.indexOf('&', startOfAccesTokenString)

        //in case when param value is last in query string
        const paramValue = endOfTokenString === -1
            ?
            formatedUrl.substring(equalSignAfterToken + 1)
            : formatedUrl.substring(equalSignAfterToken + 1, endOfTokenString)


        const decodedParamValue = decodeURIComponent(paramValue)

        return decodedParamValue
    }


    return { paramsValues }
}