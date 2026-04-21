import type { Request, Response, NextFunction } from 'express';
import { env } from "../config/env.ts";
import debug from 'debug';
import z, { type ZodObject } from 'zod';
import { HttpError } from '../errors/http-error.ts';

const log = debug(`${env.PROJECT_NAME}:middleware:validations`);

log('Loading validation middleware...');

export const validateId = (schema: ZodObject = z.object({ id: z.coerce.number().int().positive() })) => {
    return (req: Request, res: Response, next: NextFunction) => {
        log('Validating ID...');
        const { id } = req.params;
        if (!id) {
            const error = new HttpError(400, 'Bad Request', 'Animal ID is required');
            next(error);
        }
        try {
            schema.parse({ id });
            next();
        } catch (error) {
            next(error);
        }
    };
}
    
export const validateBody = (schema: ZodObject) => {
    return (req: Request, res: Response, next: NextFunction) => {
        log('Validating request body...');
        try {
            const validationResult = schema.parse(req.body);
            // Actualiza el body de la solicitud con los datos validados
            // incluyendo posibles transformaciones realizadas por Zod
            req.body = validationResult;
            next();
        } catch (error) {
            next(error);
        }
    }
}

