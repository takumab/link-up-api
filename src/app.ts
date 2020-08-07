import express from "express";
import groupsRouter from "./routes/groups";
import bodyParser from "body-parser";

class App {
  public express: express.Application;
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
  }

  private routes(): void {
    this.express.use("/groups", groupsRouter);
  }
}

export default new App().express;
