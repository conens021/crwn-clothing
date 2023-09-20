import { AUTH_FORM_TYPE } from "../../constants/user";
import FacebookLogin2 from "../social-login/FacebookLogin2.compoenent";
import GoogleLogin from "../social-login/GoogleLogin";

function SignInSocial({ isLoading, loadingType, redirectPath }) {
    const socialIsDisabled = isLoading && loadingType === AUTH_FORM_TYPE.signInSocial

    return (
        <div style={{ display: 'flex', justifyContent: 'center', columnGap: '.5rem' }}>
            <GoogleLogin
                disabled={socialIsDisabled}
                redirectPath={redirectPath}
                action='login'
                text='Login With Google' />
            <FacebookLogin2
                disabled={socialIsDisabled}
                redirectPath={redirectPath}
                action='login'
                text='Login With Facebook' />
        </div>
    );
}

export default SignInSocial;