class AuthMapper {
    clientAuthUserToApi(clientUser = {}) {
        const apiAuthUser = {}

        apiAuthUser.username = clientUser.email
        apiAuthUser.password = clientUser.password


        return apiAuthUser
    }
}


export default new AuthMapper()