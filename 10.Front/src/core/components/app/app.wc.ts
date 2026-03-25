import { routes } from '../../router/router';
import { Footer } from '../footer-wc/footer.wc';
import { Header } from '../header/header.wc';
import { Menu } from '../menu/menu.wc';
import './app.css';

export class App extends HTMLElement {
    static #selector = 'app-root';
    static render() {
        customElements.define(App.#selector, App);
        Header.render();
        Menu.render(routes);
        Footer.render();
    }

    #template!: string;

    constructor() {
        super();
        this.#setTemplate();
        this.#setElement();
    }

    #setTemplate() {
        this.#template = /*html*/ `
            <app-header></app-header>
            <main></main>
            <app-footer></app-footer>
        `;
    }

    #setElement() {
        this.innerHTML = this.#template;
    }
}
