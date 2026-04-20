import { env } from './config/env.ts';
import debug from 'debug';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { customHeaders } from './middleware/customs.ts';
import { errorHandler } from './middleware/error-handler.ts';
import { HttpError } from './errors/http-error.ts';
import { HomeView } from './views/home.ts';
import { apiController } from './controllers/api.ts';
import type { Pool } from 'pg';

const log = debug(`${env.PROJECT_NAME}:app`);
log('Loading application...');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createApp = (pool: Pool) => {
    log('Starting Express app...');
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
    app.use(customHeaders(env.PROJECT_NAME));

    app.use(express.static('public'));

    app.get('/health', (_req, res) => {
        return res.json({
            status: 'ok',
            timestamp: new Date().toISOString(),
        });
    });

    app.get('/', async (_req, res) => {
        log('Received request to root endpoint');
        return res.send(await HomeView.render());
    });
   
    app.get('/api', apiController);

    app.use((_req, _res, next) => {
        log('Calling errorHandler for 404 error');
        const error = new HttpError(404, 'Not Found', 'Resource not found');
        next(error);

    });

    app.use(errorHandler);

    return app;
};
