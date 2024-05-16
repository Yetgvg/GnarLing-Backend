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

        const licoesPalavras = [
            { questao: "Say ___ to the world!", resposta: "hello" },
            { questao: "The ___ is shining bright today.", resposta: "sun" },
            { questao: "The moon and the ___ are shining in the sky.", resposta: "stars" },
            { questao: "The ___ is my favorite animal.", resposta: "cat" },
            { questao: "The ___ is man's best friend.", resposta: "dog" },
            { questao: "The ___ is chirping in the tree.", resposta: "bird" },
            { questao: "The ___ is growing tall in the forest.", resposta: "tree" },
            { questao: "The ___ is blooming in the garden.", resposta: "flower" },
            { questao: "The ___ is sparkling in the river.", resposta: "water" },
            { questao: "The ___ is crackling in the fireplace.", resposta: "fire" },
            { questao: "We live on planet ___ .", resposta: "earth" },
            { questao: "The ___ is blowing gently through the leaves.", resposta: "wind" },
            { questao: "We learn many things at ___ .", resposta: "school" },
            { questao: "I like to read a good ___ before bed.", resposta: "book" },
            { questao: "I write with a ___ on paper.", resposta: "pen" },
            { questao: "I sit on a ___ when I eat dinner.", resposta: "chair" },
            { questao: "I use my ___ to watch videos.", resposta: "computer" },
            { questao: "I talk to my friends on the ___ .", resposta: "phone" },
            { questao: "I sleep on my ___ at night.", resposta: "bed" },
            { questao: "I drive a ___ to work.", resposta: "car" },
            { questao: "I like to play in the ___ at the beach.", resposta: "sand" },
            { questao: "I eat ___ for breakfast.", resposta: "bread" },
            { questao: "I drink ___ with dinner.", resposta: "milk" },
            { questao: "I like to eat ___ with my pizza.", resposta: "salad" },
            { questao: "I enjoy a sweet ___ for dessert.", resposta: "cake" },
            { questao: "I like to eat a tasty ___ in the summer.", resposta: "ice cream" },
            { questao: "I like to eat a ___ when I'm hungry.", resposta: "snack" },
            { questao: "___ is full of surprises.", resposta: "life" }
        ];


        await Promise.all(licoesPalavras.map(async (licao) => {
            await queryRunner.query(
                `INSERT INTO licoes (idioma_id, questao, tipo, resposta) VALUES (2, "${licao.questao}", 1, "${licao.resposta}")`
            );
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("licoes");
    }
}
