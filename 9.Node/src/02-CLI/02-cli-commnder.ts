import { join, resolve } from 'node:path';
import { program } from 'commander';
import { NotesRepoJson } from './services/notes-repo-json.ts';

// const __dirname = resolve('../');
// join(__dirname, '/data/', file)
const dataFolder = resolve('./data'); // dist
const file = join(dataFolder, 'db.json');
const repo = new NotesRepoJson(file);

program.name('CLI').description(`CLI sample`).version('1.0.0');

const readAll = async () => {
    try {
        const data = await repo.read();
        console.table(data);
    } catch (error) {
        console.error((error as Error).message);
    }
};

const findNote = async (content: string) => {
    try {
        const data = await repo.read();
        const notes = data.filter((note) => note.content.includes(content));
        if (!notes.length) {
            throw new Error('Nota no encontrada');
        }
        console.table(notes);
    } catch (error) {
        console.error((error as Error).message);
    }
};

const addNote = async (content: string) => {
    const newNote = { content: content };
    try {
        const finalNote = await repo.create(newNote);
        console.log('Nota añadida', finalNote);
    } catch (error) {
        console.error((error as Error).message);
    }
};

const updateNote = async (content: string, { id }: { id: string }) => {
    const updatedNote = { content: content };
    try {
        const finalNote = await repo.updateById(id, updatedNote);
        console.log('Nota actualizada', finalNote);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error('Error desconocido', error);
        }
    }
};

const deleteNote = async ({ id }: { id: string }) => {
    try {
        const deletedNote = await repo.deleteById(id);
        console.log('Nota borrada', deletedNote);
    } catch (error) {
        console.error((error as Error).message);
    }
};

program
    .command('all')
    .description('Mostrar todas las notas')
    .action(readAll);
// .action(() => {
//     repo.read().then((data) => {
//         console.table(data);
//     });
// });

program
    // .command('find <key>')
    .command('find')
    .argument('<key>', 'texto para buscar la nota')
    .description('Mostrar las notas encontradas')
    .action(findNote);

program.command('add <note>')
.description('Añadir una nota').action(addNote);

program.command('update <note>')
.option('-i, --id <id>').action(updateNote);

program.command('delete')
.option('-i, --id <id>')
.action(deleteNote);

program.parse();
