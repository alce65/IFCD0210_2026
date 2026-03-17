import { readFile } from 'node:fs/promises';
import { resolve, join } from "node:path";

const __dirname = resolve('.')
const file = join(__dirname, '/data/', '/sample.txt' )
//
// const handleReadFile = (err:  NodeJS.ErrnoException | null, info: string ) => {
//     if (err) {
//         console.error(err.message);
//         return;
//     }
//     console.log(info);
// }

try {
    const info = await readFile(file, { encoding: 'utf-8' });
    console.log(info);
} catch (err) {
    console.error((err as NodeJS.ErrnoException).message);
}
console.log('Fin');
