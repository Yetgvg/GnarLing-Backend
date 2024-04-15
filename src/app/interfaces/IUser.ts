import { Idioma } from "../entities/Idioma";

interface IUser {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  idioma_nativo_id: Idioma;
  idioma_aprendendo_id?: Idioma;
  progresso?: any;
}

export default IUser;