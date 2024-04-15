import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePalavrasTable1712877705695 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "palavras",
            columns: [
                { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                { name: "palavra", type: "varchar(255)", isNullable: false }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("palavras");
    }

}
