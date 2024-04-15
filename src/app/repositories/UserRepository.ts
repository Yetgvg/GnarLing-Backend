import { Users } from "../entities/User";
import IUser from "../interfaces/IUser";
import { AppDataSource } from "../../database/data-source";

const userRepository = AppDataSource.getRepository(Users);

const getUsers = (): Promise<IUser[]> => {
    return userRepository.find();
}

export default { getUsers };