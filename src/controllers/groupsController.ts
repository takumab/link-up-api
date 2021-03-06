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

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
      await db.query("UPDATE groups SET name=$2, description=$3 WHERE id=$1", [
        id,
        name,
        description,
      ]);
      res.json({ message: "Updated" });
    } catch (e) {
      res.json({ error: e.message });
    }
  }

  // TODO: Add confirm functionality
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await db.query("DELETE FROM groups WHERE id=$1", [id]);
      res.json({ message: `Deleted successfully!` });
    } catch (e) {
      res.json({ error: e.message });
    }
  }
}

export default GroupsController;
