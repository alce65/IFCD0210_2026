export class AboutPage extends HTMLElement {
    static #selector = 'app-about-page';
    static render() {
        // Prepare main
        const el: HTMLElement | null = document.querySelector('main');
        if (el === null) {
            throw new Error('Selector main no disponible');
        }
        el.innerHTML = `<${AboutPage.#selector}></${AboutPage.#selector}>`;
        // Register custom element
        if (customElements.get(AboutPage.#selector) === undefined) {
            customElements.define(AboutPage.#selector, AboutPage);
        }
        // Render child custom elements
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
                <h2>About</h2>
                <p>Aquí irá nuestra información</p>
            </section>
        `;
    }

    #setElement() {
        this.innerHTML = this.#template;
    }
}
