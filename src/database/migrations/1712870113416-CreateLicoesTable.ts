import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateLicoesTable1618974202387 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "licoes",
            columns: [
                { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                { name: "idioma_id", type: "int", isNullable: false },
                { name: "questao", type: "varchar(255)", isNullable: false },
                { name: "tipo", type: "int", isNullable: false },
                { name: "resposta", type: "text", isNullable: false }
            ],
            foreignKeys: [
                {
                    columnNames: ["idioma_id"],
                    referencedTableName: "idiomas",
                    referencedColumnNames: ["id"]
                }, 
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("licoes");
    }
}
