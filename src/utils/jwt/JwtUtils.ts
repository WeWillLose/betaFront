export interface IJwtUtils {
  parseJwt(JWT:string): IJwt | null
}
export interface IJwt{
  exp: number
  iat: number
  sub: string
}
export  class JwtUtils implements IJwtUtils{
  parseJwt(JWT:string): IJwt | null {
    try {
      return JSON.parse(atob(JWT.split('.')[1])) as IJwt
    } catch (e) {
      return null
    }
  }
  IsExpired(JWT:string):boolean{
    const jwt = this.parseJwt(JWT)
    if(jwt == null) return true
    return jwt?.exp  <= (new Date().getTime() + 1) / 1000;
  }
}
const jwtUtils = new JwtUtils()

export  default  jwtUtils


