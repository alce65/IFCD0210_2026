import { createServer, IncomingMessage, ServerResponse } from 'node:http';

const PORT = Number(process.env.PORT) || 3000;

const app = (request: IncomingMessage, response: ServerResponse) => {
    try {
        console.log(request.url, request.method);
        console.log(request.headers);

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

        if (request.method === 'PUT') {
            response.statusCode = 405;
            response.end();
            return;
        }

        if (request.method === 'POST') {
            response.statusCode = 201;
        }

        switch (request.url) {
            case '/':
                response.setHeader('Content-type', 'text/html; charset=utf-8');
                response.end('<p>¡¡Hola bienvenidos al servidor!!😍😍</p>');
                break;
            case '/notes':
                response.setHeader('Content-type', 'application/json');
                response.write(JSON.stringify(notes));
                response.write(notes);
                response.end();
                break;
            default:
                response.statusCode = 404;
                response.end();
                break;
        }

        return;
    } catch (error) {
        console.error((error as Error).message);
    }
};

const server = createServer(app);

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
