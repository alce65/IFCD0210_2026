import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { connectDB } from '../../config/db-config.ts';
import { AnimalsRepo } from './animals.ts';
import type { SqlError } from '../../errors/sql-error.ts';
import { seedAnimalsTestDB } from '../entities/test-db-seed.ts';
import type { AnimalCreateDTO } from '../entities/animal.ts';


const animalMock: AnimalCreateDTO = {
    name: 'León',
    englishName: 'Lion',
    sciName: 'Panthera leo',
    diet: 'Carnívoro',
    lifestyle: 'Diurno',
    location: 'Africa',
    slogan: 'El rey de la selva',
    group: 'Mamíferos',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/800px-Lion_waiting_in_Namibia.jpg'
}

describe('AnimalsRepo', async () => {
    const pool = await connectDB();
    const animalsRepo = new AnimalsRepo(pool);

    beforeEach(async () => {
        await seedAnimalsTestDB(pool);
    });

    afterEach(async () => {
        // Cleanup code after each test, e.g., close the database connection
        await pool.query(`DROP TABLE IF EXISTS animals CASCADE`);
    });

    describe('Read operations', () => {
        it('should read all animals', async () => {
            // Test code for readAllAnimals method
            // Example:
            const animals = await animalsRepo.readAllAnimals();
            assert(Array.isArray(animals));
            assert.strictEqual(animals.length, 3);
        });

        it('should read a animal by id', async () => {
            // Test code for readAnimalById method
            // Example:
            const animal = await animalsRepo.readAnimalById(1);
            assert(animal);
            assert.strictEqual(animal.id, 1);
            assert.strictEqual(animal.name, 'Elefante');
        });

        it('should throw an error if animal not found', async () => {
            // Test code for readAnimalById method when animal is not found
            // Example:
            try {
                await animalsRepo.readAnimalById(10);
                assert.fail('Expected an error to be thrown');
            } catch (error) {
                assert.strictEqual((error as SqlError).code, 'NOT_FOUND');
                assert.strictEqual((error as SqlError).sqlState, 'READ_FAILED');
            }
        });
    });

    describe('Create operation', () => {
        it('should create a new animal', async () => {
            // Test code for createAnimal method
            // Example:
            const newAnimal = await animalsRepo.createAnimal(animalMock);
            assert(newAnimal);
            assert.strictEqual(newAnimal.id, 4);
            assert.strictEqual(newAnimal.name, 'León');
        });
    });

    describe('Update operation', () => {
        it('should update an existing animal', async () => {
            // Test code for updateAnimal method
            // Example:
            const updatedAnimal = await animalsRepo.updateAnimal(1, animalMock);
            assert(updatedAnimal);
            assert.strictEqual(updatedAnimal.id, 1);
            assert.strictEqual(updatedAnimal.name, 'León');
        });

        it('should throw an error if animal not found', async () => {
            // Test code for updateAnimal method when animal is not found
            // Example:
            try {
                await animalsRepo.updateAnimal(10, animalMock);
                assert.fail('Expected an error to be thrown');
            } catch (error) {
                assert.strictEqual((error as SqlError).code, 'NOT_FOUND');
                assert.strictEqual(
                    (error as SqlError).sqlState,
                    'UPDATE_FAILED',
                );
            }
        });
    });

    describe('Delete operation', () => {
        // TDD: Test Driven Development - First write the test, then implement the deleteAnimal method in AnimalsRepo
        it('should delete an existing animal', async () => {
            // Test code for deleteAnimal method
            // Example:
            const deletedAnimal = await animalsRepo.deleteAnimal(1);
            assert(deletedAnimal);
            assert.strictEqual(deletedAnimal.id, 1);
            assert.strictEqual(deletedAnimal.name, 'Elefante');

            // Verify that the animal has been deleted
            const animals = await animalsRepo.readAllAnimals();
            assert.strictEqual(animals.length, 2);
            assert.strictEqual(animals[0]?.id, 2);
        });

        it('should throw an error if animal not found', async () => {
            // Test code for deleteAnimal method when animal is not found
            // Example:
            try {
                await animalsRepo.deleteAnimal(10);
                assert.fail('Expected an error to be thrown');
            } catch (error) {
                assert.strictEqual((error as SqlError).code, 'NOT_FOUND');
                assert.strictEqual(
                    (error as SqlError).sqlState,
                    'DELETE_FAILED',
                );
            }
        });
    });
});
