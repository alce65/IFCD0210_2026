import { readFile } from 'node:fs';
import { resolve, join } from "node:path";

const __dirname = resolve('.')
const file = join(__dirname, '/data/', '/sample.txt' )

readFile(file, { encoding: 'utf-8' }, (err, info) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log(info);
});

console.log('Fin');
