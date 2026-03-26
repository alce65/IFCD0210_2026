import express from 'express';
import debug from 'debug';
import morgan from 'morgan';
import cors from 'cors';
import { errorHandler } from './middleware/error-handler.ts';

import notesRouter from './router/notes.ts';

const log = debug('12-express:app');

export const app = express();
app.disable('x-powered-by');
log('Express app created');

// Middleware Utilities
app.use(morgan('dev'));
app.use(
    cors({
        origin: '*',
    }),
);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('./public'));

app.use('/api/notes', notesRouter);

app.use((_req, res) => {
    res.status(404);
    res.statusMessage = 'Not Found';
    res.json({
        message: 'Resource not found',
    });
    return;
});

app.use(errorHandler);
