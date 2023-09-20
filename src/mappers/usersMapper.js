class UsersMaper {

    clientCreateUserToApi(clientSignUpUser = {}) {
        const apiSignUpUser = {}

        console.log(clientSignUpUser)

        apiSignUpUser.username = clientSignUpUser.displayName
        apiSignUpUser.email = clientSignUpUser.email
        apiSignUpUser.password = clientSignUpUser.password
        apiSignUpUser.firstName = clientSignUpUser.firstName
        apiSignUpUser.lastName = clientSignUpUser.lastName
        apiSignUpUser.phoneNumber = clientSignUpUser.phoneNumber

        return apiSignUpUser
    }

    apiUserToClient(apiUser = {}) {
        const clientUser = {}

        clientUser.username = apiUser.username
        clientUser.email = apiUser.email
        clientUser.id = apiUser.id
        clientUser.createdAt = apiUser.createdAt
        clientUser.lastLoginAt = apiUser.lastLoginAt

        return clientUser
    }
}


export default new UsersMaper()