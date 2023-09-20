import SignIn from "../../components/Signin/Signin.components";
import SignUp from "../../components/Signup/Signup.component";
import { useRedirectPath } from '../../hooks/useRedirectPath';


function AuthPage() {
    const excludedPaths = ['/sign-in']
    const { redirectPath } = useRedirectPath(excludedPaths)

    return (
        <div className="container">
            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                columnGap: '5rem', paddingTop: '2rem'
            }}>
                <SignIn redirectPath={redirectPath} />
                <SignUp redirectPath={redirectPath} />
            </div>
        </div>
    );
}

export default AuthPage;