import { Request, Response } from "express";
import { Group } from "../models/group";
const db = require("../db");

class GroupsController {
  async index(req: Request, res: Response) {
    try {
      const { rows } = await db.query("SELECT * FROM groups");
      res.json(rows);
    } catch (e) {
      res.json({ error: e.message });
    }
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const { rows } = await db.query(
        "SELECT groups.* FROM groups WHERE id=$1",
        [id]
      );
      res.json(rows[0]);
    } catch (e) {
      res.json({ error: e.message });
    }
  }

  async create(req: Request, res: Response) {
    console.log(req.body);
    const group = new Group(req.body.name, req.body.description);
    try {
      await db.query(
        "INSERT INTO groups (name, description) VALUES ($1, $2) RETURNING id",
        [group.name, group.description]
      );
      res.json({ message: "New group created" });
    } catch (e) {
      res.json({ error: e.message });
    }
  }
}

export default GroupsController;
