import { useSelector } from 'react-redux';
import { USER_ERROR_TYPES } from '../../constants/user';
import { useRedirectPath } from '../../hooks/useRedirectPath';
import { selectUserError, selectUserLoading } from '../../store/user/userSelector';
import ComponentTitle from '../UI/ComponentTitle/Component-title.components';
import FormError from '../UI/FormError/FormError.component';
import SignInForm from './SigninForm/Sign-in-form.component';
import SignInSocial from './SignInSocial.component';

function SignIn({ redirectPath = '/' }) {
    const signInError = useSelector(selectUserError)
    const { msg: signInErrorMsg, type: signInErrorType } = signInError
    const loading = useSelector(selectUserLoading)
    const { isLoading, type: loadingType } = loading
   
    return (
        <div>
            <ComponentTitle
                title='I already have an account'
                subtitle='Sign in with email and passwowrd' />
            <SignInForm
                errorMsg={signInErrorMsg}
                errorType={signInErrorType}
                redirectPath={redirectPath}
                isLoading={isLoading}
                loadingType={loadingType} />
            <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <p >Or login with social</p>
            </div>
            <div style={{ marginBottom: '1rem' }}>
                {(signInErrorMsg && signInErrorType === USER_ERROR_TYPES.signInSocial)
                    && <FormError errorMsg={signInErrorMsg} />}
            </div>
            <SignInSocial
                isLoading={isLoading}
                loadingType={loadingType}
                redirectPath={redirectPath} />
        </div>
    );
}

export default SignIn;