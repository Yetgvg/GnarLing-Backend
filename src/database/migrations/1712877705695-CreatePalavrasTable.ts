import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePalavrasTable1712877705695 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "palavras",
            columns: [
                { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                { name: "palavra", type: "varchar(255)", isNullable: false },
                { name: "idioma_id", type: "int", isNullable: false }
            ],
            foreignKeys: [
                {
                    columnNames: ["idioma_id"],
                    referencedTableName: "idiomas",
                    referencedColumnNames: ["id"]
                }, 
            ]
        }));

        const palavrasIngles = [
            "hello", "world", "good", "morning", "afternoon", "evening", "night", "cat", "dog", "bird",
            "tree", "flower", "sky", "sun", "moon", "star", "water", "fire", "earth", "wind",
            "school", "book", "pen", "pencil", "desk", "chair", "computer", "phone", "tablet", "television",
            "car", "bus", "bike", "train", "plane", "boat", "ship", "rocket", "house", "home",
            "street", "road", "park", "garden", "beach", "mountain", "river", "lake", "forest", "jungle",
            "food", "drink", "fruit", "vegetable", "meat", "fish", "rice", "bread", "milk", "cheese",
            "orange", "apple", "banana", "strawberry", "tomato", "potato", "carrot", "lettuce", "onion", "garlic",
            "juice", "coffee", "tea", "water", "soda", "beer", "wine", "pizza", "pasta", "soup",
            "sandwich", "burger", "fries", "salad", "cake", "cookie", "chocolate", "ice cream", "candy", "snack","life"
            // Adicione mais palavras conforme necessário
        ];

        await queryRunner.query(
            `INSERT INTO palavras (palavra, idioma_id) VALUES ${palavrasIngles.map(palavra => `('${palavra}', 2)`).join(", ")}`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("palavras");
    }

}
