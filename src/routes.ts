import Router from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import {CreateTagController} from "./controllers/CreateTagController"
import {ensureAdmin} from "./middlewares/ensureAdmin"
import {AuthenticateUserController} from "./controllers/AuthenticateUserController"
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import {ListUserReceiveComplimentsController} from "./controllers/ListUserReceiveComplimentsController"
import { ListTagsController} from "./controllers/ListTagsController";
import {ListUserSendComplimentsController} from "./controllers/ListUserSendComplimentsController"

import { ListUserController } from "./controllers/ListUserController";
const router = Router()
const listTagsController = new ListTagsController() 
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const createUserController = new CreateUserController();
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const complimentController = new CreateComplimentController()
const listusercontroller = new ListUserController()

router.post('/users', createUserController.handle)
router.post('/tags',ensureAuthenticated,ensureAdmin, createTagController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/compliments',ensureAuthenticated,complimentController.handle)
router.get("/list", ensureAuthenticated, listUserReceiveComplimentsController .handle)
router.get("/listcompliments",ensureAuthenticated ,listUserSendComplimentsController.handle)

router.get("/users", ensureAuthenticated      ,listusercontroller.handle)

router.get("/tags", ensureAuthenticated, listTagsController.handle )
export {router}
