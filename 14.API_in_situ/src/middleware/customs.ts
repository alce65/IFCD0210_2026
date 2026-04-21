import type { Request, Response, NextFunction } from 'express';
import { env } from "../config/env.ts";
import debug from 'debug';

const log = debug(`${env.PROJECT_NAME}:middleware`);
log("Loading middleware...");

export const customHeaders = (project: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        log(`Setting custom header for project: ${project}`);
        res.setHeader('X-Project', project)
        next();
        return;
    };
};
