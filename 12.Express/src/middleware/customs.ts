import type { Request, Response, NextFunction } from 'express';
import debug from 'debug';

const log = debug('12-express:middleware');

log('Middlewares loaded');
export const customLogger = () => {
    return (req: Request, _res: Response, next: NextFunction) => {
        log(`[${req.method}] ${req.url}`);
        next();
        return;
    };
};

export const customHeaders = (brand: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        res.setHeader('X-Owner', brand);
        next();
        return;
    };
};
