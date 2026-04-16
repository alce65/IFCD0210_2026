import { Pool } from "pg";
import { DatabaseSync} from "node:sqlite"
import { env } from "./env.ts";
import debug from 'debug';
const log = debug(`${env.PROJECT_NAME}:configDB`);

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

export const connectSQLiteDB = async () => {
    try {
        const db = new DatabaseSync(env.SQLITE_FILE);
        log("SQLite database connection established successfully.");
        return db;
    } catch (error) {
        log("Error connecting to the SQLite database:", error);
        throw error;
    }
}
