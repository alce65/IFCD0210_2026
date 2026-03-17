import { readFile, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';

interface FileData {
    users: string[];
}

const __dirname = resolve('.');
const targetFile = join(__dirname, '/data/', '/users.json');

const handleInput = (data: string | Buffer<ArrayBuffer>) => {
    const name = data.toString().trim();
    readFile(targetFile, { encoding: 'utf-8' })
        .then((fileContent) => {
            const data = JSON.parse(fileContent) as FileData;
            data.users.push(name);
            return JSON.stringify(data);
        })
        .then((fileContent) => writeFile(targetFile, fileContent))
        .then(() => {
            console.log(`Hola ${name}. Tu nombre se ha grabado`);
            process.exit(0);
        })
        .catch((err: Error) => {
            console.error(err.message);
            process.exit(1);
        });
};

process.stdout.write('Dinos tu nombre: ');
process.stdin.on('data', handleInput);
