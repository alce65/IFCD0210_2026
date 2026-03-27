import type { NextFunction, Request, Response } from 'express';
import { NotesRepoJson } from '../services/notes-repo-json.ts';
import { NoteSchemaDTO, type NoteUpdateDTO } from '../entities/note.ts';
import debug from 'debug';
import { HttpError } from '../errors/http-error.ts';

const log = debug('12-express:controller:notes');

export class NotesController {
    // repo: Repository<Note>;
    // Lo anterior se usaría en otros lenguajes(Java...)
    // En TS con el duck typing, no es necesario
    repo: NotesRepoJson;

    // constructor(repo: Repository<Note>) {
    // Lo anterior se usaría en otros lenguajes(Java...)
    // En TS con el duck typing, no es necesario
    constructor(repo: NotesRepoJson) {
        this.repo = repo;
        log('Instancia creada');
    }

    async getAll(_req: Request, res: Response) {
        const notes = await this.repo.read();
        res.json(notes);
        return;
    }

    // Si es arrow, al usarlo como callback
    // No se necesitará .bind()
    getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const note = await this.repo.readById(id as string);
            res.json(note);
            return;
        } catch (error) {
            const finalError = new HttpError(
                404,
                'NotFound',
                (error as Error).message,
            );
            finalError.cause = error;
            throw finalError;
        }
    };

    query = (req: Request, res: Response) => {
        const query = req.query;
        // Código de búsqueda
        res.json(query);
        return;
    };

    create = async (req: Request, res: Response, next: NextFunction) => {
        // El try/catch no es necesario
        // porque ya lo hace express
        try {
            const data = NoteSchemaDTO.parse(req.body);
            const result = await this.repo.create(data);
            res.statusCode = 201;
            res.json(result);
            return;
        } catch (error) {
            next(error);
        }
    };

    update = async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        const data = NoteSchemaDTO.partial().parse(req.body) as NoteUpdateDTO
        try {
            const result = await this.repo.updateById(id as string, data);
            res.json(result);
            return;
        } catch (error) {
            const finalError = new HttpError(
                404,
                'NotFound',
                (error as Error).message,
            );
            finalError.cause = error;
            next(finalError);
        }
    };

    replace = (req: Request, res: Response) => {
        res.status(405);
        res.statusMessage = 'Method Not Allowed';
        res.end();
    };

    delete = (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            this.repo.deleteById(id as string);
            res.statusCode = 204;
            res.statusMessage = 'No Content';
            res.end();
            return;
        } catch (error) {
            const finalError = new HttpError(
                404,
                'NotFound',
                (error as Error).message,
            );
            finalError.cause = error;
            next(finalError);
        }
    };
}
