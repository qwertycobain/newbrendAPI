import {Request, Response, NextFunction} from "express"
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
  

  const {user_id} = request;
  console.log(user_id)
  const usersRepositories = getCustomRepository(UserRepositories)
  const user = await usersRepositories.findOne(user_id)
  const admin = user?.admin 


  // verifica se é admin 
  if(admin){
    return next();
    
  }
  return response.status(401).json({
    error: "User Unauthorized !!"
  })

}