import {getCustomRepository} from "typeorm"

import { TagsRepositories } from "../repositories/TagsRepositories"



class listTagsService{
  async execute(){
    const tagsRepositories = getCustomRepository(TagsRepositories)
    
    const tags = await tagsRepositories.find()
    
    return tags
  }

}

export{listTagsService}