import {Request,Response }from "express"
import { listTagsService } from "../services/ListTagService"

class ListTagsController{
  async handle(request:Request, response:Response){
    const list = new listTagsService()
    const tags = await list.execute()
    return response.json(tags)
    
  }

}


export {ListTagsController}