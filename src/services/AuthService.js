import AuthClient from "../api-client/auth"
import AuthMapper from "../mappers/AuthMapper"

class AuthService {
    async loginEmail(clientUser) {
        const user = AuthMapper.clientAuthUserToApi(clientUser)

        const { data: jwtToken } = await AuthClient.emailLogin(user)

        return jwtToken
    }

    async loginSocial(access_token, provider) {
        const { data: jwtToken } = await AuthClient.socialLogin(access_token, provider)

        return jwtToken
    }
}


export default new AuthService()