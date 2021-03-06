import {
  testScreen,
  friendsController,
  messageController,
  profileController,
  mainController,
} from "../controllers/globalController";

import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", mainController);

globalRouter.get("/friends", friendsController);
globalRouter.get("/message", messageController);
globalRouter.get("/profile", profileController);

export default globalRouter;
