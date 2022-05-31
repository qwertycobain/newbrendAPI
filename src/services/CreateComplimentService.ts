import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UserRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest{
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService{

  async execute({tag_id, user_sender, user_receiver, message}:IComplimentRequest){
    const complimentRepositories = getCustomRepository(ComplimentsRepositories)
    const userRepositories = getCustomRepository(UserRepositories)
    
    if(user_sender === user_receiver){
      throw new Error("PURPLE HAZEE, ALL IN MY BRAIN")
    }

    const userReceiverExists = await userRepositories.findOne(user_receiver)

    if(!userReceiverExists){
      throw new Error("User Receiver does not Exists!")
    }


    const compliment = complimentRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })
    await complimentRepositories.save(compliment);
    return compliment;
  }
  
}


export{CreateComplimentService}