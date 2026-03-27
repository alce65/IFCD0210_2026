import { readFileSync } from 'node:fs';

export abstract class View {
    template!: string;
    css: string;

    constructor(name: string) {
        this.css = readFileSync(`./src/views/${name}/${name}.css`, {
            encoding: 'utf8',
        });
       
    }

    abstract setTemplate(): void;
}
