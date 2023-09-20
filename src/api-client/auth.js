import { axiosService } from "../services/AxiosService"

class AuthClient {
    constructor() {
        this.authUrl = "/auth"
    }

    async emailLogin(apiAuthUser) {
        const res = await axiosService.post(`${this.authUrl}`, apiAuthUser)

        return res
    }

    async socialLogin(access_token, provider) {
        const res = await axiosService.post(`${this.authUrl}/social`, {
            provider: provider,
            idToken: access_token
        })

        return res
    }
}

export default new AuthClient()

