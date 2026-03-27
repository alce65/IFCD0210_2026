import { Router } from 'express';
import debug from 'debug';
import { NotesController } from '../controller/notes.ts';

const log = debug('12-express:router:notes');

const router = (controller: NotesController) => {
    const router = Router();
    // Asociado a la ruta api/notes
    log('Notes router created');

    router.get('/', controller.getAll.bind(controller));
    router.get('/search', controller.query);
    router.get('/:id', controller.getById);
    router.post('/', controller.create);
    router.patch('/:id', controller.update);
    router.put('/:id', controller.replace);
    router.delete('/:id', controller.delete);

    return router
};

export default router;
