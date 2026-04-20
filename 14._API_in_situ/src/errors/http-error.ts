import { env } from "../config/env.ts";
import debug from 'debug';

const log = debug(`${env.PROJECT_NAME}:http-error`);
log('Loading HTTP error class...');

export class HttpError extends Error {
    status: number
    statusMessage: string
    constructor(
        status: number,
        statusMessage?: string,
        message?: string | undefined,
        options?: ErrorOptions | undefined,
    ) {
        super(message, options);
        this.status = status
        this.statusMessage = statusMessage || ''
        log('Creating HTTP error: %o', this.status, this.statusMessage, this.message);
    }
}
