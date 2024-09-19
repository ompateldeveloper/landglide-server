import { Router } from "express";
import { formatMiddleware } from "./middlewares/formatMiddlewares";
import { authRouter } from "./routers/authRouter.js";
import { pinsRouter } from "./routers/pinsRouter.js";
export const mainRouter = Router()
mainRouter.use(formatMiddleware)
mainRouter.use('/auth',authRouter)
mainRouter.use('/pins',pinsRouter)

