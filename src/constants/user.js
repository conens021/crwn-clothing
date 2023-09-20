export const USER_ERROR_TYPES = {
    signIn: 1,
    signInSocial: 2,
    signUp: 3,
    signUpSocial: 4,
    verifyEmail: 5,
    signInJwt : 6
}

export const AUTH_FORM_TYPE = {
    signInEmail: 'user/signinUser',
    signInSocial: 'user/signInUserSocial',
    signUpEmail: 'user/signUpUser',
    signUpSocial : 'user/signUpUserSocial',
    signInJwt : 'user/signInJwt',
    verifyEmail: 'user/verifyEmail',
}

export const VERIFICATION_EMAIL_STATUS = {
    loading: 1,
    success: 2,
    rejected: 3
}
