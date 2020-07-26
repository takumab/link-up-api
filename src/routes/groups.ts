import {Router} from "express";
import GroupsController from "../controllers/groupsController";

const router: Router = Router();
const groupsController = new GroupsController();


router.get('/', groupsController.index)

export default router;
