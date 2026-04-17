import { env } from "./config/env.ts";
import debug from 'debug';
import express from "express";
import morgan from "morgan";
import cors from "cors";
import type { Pool } from "pg";
import { animalRouter } from "./animals/routers/animal.router.ts";


export const createApp = (pool: Pool) => {
    const log = debug(`${env.PROJECT_NAME}:app`);
    log("Starting Express app...");
    const app = express();
    app.disable('x-powered-by');
    // Middleware Utilities
    app.use(morgan('dev'));
    app.use(
        cors({
            origin: '*',
        }),
    );
    app.use(express.json());
    app.use(express.urlencoded());

    app.use('/health', (_req, res) => {
        return res.json({
            status: 'ok',
            timestamp: new Date().toISOString(),
        });
    });

    app.use('/api/animals', animalRouter(pool));

    app.use((_req, res) => {
        res.status(404);
        res.statusMessage = 'Not Found';
        return res.json({
            message: 'Resource not found',
        });
    });
    
    return app;
}

