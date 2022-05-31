import {getCustomRepository} from "typeorm"
import { UserRepositories } from "../repositories/UsersRepositories";
import {hash } from "bcryptjs"


interface IUserRequest{
  name: string;
  email: string;
  password:string;
  admin?: boolean;
}

class CreateUserService{
  async execute({name, email, admin = false, password}:IUserRequest)
  {
    if(!email){
      throw new Error("Email Incorreto")
    }
    const usersRepository = getCustomRepository(UserRepositories);
    const userAlreadyExists = await usersRepository.findOne({
      email
    })
    if(userAlreadyExists ){
      throw new Error("User Already Exists")
    } 

    const purplehaze = await hash(password, 10)

    const user = usersRepository.create({
      name,
      email,
      password: purplehaze,
      admin,
    })
    await usersRepository.save(user);  
    return user;

  }
}

export {CreateUserService}
