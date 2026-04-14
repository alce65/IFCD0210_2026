import debug from 'debug';
import { env } from '../config/env.ts';
import type { Genre } from '../entities/genre.ts';
import type { Pool } from 'pg';

const log = debug(`${env.PROJECT_NAME}:repo.genres`);
log('Starting genres repository...');

// CRUD

export const readAllGenres = async (pool: Pool) => {
    const { rows } = await pool.query<Genre>('SELECT genre_id AS id, name FROM genres');
    return rows;
}

