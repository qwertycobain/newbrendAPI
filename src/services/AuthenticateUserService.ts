import {getCustomRepository} from "typeorm";
import {UserRepositories} from "../repositories/UsersRepositories"
import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"

interface IAuthenticateRequest{
  email: string;
  password: string;
}

class AuthenticateUserService{
  async execute({email, password}: IAuthenticateRequest){
    const userRepositories = getCustomRepository(UserRepositories)

    const user = await userRepositories.findOne({
      email
    });

    if(!user){
      throw new Error("Email/password Incorrect!")
    };
    
    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
      throw new Error("Email/ password Incorrect!!")
    }


    const token = sign({
      email: user.email},
      "1ab563eb0689b3819e3020de2f577217",{
        subject: user.id,
        expiresIn: "1d"
      }); 

      return token;



  }
  
}

export{AuthenticateUserService}