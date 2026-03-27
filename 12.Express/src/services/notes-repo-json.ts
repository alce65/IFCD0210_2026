import { readFile, writeFile } from 'node:fs/promises';
import type { Note, NoteDTO, NoteUpdateDTO } from '../entities/note.ts';
import type { Repository } from '../types/repo.ts';
import { configDB } from '../config/db-config.ts';
import debug from 'debug';

const log = debug('12-express:repo:notes');

export class NotesRepoJson implements Repository<Note> {
    #notes: Note[] = [];
    #file: string;
    #collection: string;

    constructor(collection = 'notes') {
        log('NotesRepoJson created')
        this.#file = configDB();
        this.#collection = collection;
    }

    private async load() {
        const fileContent = await readFile(this.#file, { encoding: 'utf8' });
        this.#notes = JSON.parse(fileContent)[this.#collection];
    }

    private async save() {
        const fileContent = await readFile(this.#file, { encoding: 'utf8' });
        const data = JSON.parse(fileContent);
        data[this.#collection] = this.#notes;
        const content = JSON.stringify(data, null, 4);
        await writeFile(this.#file, content, { encoding: 'utf8' });
    }

    async read(): Promise<Note[]> {
        await this.load();
        return [...this.#notes];
    }

    async readById(id: string): Promise<Note> {
        await this.load();
        const note = this.#notes.find((n) => n.id === id);
        if (!note) throw new Error(`Note with id ${id} not found`);
        return note;
    }

    async create(noteData: NoteDTO): Promise<Note> {
        await this.load();
        // Crear una nota
        const note: Note = { ...noteData, id: crypto.randomUUID() };
        this.#notes.push(note);
        // Añadirla al fichero
        await this.save();
        // Devolverla
        return note;
    }

    async updateById(
        id: string,
        data: NoteUpdateDTO,
    ): Promise<Note> {
        const note = await this.readById(id);
        Object.assign(note, data);
        // Añadirla al fichero
        await this.save();
        // Devolverla
        return note;
    }

    async deleteById(id: string): Promise<Note> {
        await this.load();
        const index = this.#notes.findIndex((n) => n.id === id);
        if (index === -1) throw new Error(`Note with id ${id} not found`);
        const deletedNote = this.#notes.splice(index, 1)[0] as Note;
        // Añadirla al fichero
        await this.save();
        // Devolverla
        return deletedNote;
    }
}


