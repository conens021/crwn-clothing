import socialOauth2 from '../../utils/auth/SocialOAuth2'
import Button from '../UI/Button/Button.component';

function GoogleLogin({ text, redirectPath, action, disabled }) {
    const callbackState = {
        redirectPath,
        provider: 'GOOGLE',
        action
    }

    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    var params = {
        'client_id': '791271095381-98csfhjd5f34gp9c53et3s1s58p7q4bp.apps.googleusercontent.com',
        'redirect_uri': 'http://localhost:3000/sign-in/callback/external',
        'response_type': 'token',
        'scope': 'openid profile email',
        'include_granted_scopes': 'true',
        'state': JSON.stringify(callbackState),
        'flowName': 'flowName=GeneralOAuthFlow'
    };

    return (
        <Button
            variant='filled'
            color='secondary'
            size='large'
            disabled={disabled}
            onClick={() => socialOauth2(oauth2Endpoint, params)}
        >{text}</Button>
    );
}

export default GoogleLogin;