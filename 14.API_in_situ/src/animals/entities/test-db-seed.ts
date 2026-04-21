import type { Pool } from 'pg';
import { env } from '../../config/env.ts';
import debug from 'debug';
import { connectDB } from '../../config/db.ts';
import { fileURLToPath } from 'url';

const log = debug(`${env.PROJECT_NAME}:seed`);
log('Loading seed...');

export const seedAnimalsTestDB = async (pool: Pool) => {
    log('Seeding to database...');

    await pool.query(`DROP TABLE IF EXISTS animals;`);
    await pool.query(
        `CREATE TABLE IF NOT EXISTS animals (
            id SERIAL PRIMARY KEY,
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
    `,
    );

    await pool.query(`
        INSERT INTO animals (name, english_name, sci_name, diet, lifestyle, location, slogan, group_name, image)
        VALUES 
        ('Elefante', 'Elephant', 'Loxodonta africana', 'Herbívoro', 'Diurno', 'África', 'El gigante gentil de la sabana', 'Proboscídeos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/African_elephant_%28Loxodonta_africana%29_2.jpg/640px-African_elephant_%28Loxodonta_africana%29_2.jpg'),
        ('Tigre', 'Tiger', 'Panthera tigris', 'Carnívoro', 'Nocturno', 'Asia', 'La especie de gato más grande del mundo', 'Felinos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3.jpg/640px-Bengal_tiger_%28Panthera_tigris_tigris%29_female_3.jpg'),
        ('Águila', 'Eagle', 'Aquila chrysaetos', 'Carnívoro', 'Diurno', 'Global', 'El rey de los cielos', 'Accipitridae', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Aquila_chrysaetos_-_01.jpg/640px-Aquila_chrysaetos_-_01.jpg')
    `);
};

// Run seed if this file is executed directly
const currentFilePath = fileURLToPath(import.meta.url);
const processFilePath = process.argv[1];

if (currentFilePath === processFilePath) {
    seedAnimalsTestDB(await connectDB())
        .then(() => {
            log('Seed completed successfully.');
            process.exit(0);
        })
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });
}
