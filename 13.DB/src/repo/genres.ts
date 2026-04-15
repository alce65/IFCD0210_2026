import debug from 'debug';
import { env } from '../config/env.ts';
import type { Genre } from '../entities/genre.ts';
import type { Pool } from 'pg';
import { SqlError } from '../errors/sql-error.ts';

const log = debug(`${env.PROJECT_NAME}:repo.genres`);
log('Starting genres repository...');

// CRUD

export class GenresRepo { 
    private pool: Pool;
    constructor(pool: Pool) {
        this.pool = pool;
    }
    
    async readAllGenres () {
        const { rows } = await this.pool.query<Genre>('SELECT genre_id AS id, name FROM genres');
        return rows as Genre[]; 
    }

    async readGenreById (id: number): Promise<Genre> {

        const q = `
            SELECT genre_id AS id, name 
            FROM genres 
            WHERE genre_id = $1`;

        const { rows } = await this.pool.query<Genre>(q, [id]);
        
        if (rows.length === 0) {
            throw new SqlError(`Genre with id ${id} not found`, {
                code: 'NOT_FOUND',
                sqlState: 'READ_FAILED',
                sqlMessage: `No genre found with id ${id}`,
            });
        }
        
        return rows[0] as Genre;
    }

    async createGenre (name: string) {
        const q = `
            INSERT INTO genres (name) 
            VALUES ($1) 
            RETURNING genre_id AS id, name`;
        const { rows } = await this.pool.query<Genre>(q, [name]);
        return rows[0];
    }

    async updateGenre (id: number, name: string) {
        const q = `
            UPDATE genres 
            SET name = $2 
            WHERE genre_id = $1 
            RETURNING genre_id AS id, name`;
        const { rows } = await this.pool.query<Genre>(q, [id, name]);

        if (rows.length === 0) {
            throw new SqlError(`Genre with id ${id} not found`, {
                code: 'NOT_FOUND',
                sqlState: 'UPDATE_FAILED',
                sqlMessage: `No genre found with id ${id}`,
            });
        }

        return rows[0] as Genre;
    }

    async deleteGenre (id: number) {
        const q = `
            DELETE FROM genres 
            WHERE genre_id = $1 
            RETURNING genre_id AS id, name`;
        const { rows } = await this.pool.query<Genre>(q, [id]);

        if (rows.length === 0) {
            throw new SqlError(`Genre with id ${id} not found`, {
                code: 'NOT_FOUND',
                sqlState: 'DELETE_FAILED',
                sqlMessage: `No genre found with id ${id}`,
            });
        }

        return rows[0] as Genre;
    }
}



