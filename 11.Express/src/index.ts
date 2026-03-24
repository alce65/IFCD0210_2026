import { createServer } from 'node:http';
import debug from 'debug';
import { app } from './app.ts';

const log = debug('11-express:index');
const port = process.env.PORT || 3000;

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
    if (process.env.NODE_ENV !== 'dev') {
        console.log(`Server listening on ${bind}`);
    } else {
        log(`Servidor escuchando en ${bind}`);
    }
};

server.listen(port, listenManager);
