import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1712869414813 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                { name: "nome", type: "varchar(255)", isNullable: false },
                { name: "email", type: "varchar(255)", isNullable: false, isUnique: true },
                { name: "senha", type: "varchar(255)", isNullable: false },
                { name: "idioma_nativo_id", type: "int", isNullable: false },
                { name: "idioma_aprendendo_id", type: "int", isNullable: false },
                { name: "progresso", type: "json", isNullable: true }
            ],
            foreignKeys: [
                {
                    columnNames: ["idioma_nativo_id"],
                    referencedTableName: "idiomas",
                    referencedColumnNames: ["id"]
                },
                {
                    columnNames: ["idioma_aprendendo_id"],
                    referencedTableName: "idiomas",
                    referencedColumnNames: ["id"]
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
