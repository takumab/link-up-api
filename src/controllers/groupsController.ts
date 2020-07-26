import {Response, Request} from "express";

class GroupsController {
    index(req: Request, res: Response) {
        res.json({name: "Black Devs"});
    }
}

export default GroupsController;
