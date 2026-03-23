import { Counter } from '../core/components/counter/counter2';

export class HomePage extends HTMLElement {
    static #selector = 'app-home-page';
    static render() {
        // Prepare main
        const el: HTMLElement | null = document.querySelector('main');
        if (el === null) {
            throw new Error('Selector main no disponible');
        }
        el.innerHTML = `<${HomePage.#selector}></${HomePage.#selector}>`;
        // Register custom element
        customElements.define(HomePage.#selector, HomePage);
        // Render child custom elements
        Counter.render();
    }

    #template!: string;

    constructor() {
        super();
        this.#setTemplate();
        this.#setElement();
    }

    #setTemplate() {
        this.#template = /*html*/ `
            <section>
                <h2>Uso de componentes y web components</h2>
                <app-counter counterId="1" ></app-counter>
                <app-counter counterId="2"></app-counter>
                <app-counter counterId="3"></app-counter>
            </section>
        `;
    }

    #setElement() {
        this.innerHTML = this.#template;
    }
}
