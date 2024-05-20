import { Request, Response, Router } from "express";
import PalavrasRepository from "../repositories/PalavrasRepository";
import IPalavras from "../interfaces/IPalavras";

const palavrasRouter = Router();

// Rota para listar todas as lições
palavrasRouter.get('/', async (req: Request, res: Response): Promise<Response> => {
    try {
        const palavras = await PalavrasRepository.getPalavras();
        return res.status(200).json(palavras);
    } catch (error) {
        console.error("Erro ao obter as Palavras:", error);
        return res.status(500).json({ message: "Erro ao obter as Palavras" });
    }
});

export default palavrasRouter;
