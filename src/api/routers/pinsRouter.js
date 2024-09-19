import { Router } from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware.js";
export const pinsRouter = Router();
pinsRouter.use(AuthMiddleware)
pinsRouter.get('/')
pinsRouter.post('/')
