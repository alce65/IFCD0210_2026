import { describe, it, mock } from 'node:test';
import assert from 'node:assert/strict';
import { AnimalsController } from './animals.ts';
import type { AnimalsRepo } from '../repositories/animals.ts';
import type { Response, Request, NextFunction } from 'express';
import type { Animal } from '../entities/animal.ts';

describe('Animals Controller', () => {
    const animalList = [{ id: 1, name: 'León' }] as unknown as Animal[];


    const createExpressContext = () => {
        const json = mock.fn();
        const res = { json } as unknown as Response;
        const nextMock = mock.fn<(error?: unknown) => void>();
        const next = nextMock as NextFunction;
        return { json, next, nextMock, res };
    };

    it('should read all animals', async () => {
        const { json, next, nextMock, res } =
            createExpressContext();

        const readAllAnimals = mock.fn(async () => animalList);
        const repo = { readAllAnimals } as unknown as AnimalsRepo;
        const controller = new AnimalsController(repo);
        await controller.getAllAnimals({} as Request, res, next);

        assert.strictEqual(readAllAnimals.mock.calls.length, 1);
        assert.strictEqual(json.mock.calls.length, 1);
        assert.deepStrictEqual(json.mock.calls[0]?.arguments, [animalList]);
        assert.strictEqual(nextMock.mock.calls.length, 0);
    });

    it('should handle errors when reading all animals', async () => {
        const { json, next, nextMock, res } =
            createExpressContext();

        const error = new Error('Database error');
        const readAllAnimals = mock.fn(async () => { throw error; });
        const repo = { readAllAnimals } as unknown as AnimalsRepo;
        const controller = new AnimalsController(repo);
        await controller.getAllAnimals({} as Request, res, next);

        assert.strictEqual(readAllAnimals.mock.calls.length, 1);
        assert.strictEqual(json.mock.calls.length, 0);
        assert.strictEqual(nextMock.mock.calls.length, 1);
        const calledWithError = nextMock.mock.calls[0]?.arguments[0];
        assert(calledWithError instanceof Error);
        assert.strictEqual(calledWithError.message, 'An error occurred while fetching animals');
        assert.strictEqual(calledWithError.cause, error);
    });

    it.todo('should create a new animal', () => {
        // Test code for creating a new animal
        // Example: 
        // const newAnimal = await animalsController.createAnimal(animalData);
        // assert(newAnimal);
        // assert.strictEqual(newAnimal.name, animalData.name);
    });

});
