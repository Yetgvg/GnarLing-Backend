import { Palavras } from "../entities/Palavras";
import IPalavras from "../interfaces/IPalavras";
import { AppDataSource } from "../../database/data-source";

const palavrasRepository = AppDataSource.getRepository(Palavras);

class PalavrasRepository {
    async getPalavras(): Promise<Palavras[]> {
        return await palavrasRepository.find();
    }
}

export default new PalavrasRepository();