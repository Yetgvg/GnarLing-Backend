import { Router } from "express";
import userRouter from "../controllers/UserController";
import licaoRouter from "../controllers/LicaoController";

const routers = Router();

routers.use('/users', userRouter);
routers.use('/licao', licaoRouter)

export default routers;