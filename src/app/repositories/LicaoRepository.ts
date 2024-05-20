import { Licoes } from "../entities/Licao";
import ILicao from "../interfaces/ILicao";
import { AppDataSource } from "../../database/data-source";
import { Repository } from "typeorm";

const licaoRepository: Repository<Licoes> = AppDataSource.getRepository(Licoes);

class LicaoRepository {
  async createLicao(licaoData: ILicao): Promise<Licoes> {
    const licao = licaoRepository.create(licaoData);
    return await licaoRepository.save(licao);
  }

  async getLicoes(): Promise<Licoes[]> {
    return await licaoRepository.find();
  }

  async getLicaoById(id: number): Promise<Licoes | undefined> {
    const licao = await licaoRepository.findOne({ where: { id } });
    return licao || undefined;
  }

  async updateLicao(id: number, licaoData: ILicao): Promise<Licoes | null> {
    const licao = await licaoRepository.findOne({ where: { id } });
    if (!licao) return null;
    Object.assign(licao, licaoData);
    await licaoRepository.save(licao);
    return licao;
  }

  async deleteLicao(id: number): Promise<boolean> {
    const result = await licaoRepository.delete(id);
    return !!result.affected;
  }

  async getLicoesByLanguageId(idioma_id: number): Promise<Licoes[]> {
    return await licaoRepository.createQueryBuilder("licao")
      .innerJoin("licao.idioma", "idioma")
      .where("idioma.id = :idioma_id", { idioma_id })
      .getMany();
  }
}

export default new LicaoRepository();
