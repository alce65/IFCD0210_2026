import type { Pool } from 'pg';
import { env } from '../../config/env.ts';
import debug from 'debug';
import { connectDB } from '../../config/db.ts';
import { fileURLToPath } from 'node:url';

const log = debug(`${env.PROJECT_NAME}:seed`);
log('Loading seed...');

export const seedAnimalsDB = async (pool: Pool) => {
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
        ('Guepardo', 'Cheetah', 'Acinonyx jubatus', 'Carnívoro', 'Diurno', 'África', 'El mamífero terrestre más rápido del mundo', 'Felinos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cheetah_%28Acinonyx_jubatus%29_female_2.jpg/640px-Cheetah_%28Acinonyx_jubatus%29_female_2.jpg'),
        ('Elefante', 'Elephant', 'Loxodonta africana', 'Herbívoro', 'Diurno', 'África', 'El gigante gentil de la sabana', 'Proboscídeos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/African_elephant_%28Loxodonta_africana%29_2.jpg/640px-African_elephant_%28Loxodonta_africana%29_2.jpg'),
        ('Jirafa', 'Giraffe', 'Giraffa camelopardalis', 'Herbívoro', 'Diurno', 'África', 'El mamífero terrestre más alto del mundo', 'Rumiantes', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Giraffe_Mikumi_National_Park.jpg/640px-Giraffe_Mikumi_National_Park.jpg'),
        ('Tigre', 'Tiger', 'Panthera tigris', 'Carnívoro', 'Nocturno', 'Asia', 'La especie de gato más grande del mundo', 'Felinos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3.jpg/640px-Bengal_tiger_%28Panthera_tigris_tigris%29_female_3.jpg'),
        ('Canguro', 'Kangaroo', 'Macropus rufus', 'Herbívoro', 'Diurno', 'Australia', 'El saltarín del outback australiano', 'Marsupiales', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Kangaroo_Australia_01.jpg/640px-Kangaroo_Australia_01.jpg'),
        ('Panda', 'Panda', 'Ailuropoda melanoleuca', 'Herbívoro', 'Diurno', 'China', 'El oso de bambú', 'Ursidae', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/640px-Grosser_Panda.JPG'),
        ('Águila', 'Eagle', 'Aquila chrysaetos', 'Carnívoro', 'Diurno', 'Global', 'El rey de los cielos', 'Accipitridae', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Aquila_chrysaetos_-_01.jpg/640px-Aquila_chrysaetos_-_01.jpg'),
        ('León', 'Lion', 'Panthera leo', 'Carnívoro', 'Diurno', 'Africa', 'El rey de la selva', 'Mamíferos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/800px-Lion_waiting_in_Namibia.jpg'),
        ('Pingüino', 'Penguin', 'Spheniscidae', 'Carnívoro', 'Diurno', 'Antártida', 'El ave mejor vestida del mundo', 'Aves', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Emperor_Penguin_Manchot_empereur.jpg/640px-Emperor_Penguin_Manchot_empereur.jpg'),
        ('Oso Polar', 'Polar Bear', 'Ursus maritimus', 'Carnívoro', 'Diurno', 'Ártico', 'El carnívoro terrestre más grande del mundo', 'Mamíferos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/800px-Polar_Bear_-_Alaska_%28cropped%29.jpg'),
        ('Cebra', 'Zebra', 'Equus quagga', 'Herbívoro', 'Diurno', 'Africa', 'El animal más rayado del mundo', 'Mamíferos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Equus_quagga_burchellii_-_Etosha%2C_2014.jpg/640px-Equus_quagga_burchellii_-_Etosha%2C_2014.jpg')
    `);
};

// Run seed if this file is executed directly
const currentFilePath = fileURLToPath(import.meta.url);
const processFilePath = process.argv[1];

if (currentFilePath === processFilePath) {
    seedAnimalsDB(await connectDB())
        .then(() => {
            log('Seed completed successfully.');
            process.exit(0);
        })
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });
}
