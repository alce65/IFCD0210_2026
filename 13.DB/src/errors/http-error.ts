export class HttpError extends Error {
    statusCode: number
    statusMessage: string
    constructor(
        statusCode: number,
        statusMessage?: string,
        message?: string | undefined,
        options?: ErrorOptions | undefined,
    ) {
        super(message, options);
        this.name = 'HttpError';
        this.statusCode = statusCode;
        this.statusMessage = statusMessage || ''
    }
}

