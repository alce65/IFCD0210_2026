import debug from 'debug';
import { env } from '../config/env.ts';
import type { DatabaseSync } from 'node:sqlite';
import type { User } from '../entities/user.ts';
import { SqlError } from '../errors/sql-error.ts';

const log = debug(`${env.PROJECT_NAME}:repo.users`);
log('Starting users repository...');

export class UsersRepo {
    db: DatabaseSync;
    constructor(db: DatabaseSync) {
        this.db = db;
    }

    readAllUsers() {
        const q = `SELECT * FROM users`;
        const stmt = this.db.prepare(q);
        const users = stmt.all();
        return users as unknown as User[];
    }

    readUserById(id: number) {
        const q = `SELECT * FROM users WHERE id = ?`;
        const stmt = this.db.prepare(q);
        const user = stmt.get(id);

        if (!user) {
            throw new SqlError(`User with id ${id} not found`, {
                code: 'NOT_FOUND',
                sqlState: 'SELECT_FAILED',
                sqlMessage: `No user found with id ${id}`,
            });
        }
        return user as unknown as User;
    }

    createUser(user: Omit<User, 'id'>) {
        const q = `
            INSERT INTO users (email, handleName, password, firstName, lastName, avatar)
            VALUES (?, ?, ?, ?, ?, ?) RETURNING *
        `;
        const stmt = this.db.prepare(q);
        const createdUser = stmt.get(
            user.email,
            user.handleName || null,
            user.password,
            user.firstName,
            user.lastName,
            user.avatar || null,
        );
        
        return createdUser as unknown as User;
    }

    updateUser(id: number, user: Partial<Omit<User, 'id'>>) {
        const q = `
            UPDATE users SET
                email = COALESCE(?, email),
                handleName = COALESCE(?, handleName),
                password = COALESCE(?, password),
                firstName = COALESCE(?, firstName),
                lastName = COALESCE(?, lastName),
                avatar = COALESCE(?, avatar)
            WHERE id = ? RETURNING *
        `;
        const stmt = this.db.prepare(q);
        const updatedUser = stmt.get(
            user.email || null,
            user.handleName || null,
            user.password || null,
            user.firstName || null,
            user.lastName || null,
            user.avatar || null,
            id,
        );

        if (!updatedUser) {
            throw new SqlError(`User with id ${id} not found`, {
                code: 'NOT_FOUND',
                sqlState: 'UPDATE_FAILED',
                sqlMessage: `No user found with id ${id}`,
            });
        }
        return updatedUser as unknown as User;
    }

    deleteUser(id: number) {
        const q = `DELETE FROM users WHERE id = ? RETURNING *`;
        const stmt = this.db.prepare(q);
        const deletedUser = stmt.get(id);

        if (!deletedUser) {
            throw new SqlError(`User with id ${id} not found`, {
                code: 'NOT_FOUND',
                sqlState: 'DELETE_FAILED',
                sqlMessage: `No user found with id ${id}`,
            });
        }
        return deletedUser as unknown as User;
    }   
}
