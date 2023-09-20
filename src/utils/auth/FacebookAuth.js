export default function oauthSignIn(state = '') {
    // Facebook's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = 'https://www.facebook.com/v14.0/dialog/oauth';

    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);

    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {
        'client_id': '576782413937822',
        'redirect_uri': 'http://localhost:3000/sign-in/callback/external',
        'response_type': 'token',
        'state': state
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