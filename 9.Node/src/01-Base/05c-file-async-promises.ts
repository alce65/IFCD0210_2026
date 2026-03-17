import { readFile } from 'node:fs/promises';
import { resolve, join } from "node:path";

const __dirname = resolve('.')
const file = join(__dirname, '/data/', '/sample.txt' )

readFile(file, { encoding: 'utf8' })
    .then((info) => {
        console.log(info);
    })
    .catch((err: NodeJS.ErrnoException) => {
        console.error(err.message);
    });

console.log('Fin');
