import { readFile, writeFile,  } from 'node:fs/promises';
import promptSync from 'prompt-sync';
import { resolve, join } from 'node:path';

const __dirname = resolve('.');
const targetFile = join(__dirname, '/data/', '/users.txt');

const prompt = promptSync();
const name = prompt('Dime tu nombre? ');

writeFile(targetFile, name)
    .then(() => {
        return readFile(targetFile, { encoding: 'utf-8' });
    })
    .then((data) => {
        console.log(`Hola ${data}`);
    })
    .catch((err: Error) => console.error(err.message));
