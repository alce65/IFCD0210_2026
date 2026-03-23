import { Counter } from "../counter/counter2";
import { Footer } from "../footer-wc/footer";

export class App {
    static #selector = 'app-root';
    static render() {
        const el = document.querySelector(App.#selector) as HTMLElement;
        // En este caso NO es necesaria una type guard
        //    if (el === null) {
        //     throw new Error('Selector invalido')
        //    }
        const newElement = new App();
        el.replaceWith(newElement.#element);
        Footer.render();
        Counter.render();
    }

    #template!: string;
    #element!: HTMLElement;

    private constructor() {
        this.#setTemplate();
        this.#setElement();
    }

    #setTemplate() {
        this.#template = /*html*/ `
            <main>
                <p>Uso de componentes y web components</p>
                <app-counter counterId="1" ></app-counter>
                <app-counter counterId="2"></app-counter>
                <app-counter counterId="3"></app-counter>
            </main>
            <app-footer></app-footer>
        `;
    }

    #setElement() {
        this.#element = document.createElement('app-root');
        console.log(this.#element);
        this.#element.innerHTML = this.#template;
    }
}
