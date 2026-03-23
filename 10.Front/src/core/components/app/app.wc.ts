import { Counter } from "../counter/counter2";
import { Footer } from "../footer-wc/footer";

export class App extends HTMLElement {
    static #selector = 'app-root'
    static render() {
       customElements.define(App.#selector, App)
       Footer.render()
       Counter.render()
    }

    #template!: string;

    constructor () {
        super()
        this.#setTemplate()
        this.#setElement()
    }


    #setTemplate() {
        this.#template = /*html*/`
            <main>
                <p>Uso de componentes y web components</p>
                <app-counter counterId="1" ></app-counter>
                <app-counter counterId="2"></app-counter>
                <app-counter counterId="3"></app-counter>
            </main>
            <app-footer></app-footer>
        `
    }
    
    #setElement() {
        this.innerHTML = this.#template
    }

}

