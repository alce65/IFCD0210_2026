import { createServer, IncomingMessage, ServerResponse } from 'node:http';
import { readFile } from 'node:fs/promises';
import { json } from 'node:stream/consumers';
import serveStaticCreator from 'serve-static';
import debug from 'debug';

const log = debug('10-back:index');

const PORT = Number(process.env.PORT) || 3000;

const notes = [
    {
        id: '1',
        content: 'Primera nota',
    },
    {
        id: '2',
        content: 'Segunda nota',
    },
    {
        content: 'Nota creada',
        id: 'df10700f-18ae-41ea-9e8e-16583023b8db',
        owner: 'Pepe',
    },
];

const serveStatic = serveStaticCreator('./public', {});

const app = async (request: IncomingMessage, response: ServerResponse) => {
    const appLog = debug('10-back:app');
    try {
        // console.log(request.url, request.method);
        // console.log(request.headers);
        appLog('App');

        if (request.method === 'PUT') {
            response.statusCode = 405;
            response.end();
            return;
        }

        if (request.method === 'POST') {
            response.statusCode = 201;
            const body = await json(request) as Record<string, unknown>;
            // Simulamos que guardamos la info
            // asignándole un id
            body.id = crypto.randomUUID()
            response.end(JSON.stringify(body));
            return;
        }

        let html = '';
        switch (request.url) {
            case '/api':
                response.setHeader('Content-type', 'text/html; charset=utf-8');
                response.end('<p>API Rest</p>');
                break;
            case '/api/notes':
                response.setHeader('Content-type', 'application/json');
                // Así no funcionaría response.write(notes);
                response.write(JSON.stringify(notes));
                response.end();
                break;
            default:
                response.statusCode = 200;
                html = await readFile('./public/index.html', {
                    encoding: 'utf-8',
                });
                response.end(html);
                break;
        }

        return;
    } catch (error) {
        console.error((error as Error).message);
    }
};

const middleware = (request: IncomingMessage, response: ServerResponse) => {
    log(`[${request.method}] ${request.url}`);

    serveStatic(request, response, () => {
        app(request, response);
    });
};

const server = createServer(middleware);

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
