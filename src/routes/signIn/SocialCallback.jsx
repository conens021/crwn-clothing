import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParamsFromSocialCallback } from "../../hooks/useParamsFromSocialCallback";
import { signInUserSocialThunk, signUpUserSocialThunk } from "../../store/user/userThunk";
import { selectUserError } from "../../store/user/userSelector";

function SocialCallback() {
    const navigate = useNavigate()
    const { paramsValues } = useParamsFromSocialCallback(['access_token', 'state'])
    const [userLogedIn, setUserLogedIn] = useState(null)
    const [redirectedUrl, setredirectedUrl] = useState('/')
    const [action, setAction] = useState('')
    const [provider, setProvider] = useState(null)
    const [accessToken, setAccessToken] = useState(null)
    const [userChecked, setUserChecked] = useState(false)
    const userError = useSelector(selectUserError)

    const dispatch = useDispatch()

    useEffect(() => {
        if (paramsValues) {
            //authenticate to api via access_token from google
            //if auth resposne is success redirect to page where use came from from state param
            //if not push back to login page
            setParamsHandler()
        }
    }, [paramsValues])

    useEffect(() => {
        if (provider && accessToken && !userLogedIn && action) {
            if (action === 'login')
                handleLogin()
            else if (action == 'register') {
                handleSignUp()
            }

            setUserChecked(true)
        }
        if (userLogedIn) {
            redirectToOriginalPage()
        }
    }, [accessToken, userLogedIn, redirectedUrl, provider])


    useEffect(() => {
        if (userChecked)
            checkErrorsHandler()
    }, [userChecked])

    const checkErrorsHandler = () => {
        if (userError)
            navigate('/sign-in')
    }


    const handleLogin = async () => {
        dispatch(signInUserSocialThunk({ accessToken, provider, redirectedUrl }))
    }

    const handleSignUp = async () => {
        dispatch(signUpUserSocialThunk({ accessToken, provider, redirectedUrl }))
    }


    const redirectToOriginalPage = () => {
        navigate(redirectedUrl)
    }

    const setParamsHandler = () => {
        const accessToken = paramsValues['access_token']
        setAccessToken(accessToken)

        const socialState = paramsValues['state']
        handleSocialState(socialState)
    }

    const handleSocialState = (socialState) => {
        try {
            const formatedSocialStata = JSON.parse(socialState)

            if (formatedSocialStata) {
                const { redirectPath, provider, action } = formatedSocialStata

                setAction(action)
                setProvider(provider)
                setredirectedUrl(redirectPath)

                return
            }

        } catch (err) {
            alert('error')
        }
    }



    return (
        <h3>Loading... Please dont leave this page!</h3>
    );
}

export default SocialCallback;