import type { Pool } from "pg";


export const animalSeed = (pool: Pool) => {

    pool.query(`DROP TABLE IF EXISTS animals;`);

    pool.query(
        `CREATE TABLE IF NOT EXISTS animals (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            english_name VARCHAR(255) NOT NULL,
            sci_name VARCHAR(255) NOT NULL,
            diet TEXT,
            lifestyle VARCHAR(20) CHECK (lifestyle IN ('Diurno', 'Nocturno')),
            location TEXT,
            slogan TEXT,
            group_name VARCHAR(255),
            image TEXT
        );
    `);

    pool.query(`
        INSERT INTO animals (id, name, english_name, sci_name, diet, lifestyle, location, slogan, group_name, image)
        VALUES 
        ('1', 'Tigre', 'Tiger', 'Panthera tigris', 'Carnívoro', 'Nocturno', 'Asia', 'El rey de la selva', 'Felinos', 'https://example.com/tiger.jpg'),
        ('2', 'Elefante', 'Elephant', 'Loxodonta africana', 'Herbívoro', 'Diurno', 'África', 'El gigante gentil de la sabana', 'Proboscídeos', 'https://example.com/elephant.jpg'),
        ('3', 'Canguro', 'Kangaroo', 'Macropus rufus', 'Herbívoro', 'Diurno', 'Australia', 'El saltarín del outback australiano', 'Marsupiales', 'https://example.com/kangaroo.jpg'),
        ('4', 'Panda', 'Panda', 'Ailuropoda melanoleuca', 'Herbívoro', 'Diurno', 'China', 'El oso de bambú', 'Ursidae', 'https://example.com/panda.jpg'),
        ('5', 'Águila', 'Eagle', 'Aquila chrysaetos', 'Carnívoro', 'Diurno', 'Global', 'El rey de los cielos', 'Accipitridae', 'https://example.com/eagle.jpg');
    `);
}


