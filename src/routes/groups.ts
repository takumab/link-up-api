import Router from "express-promise-router";
import GroupsController from "../controllers/groupsController";

const router = Router();
const groupsController = new GroupsController();

router.get("/", groupsController.index);
router.get("/:id", groupsController.show);
router.post("/", groupsController.create);
router.put("/:id", groupsController.update);
router.delete("/:id", groupsController.delete);

export default router;
