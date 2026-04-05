import { createServer, type ServerResponse } from 'node:http';
import debug from 'debug';
import { app } from './app.ts';
import type { HttpError } from './errors/http-error.ts';
import { env } from './config/env.ts';

const log = debug('12-express:index');
const port = env.PORT || 3000;

const server = createServer(app);
log('Server created');

const listenManager = () => {
    const addr = server.address();
    if (addr === null) return;
    let bind;
    if (typeof addr === 'string') {
        bind = 'pipe ' + addr;
    } else {
        bind =
            addr.address === '::'
                ? `http://localhost:${addr?.port}`
                : `${addr.address}:${addr?.port}`;
    }
    if (env.NODE_ENV !== 'dev') {
        console.log(`Server listening on ${bind}`);
    } else {
        log(`Servidor escuchando en ${bind}`);
    }
};

const errorManager = (error: HttpError, response: ServerResponse) => {
    if (!('statusCode' in error)) {
        error = {
            ...new Error('Internal Server Error'),
            status: 500,
            statusMessage: 'Internal Server Error',
        };
    }
    const errorInfo = `Error ${error.status}: ${error.statusMessage}`;
    response.statusCode = error.status;
    response.statusMessage = error.statusMessage;
    log(errorInfo, error.message);
    response.end(errorInfo);
};

server.on('listening', listenManager);
server.on('error', errorManager);
server.listen(port);
