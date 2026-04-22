import debug from 'debug';
import { env } from '../../config/env.ts';
import { SqlError } from '../../errors/sql-error.ts';
import type {
    Animal,
    AnimalCreateDTO,
    AnimalUpdateDTO,
} from '../entities/animal.ts';
import type { PrismaClient } from '../../../generated/prisma/client.ts';
import { Pool } from 'pg';

const log = debug(`${env.PROJECT_NAME}:repo:animal`);
log('Loading animal repository...');

export class AnimalsRepo {
    private prisma: PrismaClient;
    pool: Pool; // Placeholder for the database connection pool
    constructor(prisma: PrismaClient) {
        log('Starting animal repository...');
        this.prisma = prisma;
        this.pool = new Pool(); // Placeholder for the database connection pool
    }

    async readAllAnimals() {
        log('Reading all animal from database...');
        // const { rows } = await this.pool.query<Animal>(`
        //     SELECT
        //         id,
        //         name,
        //         english_name AS "englishName",
        //         sci_name AS "sciName",
        //         diet,
        //         lifestyle,
        //         location,
        //         slogan,
        //         group_name AS "group",
        //         image
        //     FROM animal`);

        try {
            const result = await this.prisma.animal.findMany();
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    async readAnimalById(id: number): Promise<Animal> {
        log(`Reading animal with id ${id} from database...`);
        // const q = `
        //     SELECT
        //         id,
        //         name,
        //         english_name AS "englishName",
        //         sci_name AS "sciName",
        //         diet,
        //         lifestyle,
        //         location,
        //         slogan,
        //         group_name AS "group",
        //         image
        //     FROM animal
        //     WHERE id = $1`;

        // const { rows } = await this.pool.query<Animal>(q, [id]);

        const result = await this.prisma.animal.findUnique({
            where: {
                id: id,
            },
        });

        if (result === null) {
            console.error(`Animal with id ${id} not found`);
            throw new SqlError(`Animal with id ${id} not found`, {
                code: 'NOT_FOUND',
                sqlState: 'READ_FAILED',
                sqlMessage: `No animal found with id ${id}`,
            });
        }

        return result as unknown as Animal;
    }

    async createAnimal(animal: AnimalCreateDTO): Promise<Animal> {
        log(`Creating animal with name ${animal.name}...`);
        // const q = `
        //     INSERT INTO animal
        //         (name,
        //         english_name,
        //         sci_name,
        //         diet,
        //         lifestyle,
        //         location,
        //         slogan,
        //         group_name,
        //         image)
        //     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        //     RETURNING
        //         id,
        //         name,
        //         english_name AS "englishName",
        //         sci_name AS "sciName",
        //         diet,
        //         lifestyle,
        //         location,
        //         slogan,
        //         group_name AS "group",
        //         image`;
        // const { rows } = await this.pool.query<Animal>(q, [
        //     animal.name,
        //     animal.englishName,
        //     animal.sciName,
        //     animal.diet,
        //     animal.lifestyle,
        //     animal.location,
        //     animal.slogan,
        //     animal.group,
        //     animal.image,
        // ]);
        const result = await this.prisma.animal.create({
            data: animal,
        });
        return result as unknown as Animal;
    }

    async updateAnimal(
        id: number,
        animalData: AnimalUpdateDTO,
    ): Promise<Animal> {
        log(`Updating animal with id ${id}...`);
        // const q = `
        //     UPDATE animal
        //     SET name = $2,
        //         english_name = COALESCE($3, english_name),
        //         sci_name = COALESCE($4, sci_name),
        //         diet = COALESCE($5, diet),
        //         lifestyle = COALESCE($6, lifestyle),
        //         location = COALESCE($7, location),
        //         slogan = COALESCE($8, slogan),
        //         group_name = COALESCE($9, group_name),
        //         image = COALESCE($10, image)
        //     WHERE
        //         id = $1
        //     RETURNING
        //         id,
        //         name,
        //         english_name AS "englishName",
        //         sci_name AS "sciName",
        //         diet,
        //         lifestyle,
        //         location,
        //         slogan,
        //         group_name AS "group",
        //         image`;
        // const { rows } = await this.pool.query<Animal>(q, [
        //     id,
        //     animalData.name,
        //     animalData.englishName,
        //     animalData.sciName,
        //     animalData.diet,
        //     animalData.lifestyle,
        //     animalData.location,
        //     animalData.slogan,
        //     animalData.group,
        //     animalData.image,
        // ]);


        try {
                   const result = await this.prisma.animal.update({
            where: {
                id: id,
            },
            data: animalData as AnimalCreateDTO,
        }); 
        return result as unknown as Animal;
        } catch (error) {
            throw new SqlError(`Animal with id ${id} not found`, {
                code: 'NOT_FOUND',
                sqlState: 'UPDATE_FAILED',
                sqlMessage: `No animal found with id ${id}`,
                cause: error,
            });   
        }
    }

    async deleteAnimal(id: number): Promise<Animal> {
        log(`Deleting animal with id ${id}...`);
        // const q = `
        //     DELETE FROM animal
        //     WHERE id = $1
        //     RETURNING
        //         id,
        //         name,
        //         english_name AS "englishName",
        //         sci_name AS "sciName",
        //         diet,
        //         lifestyle,
        //         location,
        //         slogan,
        //         group_name AS "group",
        //         image`;
        // const { rows } = await this.pool.query<Animal>(q, [id]);

        try {
            const result = await this.prisma.animal.delete({
                where: {
                    id: id,
                },
            });
            return result as unknown as Animal;
        } catch (error) {
            throw new SqlError(`Animal with id ${id} not found`, {
                code: 'NOT_FOUND',
                sqlState: 'DELETE_FAILED',
                sqlMessage: `No animal found with id ${id}`,
                cause: error,
            });
        }
    }
}
