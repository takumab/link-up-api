import Router from "express-promise-router";
import EventsController from "../controllers/eventsController";

const router = Router();

const eventsController = new EventsController();
router.get("/", eventsController.index);
