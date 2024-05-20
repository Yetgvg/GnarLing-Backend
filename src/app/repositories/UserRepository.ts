import { Users } from "../entities/User";
import IUser from "../interfaces/IUser";
import { AppDataSource } from "../../database/data-source";
import LicaoRepository from "./LicaoRepository";
import { Licoes } from "../entities/Licao";

const userRepository = AppDataSource.getRepository(Users);

const getUsers = (): Promise<IUser[]> => {
    return userRepository.find();
}

const createUser = async (userData: IUser): Promise<IUser> => {
    const user = await userRepository.save(userData);
    if (userData.idioma_aprendendo_id) {
        const lessons = await LicaoRepository.getLicoesByLanguageId(+userData.idioma_aprendendo_id);
        // console.log("Lições: ", lessons);
        const initialProgress = initializeProgress(lessons);
        // console.log("Progresso inicial: ", initialProgress);
        user.progresso = initialProgress;
        await userRepository.save(user);
    } else {
        console.error('idioma_aprendendo_id não está definido em userData.');
    }
    return user;
};

const getUserByEmail = async (email: string): Promise<Users | null> => {
    try {
        const user = await userRepository.findOne({
            where: { email },
            relations: ['idioma_nativo_id', 'idioma_aprendendo_id'] // Carregar os relacionamentos
        });
        return user;
    } catch (error) {
        console.error("Erro ao buscar usuário por email:", error);
        throw error;
    }
}

const updateUserProgress = async (userId: number, lessonId: number): Promise<boolean> => {
    try {
        // Buscar o usuário pelo ID
        const user = await userRepository.findOne({ where: { id: userId } });

        // Verificar se o usuário foi encontrado
        if (!user) {
            console.error('Usuário não encontrado');
            return false;
        }

        // Verificar se o usuário possui progresso
        if (!user.progresso) {
            console.error('Progresso do usuário não encontrado');
            return false;
        }

        // Verificar se a lição existe no progresso do usuário
        if (!(lessonId in user.progresso)) {
            console.error('Lição não encontrada no progresso do usuário');
            return false;
        }

        // Atualizar o campo completed da lição para true
        user.progresso[lessonId].completed = true;

        // Salvar as alterações no banco de dados
        await userRepository.save(user);

        return true;
    } catch (error) {
        console.error("Erro ao atualizar o progresso do usuário:", error);
        return false;
    }
}



function initializeProgress(lessons: Licoes[]): Record<number, { completed: boolean; score: number }> {
    const progress: Record<number, { completed: boolean; score: number }> = {};
    lessons.forEach(lesson => {
        progress[lesson.id] = { completed: false, score: 100 };
    });
    return progress;
}

export default { getUsers, createUser, getUserByEmail, updateUserProgress };
