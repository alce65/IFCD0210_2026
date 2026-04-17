import { Pool } from "pg";
import { env } from "./env.ts";
import debug from 'debug';
const log = debug(`${env.PROJECT_NAME}:configDB`);

//    import { join, resolve } from 'node:path';
//     log('Running config db/file connection');
//     const __dirname = resolve('.');
//     const file = join(__dirname, 'src', 'data', 'db.json');


log("Loaded database connection...");

export const connectDB = async () => {
    const pool= new Pool({
        user: env.PGUSER,
        password: env.PGPASSWORD,
        host: env.PGHOST,
        port: env.PGPORT,
        database: env.PGDATABASE
    });
    try {
        const client = await pool.connect();
        log("Database connection established successfully.");
        log("Connected to database:", pool.options.database);
        client.release();
    } catch (error) {
        log("Error connecting to the database:", error);
        throw error;
    }
    return pool;
}
