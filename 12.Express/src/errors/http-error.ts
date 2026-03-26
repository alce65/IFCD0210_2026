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
        console.log();
    }
}
