import type { Request, Response, NextFunction } from 'express';
import { env } from "../config/env.ts";
import debug from 'debug';
import { HttpError } from '../errors/http-error.ts';
import { ZodError } from 'zod';

const log = debug(`${env.PROJECT_NAME}:error-handler`);
log('Loading error handler...');

export const errorHandler = (
    error: Error,
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction,
) => {
    log('Handling error:', error?.message)
    res.statusCode = 500;
    res.statusMessage = 'Internal Server Error'

    if (error instanceof HttpError) {
        res.statusCode = error.status
        res.statusMessage = error.statusMessage
        res.send(error.message);
    } else if (error instanceof ZodError) {
        res.statusCode = 400 
        res.statusMessage = 'Bad Request'
        res.json(error.issues) 

    } else if (error instanceof Error) {
        res.send(error.message);
    } else {
        res.send(error);
    }
    return
};
