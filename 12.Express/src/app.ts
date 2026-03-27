import express from 'express';
import debug from 'debug';
import morgan from 'morgan';
import cors from 'cors';
import { errorHandler } from './middleware/error-handler.ts';
import { NotesController } from './controller/notes.ts';
import { NotesRepoJson } from './services/notes-repo-json.ts';
import notesRouter from './router/notes.ts';
import { HomeView } from './views/home.ts';

const log = debug('12-express:app');
export const app = express();
app.disable('x-powered-by');
log('Express app created');

// Middleware Utilities
app.use(morgan('dev'));
app.use(
    cors({
        origin: '*',
    }),
);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('./public'));


const repo = new NotesRepoJson();
const controller = new NotesController(repo);

app.use('/home', (_req, res) => {
    res.send(HomeView.render())
})

app.use('/api/notes', notesRouter(controller));

app.use((_req, res) => {
    res.status(404);
    res.statusMessage = 'Not Found';
    res.json({
        message: 'Resource not found',
    });
    return;
});

app.use(errorHandler);
