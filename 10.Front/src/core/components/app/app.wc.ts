import { Footer } from "../footer-wc/footer";

export class App extends HTMLElement {
    static #selector = 'app-root'
    static render() {
       customElements.define(App.#selector, App)
       Footer.render()
       // Debería hacerlo el router
    }

    #template!: string;

    constructor () {
        super()
        this.#setTemplate()
        this.#setElement()
    }


    #setTemplate() {
        this.#template = /*html*/`
            <main></main>
            <app-footer></app-footer>
        `
    }
    
    #setElement() {
        this.innerHTML = this.#template
    }

}

