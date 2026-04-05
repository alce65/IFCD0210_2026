import { View } from '../types/view.ts';
import { socials } from './socials.ts';
import { readFileSync } from 'node:fs';

export class FooterView extends View {
    // Propiedades y métodos estáticos

    static viewName = 'footer';
    static render() {
        return new FooterView('footer').template;
    }

    // Propiedades y métodos de instancia
    address = '&copy; 2026 CFD Alcobendas - Curso IF2001';
    list: string;

    constructor(address?: string) {
        super(FooterView.viewName);
        this.address = address ?? this.address;
        this.list = socials
            .map(
                (item) => `
                    <li><a href="${item.url}" target="_blank">
                    ${item.icon}</a></li>`,
            )
            .join('');

        this.css = readFileSync('./src/views/footer/footer.css', {
            encoding: 'utf8',
        });
        this.setTemplate();
        console.log('loading footer');
    }

    setTemplate(): void {
        // Devolver siempre un solo elemento
        this.template = /*html*/ `
        <style>
            ${this.css}
         </style>   
         <footer class="footer">
             <ul>${this.list}</ul>
             <address>${this.address}</address>
             <p>${Math.random()}</p>
         </footer>
         `;
    }
}
