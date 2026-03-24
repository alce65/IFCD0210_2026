import express from 'express';
import debug from 'debug';
import morgan from "morgan";
import cors from 'cors'
import { errorHandler } from './middleware/error-handler.ts';
import { HttpError } from './errors/http-error.ts';

const log = debug('11-express:app');

export const app = express();
log('Express app created');

// app.use(customLogger());
// usamos morgan en lugar del anterior
app.use(morgan('dev'))

app.use(cors({
    origin: '*'
}))

app.use(express.json())
app.use(express.urlencoded())

app.use(express.static('./public'))

// app.get('ruta', fn)
// app.post('ruta', fn)
// app.put('ruta', fn)
// app.patch('ruta', fn)
// app.delete('ruta', fn)

app.get('/', (_req, res) => {
    res.send('Hello World!');
    return;
});

app.get('/patata', (_req, res, next) => {
    next(new HttpError(
        401, 
        "Unauthorized",
        'Patatas not allowed') )
    return;
});

app.post('/', (req, res) => {
    log(req.body)
    res.statusCode = 201;
    res.send('Hello Post!');
    return;
});

app.get('/api', (_req, res) => {
    res.send('API rest');
    return;
});

app.get('/api/notes', (_req, res) => {
    const notes = [
        {id: 1}, {id: 2}
    ]
    res.json(notes)
    return;
});

app.use(errorHandler)
