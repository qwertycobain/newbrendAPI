import {getCustomRepository} from "typeorm"

import { TagsRepositories } from "../repositories/TagsRepositories"

import {classToPlain, instanceToPlain} from "class-transformer"

class listTagsService{
  async execute(){
    const tagsRepositories = getCustomRepository(TagsRepositories)
    
    const tags = await tagsRepositories.find()
    
    
    return instanceToPlain(tags)
  }

}

export{listTagsService}