import Router from "express-promise-router";
import GroupsController from "../controllers/groupsController";

const router = Router();
const groupsController = new GroupsController();

router.get("/", groupsController.index);
router.get("/:id", groupsController.show);

export default router;
