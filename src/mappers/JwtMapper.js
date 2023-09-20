class JwtMapper {
    apiJwtUserToClient(apiJwtUser = {}) {
        const clientJwtUser = {}

        clientJwtUser.email = apiJwtUser.email
        clientJwtUser.expireAt = apiJwtUser.exp
        clientJwtUser.issuedAt = apiJwtUser.iat
        clientJwtUser.username = apiJwtUser.name
        clientJwtUser.id = parseInt(apiJwtUser.nameid)
        clientJwtUser.notActiveBefore = apiJwtUser.nbf
        clientJwtUser.verifiedEmail = apiJwtUser.verified.toLowerCase() === "true" || false

        return clientJwtUser
    }
}


export default new JwtMapper()