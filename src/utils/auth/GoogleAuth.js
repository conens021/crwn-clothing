export default function oauthSignIn(state = '') {
    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);

    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {
        'client_id': '791271095381-98csfhjd5f34gp9c53et3s1s58p7q4bp.apps.googleusercontent.com',
        'redirect_uri': 'http://localhost:3000/sign-in/callback/external',
        'response_type': 'token',
        'scope': 'openid profile email',
        'include_granted_scopes': 'true',
        'state': state,
        'flowName': 'flowName=GeneralOAuthFlow'
    };

    // Add form parameters as hidden input values.
    for (var p in params) {
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
}