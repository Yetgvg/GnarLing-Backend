import { Router } from "express";
import userRouter from "../controllers/UserController";
import licaoRouter from "../controllers/LicaoController";
import palavrasRouter from "../controllers/PalavrasController";

const routers = Router();

routers.use('/users', userRouter);
routers.use('/licao', licaoRouter)
routers.use('/palavras', palavrasRouter)

export default routers;