import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateIdiomasTable1618974150295 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "idiomas",
            columns: [
                { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                { name: "nome", type: "varchar(255)", isNullable: false },
                { name: "codigo", type: "varchar(2)", isNullable: false }
            ]
        }));

        // Adicionando dados padrão para Português
        await queryRunner.query(`INSERT INTO idiomas (nome, codigo) VALUES ('Português', 'pt')`);

        // Adicionando dados padrão para Inglês
        await queryRunner.query(`INSERT INTO idiomas (nome, codigo) VALUES ('Inglês', 'en')`);

        // Adicionando dados padrão para Chuchubana
        await queryRunner.query(`INSERT INTO idiomas (nome, codigo) VALUES ('Chuchubana', 'cc')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("idiomas");
    }
}
