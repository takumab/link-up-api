import { Request, Response } from "express";
const db = require("../db");

class GroupsController {
  async index(req: Request, res: Response) {
    try {
      const { rows } = await db.query("SELECT * FROM groups");
      res.json(rows[0]);
    } catch (e) {
      res.json({ error: e.message });
    }
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const { rows } = await db.query("SELECT groups.* FROM groups WHERE id=$1", [
      id,
    ]);
    res.json(rows[0]);
  }
}

export default GroupsController;
