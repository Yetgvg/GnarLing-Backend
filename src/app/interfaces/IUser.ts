import { Idiomas } from "../entities/Idiomas";

interface IUser {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  idioma_nativo_id: Idiomas;
  idioma_aprendendo_id?: Idiomas;
  progresso?: any;
}

export default IUser;