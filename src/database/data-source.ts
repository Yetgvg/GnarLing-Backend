import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUsersTable1712869414813 } from "./migrations/1712869414813-CreateUsersTable"
import { CreateIdiomasTable1618974150295 } from "./migrations/1712870015931-CreateIdiomasTable"
import { CreateLicoesTable1618974202387 } from "./migrations/1712870113416-CreateLicoesTable"
import { CreatePalavrasTable1712877705695 } from "./migrations/1712877705695-CreatePalavrasTable"

import { Users } from "../app/entities/User"
import { Palavras } from "../app/entities/Palavras"
import { Idiomas } from "../app/entities/Idiomas"
import { Licoes } from "../app/entities/Licao"

const entities = [
    Users,
    Idiomas,
    Licoes,
    Palavras
]

const migrations = [
    CreateIdiomasTable1618974150295,
    CreateUsersTable1712869414813,
    CreateLicoesTable1618974202387,
    CreatePalavrasTable1712877705695
];

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "wmitra",
    database: "gnarling",
    synchronize: true,
    logging: false,
    entities: entities,
    migrations: migrations,
    subscribers: [],
})
