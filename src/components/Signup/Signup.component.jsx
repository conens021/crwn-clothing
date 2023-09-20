import { useSelector } from 'react-redux';
import { USER_ERROR_TYPES } from '../../constants/user';
import { useRedirectPath } from '../../hooks/useRedirectPath';
import { selectUserError } from '../../store/user/userSelector';
import FacebookLogin2 from '../social-login/FacebookLogin2.compoenent';
import GoogleLogin from '../social-login/GoogleLogin';
import ComponentTitle from '../UI/ComponentTitle/Component-title.components';
import FormError from '../UI/FormError/FormError.component';
import SignUpForm from './sign-up-form/Signup-form.component';

function SignUp({ redirectPath = '/' }) {
    const userError = useSelector(selectUserError)
    const { msg: signUpErrorMsg, type: errorType } = userError

    return (
        <div >
            <ComponentTitle
                title='I do not have a account'
                subtitle='Sign up with your email address' />
            <SignUpForm
                userErrorMsg={signUpErrorMsg}
                userErrorType={errorType}
                redirectPath={redirectPath} />
            <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <p >Or sign up with social</p>
            </div>
            <div style={{ marginBottom: '1rem' }}>
                {(signUpErrorMsg && errorType === USER_ERROR_TYPES.signUpSocial)
                    && <FormError errorMsg={signUpErrorMsg} />}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', columnGap: '.5rem' }}>
                <GoogleLogin
                    redirectPath={redirectPath}
                    action='register'
                    text='Register With Google' />
                <FacebookLogin2
                    redirectPath={redirectPath}
                    action='register'
                    text='Register With Facebook' />
            </div>
        </div>
    );
}

export default SignUp;