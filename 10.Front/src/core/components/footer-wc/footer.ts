import './footer.css';
import { socials } from '../../data/socials.ts';

export class Footer extends HTMLElement {
    // Propiedades y métodos estáticos
    static selector = 'app-footer';
    static render() {
        customElements.define(Footer.selector, Footer);
    }

    // Propiedades y métodos de instancia
    #address = '&copy; 2026 CFD Alcobendas - Curso IF2001';
    #list!: string;
    #template!: string;

    constructor(address?: string) {
        super();
        this.#address = address ?? this.#address;
        this.setTemplate();
        console.log('loading footer');
    }

    #setList() {
        this.#list = socials
            .map(
                (item) => `
                    <li><a href="${item.url}" target="_blank">
                    ${item.icon}</a></li>`,
            )
            .join('');
    }

    private setTemplate(): void {
        this.#setList();
        this.#template = /*html*/ `    
         <footer class="footer">
             <ul>${this.#list}</ul>
             <address>${this.#address}</address>
             <p>${Math.random()}</p>
         </footer>
         `;
        this.innerHTML = this.#template;
    }
}
