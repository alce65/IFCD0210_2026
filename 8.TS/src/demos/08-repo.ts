/*eslint-disable */

// Planteamiento inicial (sin generics)
// Defino unos tipos Item y PartialItem
// Creo una interfaz Repository con los métodos CRUD
// Creo dos clases que implementan la interfaz Repository
// Creo una instancia de una de las clases

{
    type Item = {};
    type PartialItem = {};

    interface Repository {
        read: () => Item[];
        readById: (id: string) => Item;
        create: (data: PartialItem) => Item;
        update: (id: string, data: PartialItem) => Item;
        delete: (id: string) => Item;
    }

    class RepoNotesSQL implements Repository {
        read() {
            return [];
        }
        readById(id: string) {
            return {};
        }
        create(data: Partial<Item>) {
            return {};
        }
        update(id: string, data: Partial<Item>) {
            return {};
        }
        delete(id: string) {
            return {};
        }
    }

    class RepoNotesMongo implements Repository {
        read() {
            return [];
        }
        readById(id: string) {
            return {};
        }
        create(data: Partial<Item>) {
            return {};
        }
        update(id: string, data: Partial<Item>) {
            return {};
        }
        delete(id: string) {
            return {};
        }
    }

    const repo = new RepoNotesMongo();

    repo.read();
}
// Generalización gracias al uso de generics
// Ahora la interfaz Repository es genérica
// Las clases RepoNotesSQL y RepoNotesMongo implementan la interface genérica
// Asignándole a T el tipo Note
// Usamos la utilidad Partial para definir el tipo Partial<T>
// En la implementación de los métodos, hacemos una aserción del tipo devuelto para cumplir con la interfaz
// En la implementación de RepoNotesSQL se añade un método generateSQL que no está en la interfaz

