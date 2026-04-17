import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { UsersRepo } from './users.ts';
import { connectSQLiteDB } from '../config/db.ts';

describe('UsersRepo', () => {
    const sqliteDB = connectSQLiteDB();
    const usersRepo = new UsersRepo(sqliteDB);

    beforeEach(() => {
        // Preparamos DB
        sqliteDB.exec(`DROP TABLE IF EXISTS users`);
        sqliteDB.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            handleName TEXT,
            password TEXT NOT NULL,
            firstName TEXT NOT NULL,
            lastName TEXT NOT NULL,
            avatar TEXT
        )`);

        // Populación de datos en SQLite

        try {
            sqliteDB.exec(`
                INSERT INTO users (email, handleName, password, firstName, lastName, avatar)
                VALUES 
                ('john.doe@example.com', 'johndoe', 'password123', 'John', 'Doe', NULL),
                ('jane.smith@example.com', 'janesmith', 'password456', 'Jane', 'Smith', NULL),
                ('bob.johnson@example.com', 'bobjohnson', 'password789', 'Bob', 'Johnson', NULL)
            `);
        } catch (error) {
            console.error('Error populating SQLite tables:', error);
        }
    });

    afterEach(() => {
        // Aquí puedes limpiar tu base de datos de prueba si es necesario
    });

    describe('Read operations', () => {
        it('should read all users', () => {
            const users = usersRepo.readAllUsers();
            assert(Array.isArray(users), 'Expected an array of users');
            assert.strictEqual(users.length, 3, 'Expected to find 3 users');
        });

        it('should read a user by id', () => {
            const userId = 1; // Asegúrate de que este ID exista en tu base de datos de prueba
            const user = usersRepo.readUserById(userId);
            assert(user, 'Expected to find a user');
            assert.strictEqual(user.id, userId, 'Expected user ID to match');
        });

        it('should throw an error when reading a non-existent user', () => {
            const nonExistentUserId = 999; // Asegúrate de que este ID no exista en tu base de datos de prueba
            assert.throws(
                () => usersRepo.readUserById(nonExistentUserId),
                {
                    code: 'NOT_FOUND',
                },
                'Expected to throw an error for non-existent user',
            );
        });
    });

    describe('Write operations', () => {
        it('should create a new user', () => {
            const newUser = {
                email: 'test@example.com',
                handleName: 'testuser',
                password: 'password123',
                firstName: 'Test',
                lastName: 'User',
            };
            const createdUser = usersRepo.createUser(newUser);
            assert(createdUser, 'Expected to create a new user');
            assert.strictEqual(
                createdUser.id,
                4, // Asegúrate de que este ID sea correcto según tu base de datos de prueba
                'Expected user ID to be 4',
            );
            assert.strictEqual(
                createdUser.email,
                newUser.email,
                'Expected user email to match',
            );
        });

        it('should throw an error when creating a user with an existing email', () => {
            const existingUser = {
                email: 'john.doe@example.com', // Este email ya existe en la base de datos de prueba
                handleName: 'existinguser',
                password: 'password123',
                firstName: 'Existing',
                lastName: 'User',
            };
            assert.throws(
                () => usersRepo.createUser(existingUser),
                {
                    code: 'ERR_SQLITE_ERROR',
                },
                'Expected to throw an error for duplicate email',);
        });

    });
    describe('Update operations', () => {
        it('should update a user', () => {
            const userId = 1; // Asegúrate de que este ID exista en tu base de datos de prueba
            const updatedData = {
                firstName: 'Updated',
                lastName: 'User',
            };
            const updatedUser = usersRepo.updateUser(userId, updatedData);
            assert(updatedUser, 'Expected to update the user');
            assert.strictEqual(
                updatedUser.firstName,
                updatedData.firstName,
                'Expected first name to be updated',
            );
            assert.strictEqual(
                updatedUser.lastName,
                updatedData.lastName,
                'Expected last name to be updated',
            );
        });

        it('should throw an error when updating a non-existent user', () => {
            const nonExistentUserId = 999; // Asegúrate de que este ID no exista en tu base de datos de prueba
            const updatedData = {
                firstName: 'Updated',
                lastName: 'User',
            };
            assert.throws(
                () => usersRepo.updateUser(nonExistentUserId, updatedData),
                {
                    code: 'NOT_FOUND',
                },
                'Expected to throw an error for non-existent user',
            );
        });
    });
    describe('Delete operations', () => {
        it('should delete a user', () => {
            const userId = 1; // Asegúrate de que este ID exista en tu base de datos de prueba
            usersRepo.deleteUser(userId);
            assert.throws(
                () => usersRepo.readUserById(userId),
                {
                    code: 'NOT_FOUND',
                },
                'Expected user to be deleted',
            );
        });

        it('should throw an error when deleting a non-existent user', () => {
            const nonExistentUserId = 999; // Asegúrate de que este ID no exista en tu base de datos de prueba
            assert.throws(
                () => usersRepo.deleteUser(nonExistentUserId),
                {
                    code: 'NOT_FOUND',
                },
                'Expected to throw an error for non-existent user',
            );
        });
    });
});
