import { Pool } from "pg";
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
        await pool.connect();
        log("Database connection established successfully.");
    } catch (error) {
        log("Error connecting to the database:", error);
        throw error;
    }
    return pool;
}
