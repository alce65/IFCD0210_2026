import { readFileSync } from 'node:fs';
import { resolve, join } from "node:path";

const __dirname = resolve('.')
const file = join(__dirname, '/data/', '/sample.txt' )

const info = readFileSync(file, { encoding: 'utf-8' });
console.log(info);
console.log('Fin');
