import express from "express";
import groupsRouter from "./routes/groups";

class App {
  public express: express.Application;
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {}

  private routes(): void {
    this.express.use("/groups", groupsRouter);
  }
}

export default new App().express;
