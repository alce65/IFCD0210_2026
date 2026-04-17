import { join } from "node:path";
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


export const connectSQLiteDB = () => {
    try {
        const __dirname = import.meta.dirname;
        const path = join(__dirname, '../' , env.SQLITE_FILE);
        log("SQLite database connection in.", path);
        const db = new DatabaseSync(path);
        log("SQLite database connection established in.", path);
        return db;
    } catch (error) {
        log("Error connecting to the SQLite database:", error);
        throw error;
    }
}
