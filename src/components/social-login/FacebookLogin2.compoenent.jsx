import socialOauth2 from '../../utils/auth/SocialOAuth2'
import Button from "../UI/Button/Button.component";

function FacebookLogin2({ redirectPath, action, text, disabled }) {
    const callbackState = {
        redirectPath,
        provider: 'FACEBOOK',
        action
    }

    var oauth2Endpoint = 'https://www.facebook.com/v14.0/dialog/oauth';

    var params = {
        'client_id': '576782413937822',
        'redirect_uri': 'http://localhost:3000/sign-in/callback/external',
        'response_type': 'token',
        'state': JSON.stringify(callbackState)
    };

    return (
        <Button
            disabled={disabled}
            variant='filled'
            color='info'
            size='large'
            onClick={() => socialOauth2(oauth2Endpoint, params)}
        >{text}</Button>
    );
}

export default FacebookLogin2;