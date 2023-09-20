import jwt_decode from "jwt-decode";
import JwtMapper from "../mappers/JwtMapper";

class JwtService {
    async getUser(jwt) {
        try {
            const decoded = jwt_decode(jwt)
            const jwtClientUser = JwtMapper.apiJwtUserToClient(decoded)

            return { user: jwtClientUser, jwt }
        }
        catch (err) {

            return { user: null, jwt: null }
        }
    }
}


export default new JwtService()