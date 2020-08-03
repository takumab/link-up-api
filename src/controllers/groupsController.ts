import { Request, Response } from "express";
const db = require("../db");

class GroupsController {
  async index(req: Request, res: Response) {
    const { rows } = await db.query("SELECT * FROM groups");
    res.json(rows[0]);
  }
}

export default GroupsController;
