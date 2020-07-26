import {Router, Request, Response} from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    // should route to GroupsController index/list method
    res.json({name: "Black Devs"});
});

export default router;
