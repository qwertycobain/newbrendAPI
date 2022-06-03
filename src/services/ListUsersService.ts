
import {getCustomRepository} from "typeorm"

import {UserRepositories} from "../repositories/UsersRepositories"
import {instanceToPlain} from "class-transformer"

class ListUserService{
	async execute(){
		const userRepositories = getCustomRepository(UserRepositories)
		const user = await userRepositories.find()

		return instanceToPlain(user)
	}
}

export {ListUserService}