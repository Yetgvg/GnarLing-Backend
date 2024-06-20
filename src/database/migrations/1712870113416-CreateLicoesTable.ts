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

        const licoesFrases2 = [
            { questao: "I am learning English.", resposta: "eu estou aprendendo inglês" },
            { questao: "She is reading a book.", resposta: "ela está lendo um livro" },
            { questao: "We are playing soccer.", resposta: "nós estamos jogando futebol" },
            { questao: "They are cooking dinner.", resposta: "eles estão preparando o jantar" },
            { questao: "He is watching TV.", resposta: "ele está assistindo TV" },
            { questao: "I am writing a letter.", resposta: "eu estou escrevendo uma carta" },
            { questao: "She is driving a car.", resposta: "ela está dirigindo um carro" },
            { questao: "We are listening to music.", resposta: "nós estamos ouvindo música" },
            { questao: "They are studying hard.", resposta: "eles estão estudando muito" },
            { questao: "He is swimming in the pool.", resposta: "ele está nadando na piscina" },
            { questao: "I am painting a picture.", resposta: "eu estou pintando um quadro" },
            { questao: "She is planting flowers.", resposta: "ela está plantando flores" },
            { questao: "We are building a house.", resposta: "nós estamos construindo uma casa" },
            { questao: "They are singing a song.", resposta: "eles estão cantando uma música" },
            { questao: "He is fixing the car.", resposta: "ele está consertando o carro" },
            { questao: "I am making a cake.", resposta: "eu estou fazendo um bolo" },
            { questao: "She is cleaning the room.", resposta: "ela está limpando o quarto" },
            { questao: "We are visiting our friends.", resposta: "nós estamos visitando nossos amigos" },
            { questao: "They are playing chess.", resposta: "eles estão jogando xadrez" },
            { questao: "He is fishing in the river.", resposta: "ele está pescando no rio" },
        ];

        await Promise.all(licoesFrases2.map(async (licao) => {
            await queryRunner.query(
                `INSERT INTO licoes (idioma_id, questao, tipo, resposta) VALUES (2, "${licao.questao}", 2, "${licao.resposta}")`
            );
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("licoes");
    }
}
