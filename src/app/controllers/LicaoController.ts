import { Request, Response, Router } from "express";
import LicaoRepository from "../repositories/LicaoRepository";
import ILicao from "../interfaces/ILicao";

const licaoRouter = Router();

// Rota para listar todas as lições
licaoRouter.get('/', async (req: Request, res: Response): Promise<Response> => {
    try {
        const licoes = await LicaoRepository.getLicoes();
        return res.status(200).json(licoes);
    } catch (error) {
        console.error("Erro ao obter lições:", error);
        return res.status(500).json({ message: "Erro ao obter lições" });
    }
});

export default licaoRouter;