{
    interface Repository<T> {
        read: () => T[];
        readById: (id: string) => T;
        create: (data: Partial<T>) => T;
        update: (id: string, data: Partial<T>) => T;
        delete: (id: string) => T;
    }

    type Note = {
        id: string;
        title: string;
        content: string;
    };

    class RepoNotesSQL implements Repository<Note> {
        read() {
            return [];
        }

        readById(id: string) {
            return { id } as Note;
        }

        create(data: Partial<Note>) {
            return { data } as unknown as Note;
        }

        update(id: string, data: Partial<Note>) {
            return { id, data } as unknown as Note;
        }

        delete(id: string) {
            return { id } as Note;
        }

        generateSQL() {
            return '';
        }
    }

    class RepoNotesMongo implements Repository<Note> {
        read() {
            return [];
        }

        readById(id: string) {
            return { id } as Note;
        }

        create(data: Partial<Note>) {
            return { data } as unknown as Note;
        }

        update(id: string, data: Partial<Note>) {
            return { id, data } as unknown as Note;
        }

        delete(id: string) {
            return { id } as Note;
        }
    }

    // Las instancias de las clases son de tipo Repository<Note>
    // De esa forma son intercambiables cualquiera de las clases que implementen la interfaz Repository<Note>
    // El inconveniente es que incluso en la clase que lo tiene, no se puede acceder a un método propio de la clase como generateSQL
    // Por lo que no se puede llamar al método generateSQL en la instancia de RepoNotesMongo
    // Para solucionar esto, se puede hacer una aserción de tipo

    const repo: Repository<Note> = new RepoNotesSQL();

    repo.read();
    (repo as RepoNotesSQL).generateSQL();
}
// DESARROLLO DEL CÓDIGO
{
    // Creamos la interfaz ODM genérica
    // Modelando los métodos CRUD de un repositorio de datos
    // Simplificando la forma en que los llevaría a cabo un ORM

    interface TypeORM<T> {
        read(collection: string): T[];
        readById(collection: string, id: string): T;
        create(collection: string, data: Partial<T>): T;
        updateById(collection: string, id: string, data: Partial<T>): T;
        deleteById(collection: string, id: string): T;
    }

    // Como mocks, generamos funciones de lectura escritura capaces de leer y escribir en un almacenamiento (e,g, Fichero)

    function readFromDisk(): string {
        return '';
    }

    function writeToDisk(data: string): void {}

    // Creamos una clase que implementa la interfaz ORM

    // Necesitaremos algunas utilidades de tipos de TypeScript
    // Partial<T> para definir un tipo con todas las propiedades de T como opcionales
    // Exclude<T, U> para excluir de T los tipos que están en U

    class ORMLite<T extends { id: string }> implements TypeORM<T> {
        file: string;
        constructor(file: string) {
            this.file = file;
        }

        private readDB(): Record<string, T[]> {
            const txtData = readFromDisk();
            return JSON.parse(txtData);
        }

        private writeDB(data: Record<string, T[]>): void {
            writeToDisk(JSON.stringify(data));
        }

        read(collection: string): T[] {
            // const txtData = readFromDisk();
            // const allData = JSON.parse(txtData);
            const allData = this.readDB();
            return allData[collection];
        }

        readById(collection: string, id: string): T {
            // const txtData = readFromDisk();
            // const allData = JSON.parse(txtData);
            const allData = this.readDB();
            const item = allData[collection].find((item: T) => item.id === id);
            if (item === undefined) {
                throw new Error(`Item with id ${id} not found`);
            }
            return item;
        }

        create(collection: string, initialData: Exclude<T, { id: string }>): T {
            // const txtData = readFromDisk();
            // const allData = JSON.parse(txtData);
            const allData = this.readDB();
            const itemData = {
                ...initialData,
                id: crypto.randomUUID().substring(0, 8),
            };
            allData[collection].push(itemData);
            // writeToDisk(JSON.stringify(allData));
            this.writeDB(allData);
            return itemData;
        }

        updateById(collection: string, id: string, data: Partial<Item>) {
            // const txtData = readFromDisk();
            // const allData = JSON.parse(txtData);
            const allData = this.readDB();
            let itemIndex = allData[collection].findIndex(
                (item: T) => item.id === id,
            );
            if (itemIndex === -1) {
                throw new Error(`Item with id ${id} not found`);
            }
            allData[collection][itemIndex] = Object.assign(
                allData[collection][itemIndex],
                data,
            );
            // allData[collection][itemIndex] = { ...allData[collection][itemIndex], ...data }; // Otra forma de hacerlo
            // writeToDisk(JSON.stringify(allData));
            this.writeDB(allData);
            return allData[collection][itemIndex];
        }

        deleteById(collection: string, id: string) {
            // const txtData = readFromDisk();
            // const allData = JSON.parse(txtData);
            const allData = this.readDB();
            const item = allData[collection].find((item: T) => item.id === id);
            if (item === undefined) {
                throw new Error(`Item with id ${id} not found`);
            }
            allData[collection] = allData[collection].filter(
                (item: T) => item.id !== id,
            );
            // writeToDisk(JSON.stringify(allData));
            this.writeDB(allData);
            return item;
        }
    }

    interface Repository<T> {
        read: () => T[];
        readById: (id: string) => T;
        create: (data: Partial<T>) => T;
        update: (id: string, data: Partial<T>) => T;
        delete: (id: string) => T;
    }

    // Como mock de modelo de datos generamos una interfaz/tipo Item

    type Item = {
        id: string;
        title: string;
    };

    class RepoItemFile implements Repository<Item> {
        orm: TypeORM<Item> = new ORMLite<Item>('items.json');
        collection = 'items';
        read() {
            return this.orm.read(this.collection);
        }
        readById(id: string) {
            return this.orm.readById(this.collection, id);
        }
        create(data: Partial<Item>) {
            return this.orm.create(this.collection, data);
        }
        update(id: string, data: Partial<Item>) {
            return this.orm.updateById(this.collection, id, data);
        }
        delete(id: string) {
            return this.orm.deleteById(this.collection, id);
        }
    }

    const repo = new RepoItemFile();
    console.log(repo.read());
}
