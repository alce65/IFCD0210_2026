import { env } from "./config/env.ts";
import debug from 'debug';
import express from "express";
import type { Pool } from "pg";


export const createApp = (pool: Pool) => {
    const log = debug(`${env.PROJECT_NAME}:app`);
    log("Starting Express app...");
    const app = express();

    log(pool.ending)

    return app;
}
