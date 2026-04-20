import debug from 'debug';
import { env } from '../../config/env.ts';
import type { Pool } from 'pg';
import { SqlError } from '../../errors/sql-error.ts';
import type { Animal, AnimalCreateDTO, AnimalUpdateDTO } from '../entities/animal.ts';

const log = debug(`${env.PROJECT_NAME}:repo:animals`);
log('Loading animals repository...');

export class AnimalsRepo { 
    private pool: Pool;
    constructor(pool: Pool) {
        log('Starting animals repository...');
        this.pool = pool;
    }
    
    async readAllAnimals () {
        log('Reading all animals from database...');
        const { rows } = await this.pool.query<Animal>(`
            SELECT 
                id, 
                name, 
                english_name AS "englishName", 
                sci_name AS "sciName", 
                diet, 
                lifestyle, 
                location, 
                slogan, 
                group_name AS "group", 
                image
            FROM animals`);
        return rows as Animal[]; 
    }

    async readAnimalById (id: number): Promise<Animal> {
        log(`Reading animal with id ${id} from database...`);
        const q = `
            SELECT 
                id, 
                name, 
                english_name AS "englishName", 
                sci_name AS "sciName", 
                diet, 
                lifestyle, 
                location, 
                slogan, 
                group_name AS "group", 
                image
            FROM animals 
            WHERE id = $1`;

        const { rows } = await this.pool.query<Animal>(q, [id]);
        
        if (rows.length === 0) {
            throw new SqlError(`Animal with id ${id} not found`, {
                code: 'NOT_FOUND',
                sqlState: 'READ_FAILED',
                sqlMessage: `No animal found with id ${id}`,
            });
        }
        
        return rows[0] as Animal;
    }

    async createAnimal (animal: AnimalCreateDTO): Promise<Animal> {
        log(`Creating animal with name ${animal.name}...`);
        const q = `
            INSERT INTO animals 
                (name, 
                english_name, 
                sci_name, 
                diet, 
                lifestyle, 
                location, 
                slogan, 
                group_name, 
                image) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
            RETURNING 
                id, 
                name, 
                english_name AS "englishName", 
                sci_name AS "sciName", 
                diet, 
                lifestyle, 
                location, 
                slogan, 
                group_name AS "group", 
                image`;
        const { rows } = await this.pool.query<Animal>(q, [
            animal.name,
            animal.englishName,
            animal.sciName,
            animal.diet,
            animal.lifestyle,
            animal.location,
            animal.slogan,
            animal.group,
            animal.image
        ]);
        return rows[0] as Animal;
    }
    
    async updateAnimal (id: number, animalData: AnimalUpdateDTO): Promise<Animal> {
        log(`Updating animal with id ${id}...`);
        const q = `
            UPDATE animals 
            SET name = COALESCE($2, name), 
                english_name = COALESCE($3, english_name),
                sci_name = COALESCE($4, sci_name),
                diet = COALESCE($5, diet),
                lifestyle = COALESCE($6, lifestyle),
                location = COALESCE($7, location),
                slogan = COALESCE($8, slogan),
                group_name = COALESCE($9, group_name),
                image = COALESCE($10, image)
            WHERE 
                id = $1
            RETURNING 
                id, 
                name, 
                english_name AS "englishName", 
                sci_name AS "sciName", 
                diet, 
                lifestyle, 
                location, 
                slogan, 
                group_name AS "group", 
                image`;
        const { rows } = await this.pool.query<Animal>(q, [
            id,
            animalData.name,
            animalData.englishName,
            animalData.sciName,
            animalData.diet,
            animalData.lifestyle,
            animalData.location,
            animalData.slogan,
            animalData.group,
            animalData.image
        ]);

        if (rows.length === 0) {
            throw new SqlError(`Animal with id ${id} not found`, {
                code: 'NOT_FOUND',
                sqlState: 'UPDATE_FAILED',
                sqlMessage: `No animal found with id ${id}`,
            });
        }

        return rows[0] as Animal;
    }

    async deleteAnimal (id: number): Promise<Animal> {
        log(`Deleting animal with id ${id}...`);
        const q = `
            DELETE FROM animals 
            WHERE id = $1 
            RETURNING 
                id, 
                name, 
                english_name AS "englishName", 
                sci_name AS "sciName", 
                diet, 
                lifestyle, 
                location, 
                slogan, 
                group_name AS "group", 
                image`;
        const { rows } = await this.pool.query<Animal>(q, [id]);

        if (rows.length === 0) {
            throw new SqlError(`Animal with id ${id} not found`, {
                code: 'NOT_FOUND',
                sqlState: 'DELETE_FAILED',
                sqlMessage: `No animal found with id ${id}`,
            });
        }

        return rows[0] as Animal;
    }
}


