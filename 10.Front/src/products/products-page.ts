

export class ProductsPage extends HTMLElement {
    static #selector = 'app-products-page';
    static render() {
        // Prepare main
        const el: HTMLElement | null = document.querySelector('main');
        if (el === null) {
            throw new Error('Selector main no disponible');
        }
        el.innerHTML = `<${ProductsPage.#selector}></${ProductsPage.#selector}>`;
        // Register custom element
        customElements.define(ProductsPage.#selector, ProductsPage);
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
                <h2>Products</h2>
                <p>Aquí irán los productos</p>
            </section>
        `;
    }

    #setElement() {
        this.innerHTML = this.#template;
    }
}
