import type { Request, Response, NextFunction } from 'express';
import debug from 'debug';

const log = debug('11-express:middleware');

log('Middlewares loaded');
export const customLogger = () => {
    return (req: Request, _res: Response, next: NextFunction) => {
        log(`[${req.method}] ${req.url}`);
        next();
        return;
    };
};
