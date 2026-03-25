import express from 'express';
import debug from 'debug';
import morgan from 'morgan';
import cors from 'cors';
import { errorHandler } from './middleware/error-handler.ts';
import { customHeaders } from './middleware/customs.ts';

const log = debug('11-express:app');

export const app = express();
app.disable('x-powered-by');
log('Express app created');

app.use(customHeaders('Cas Training'));

// app.use(customLogger());
// usamos morgan en lugar del anterior
app.use(morgan('dev'));

app.use(
    cors({
        origin: '*',
    }),
);

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('./public'));

// app.get('ruta', fn)
// app.post('ruta', fn)
// app.put('ruta', fn)
// app.patch('ruta', fn)
// app.delete('ruta', fn)

app.get('/', (_req, res) => {
    res.send('Hello World!');
    return;
});

app.post('/', (req, res) => {
    log(req.body);
    res.statusCode = 201;
    res.send('Hello Post!');
    return;
});

app.get('/api', (_req, res) => {
    res.setHeader('X-Owner', 'Cas API');
    res.send('API rest');
    return;
});

app.get('/api/notes', (_req, res) => {
    const notes = [{ id: 1 }, { id: 2 }];
    res.json(notes);
    return;
});

app.get('/api/notes/search', (req, res) => {
    const query = req.query;
    // Código de búsqueda
    res.json(query);
    return;
});

app.get('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    const notes = [{ id: 1 }, { id: 2 }];
    res.json(notes.find((note) => note.id === Number(id)));
    return;
});

app.use((_req, res) => {
    res.status(404);
    res.statusMessage = 'Not Found';
    res.json({
        message: 'Resource not found',
    });
    return;
});

app.use(errorHandler);
