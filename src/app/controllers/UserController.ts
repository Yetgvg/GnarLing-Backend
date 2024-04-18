import { Request, Response, Router } from "express";
import { Users } from "../entities/User";
import UserRepository from "../repositories/UserRepository";
import IUser from "../interfaces/IUser";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userRouter = Router();

// Rota para listar todos os usuários
userRouter.get('/Listar', async (_req: Request, res: Response): Promise<Response> => {
    try {
        const users = await UserRepository.getUsers();
        return res.status(200).json(users);
    } catch (error) {
        console.error("Erro ao obter usuários:", error);
        return res.status(500).json({ message: "Erro ao obter usuários" });
    }
});

// Rota para cadastrar um novo usuário
userRouter.post('/Cadastrar', async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nome, email, senha, idioma_nativo_id, idioma_aprendendo_id, progresso } = req.body;

        const hashedPassword = await bcrypt.hash(senha, 10);

        const newUser: IUser = {
            nome,
            email,
            senha: hashedPassword,
            idioma_nativo_id,
            idioma_aprendendo_id,
            progresso
        };
        const createdUser = await UserRepository.createUser(newUser);
        return res.status(201).json({ message: "Usuário cadastrado com sucesso!!!"});
    } catch (error) {
        return res.status(500).json({ message: "Erro ao cadastrar usuário" });
    }
});

userRouter.post('/login', async (req: Request, res: Response): Promise<Response> => {
    try {
        const { email, senha } = req.body;

        // Buscar usuário pelo email
        const user = await UserRepository.getUserByEmail(email);
        console.log(user)

        if (!user) {
            return res.status(401).json({ message: "Credenciais inválidas" });
        }

        // Verificar a senha
        const senhaValida = await bcrypt.compare(senha, user.senha);

        if (!senhaValida) {
            return res.status(401).json({ message: "Credenciais inválidas" });
        }

        // Gerar token de autenticação
        // const token = jwt.sign({ id: user.id, email: user.email, nome: user.nome }, 'segredo', { expiresIn: '1h' });

        const token = { id: user.id, email: user.email, nome: user.nome, Teste: user.idioma_aprendendo_id };

        return res.status(200).json({ token });
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        return res.status(500).json({ message: "Erro ao fazer login" });
    }
});

export default userRouter;