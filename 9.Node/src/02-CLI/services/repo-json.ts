import { readFile, writeFile } from 'node:fs/promises';
import type { Repository, WithId } from '../types/repo.ts';

export class RepoJson<T extends WithId> implements Repository<T> {
    #items: T[] = [];
    #file: string;
    #collection: string;

    constructor(file: string, collection = 'items') {
        this.#file = file;
        this.#collection = collection;
    }

    private async load() {
        const fileContent = await readFile(this.#file, { encoding: 'utf8' });
        this.#items = JSON.parse(fileContent)[this.#collection];
    }

    private async save() {
        const fileContent = await readFile(this.#file, { encoding: 'utf8' });
        const data = JSON.parse(fileContent);
        data[this.#collection] = this.#items;
        const content = JSON.stringify(data, null, 4);
        await writeFile(this.#file, content, { encoding: 'utf8' });
    }

    async read(): Promise<T[]> {
        await this.load();
        return [...this.#items];
    }

    async readById(id: string): Promise<T> {
        await this.load();
        const item = this.#items.find((n) => n.id === id);
        if (!item) throw new Error(`T with id ${id} not found`);
        return item;
    }

    async create(itemData: Omit<T, 'id'>): Promise<T> {
        await this.load();
        // Crear una nota
        const item: T = { ...itemData, id: crypto.randomUUID()} as T;
        this.#items.push(item);
        // Añadirla al fichero
        await this.save();
        // Devolverla
        return item;
    }

    async updateById(
        id: string,
        data: Omit<Partial<T>, 'id'>,
    ): Promise<T> {
        const item = await this.readById(id);
        Object.assign(item, data);
        // Añadirla al fichero
        await this.save();
        // Devolverla
        return item;
    }

    async deleteById(id: string): Promise<T> {
        await this.load();
        const index = this.#items.findIndex((n) => n.id === id);
        if (index === -1) throw new Error(`T with id ${id} not found`);
        const deletedT = this.#items.splice(index, 1)[0] as T;
        // Añadirla al fichero
        await this.save();
        // Devolverla
        return deletedT;
    }
}
