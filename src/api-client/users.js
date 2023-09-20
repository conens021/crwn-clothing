import { axiosService } from "../services/AxiosService"

class UsersClient {
    constructor() {
        this.userUrl = "/users"
    }

    async signUpEmail(apiUser) {
        const res = await axiosService.post(`${this.userUrl}`, apiUser)

        return res
    }

    async signupSocial(access_token, provider) {
        const res = await axiosService.post(`${this.userUrl}/social`, {
            provider: provider,
            idToken: access_token
        })

        return res
    }

    async getVerificationCode(jwt) {
        const res = await axiosService.get(`${this.userUrl}/email-verification-code`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        return res
    }

    async getVerificationCodeByEmail(email) {
        const res = await axiosService.get(`${this.userUrl}/email-verification-code/${email}`)

        return res
    }

    async verifyEmail(jwt, code) {
        const res = await axiosService.post(`${this.userUrl}/verify-email`, { code }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`
            }
        })

        return res
    }
}

export default new UsersClient()