import { Router } from 'express';
import debug from 'debug';
import { NotesRepoJson } from '../services/notes-repo-json.ts';
import { join, resolve } from 'node:path';
import { NotesController } from '../controller/notes.ts';

const log = debug('12-express:router:notes');

const router = Router();
// Asociado a la ruta api/notes

const __dirname = resolve('.');
const file = join(__dirname, 'src', 'data', 'db.json');
const repo = new NotesRepoJson(file);

const controller = new NotesController(repo)

log('Notes router created');

router.get('/', controller.getAll.bind(controller));
router.get('/search', controller.query);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.patch('/:id', controller.update);
router.put('/:id', controller.replace );
router.delete('/:id', controller.delete);

export default router;
