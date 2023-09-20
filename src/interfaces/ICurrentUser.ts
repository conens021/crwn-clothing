export interface ICurrentUser{
    id : number,
    username : string,
    email : string,
    verifiedEmail : boolean
    expireAt : number,
    issuedAt : number,
    notActiveBefore : number,
}