import {Request, Response, NextFunction} from "express"
import {verify} from "jsonwebtoken"
interface IPayload{
  sub:string;
}
export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

  const authtoken = request.headers.authorization;
  if(!authtoken){
    return response.status(401).end()
  }
  const [, token] = authtoken.split(" ")

try{
  const {sub} = verify(token, "1ab563eb0689b3819e3020de2f577217" )as IPayload;

  request.user_id = sub;
  return next();
}catch(err){
  console.log(err)
}



  

}