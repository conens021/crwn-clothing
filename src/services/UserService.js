import UserClient from '../api-client/users'
import UsersMapper from '../mappers/usersMapper'

class UserService {
    async signUpEmail(clientSignUpUser) {
        const apiUser = UsersMapper.clientCreateUserToApi(clientSignUpUser)
        console.log(apiUser)

        const { data: jwtToken } = await UserClient.signUpEmail(apiUser)


        return jwtToken
    }

    async signUpSocial(access_token, provider) {
        const { data: jwtToken } = await UserClient.signupSocial(access_token, provider)

        return jwtToken
    }

    async getVerificationCode(jwt) {
        const { data } = await UserClient.getVerificationCode(jwt)

        return data
    }

    async getVerificationCodeByEmail(email) {
        const { data } = await UserClient.getVerificationCodeByEmail(email)

        return data
    }

    async verifyEmail(jwt, code) {
        const { data: newJwt } = await UserClient.verifyEmail(jwt, code)

        return newJwt
    }

}


export default new UserService()