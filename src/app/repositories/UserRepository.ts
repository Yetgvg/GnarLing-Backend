import { Users } from "../entities/User";
import IUser from "../interfaces/IUser";
import { AppDataSource } from "../../database/data-source";

const userRepository = AppDataSource.getRepository(Users);

const getUsers = (): Promise<IUser[]> => {
    return userRepository.find();
}

const createUser = async (userData: IUser): Promise<IUser> => {
    return userRepository.save(userData);
};

const getUserByEmail = async (email: string): Promise<Users | null> => {
    try {
        const user = await userRepository.findOne({ where: { email } });
        return user;
    } catch (error) {
        console.error("Erro ao buscar usuário por email:", error);
        throw error;
    }
}

export default { getUsers, createUser, getUserByEmail };
