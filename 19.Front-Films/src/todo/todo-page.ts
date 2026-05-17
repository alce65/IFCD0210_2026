import { TodoContainer } from './components/todo-container/todo-container';

export class TodoPage extends HTMLElement {
    static selector = 'app-todo-page';

    static register() {
        if (customElements.get(TodoPage.selector) === undefined) {
            customElements.define(TodoPage.selector, TodoPage);
        }

        TodoContainer.register();
        TodoPage.#addPage();
    }

    static #addPage(selector = 'main') {
        const element = document.querySelector(selector) as HTMLElement | null;

        if (element === null) {
            throw new Error(`Selector ${selector} no disponible`);
        }

        element.innerHTML = '';
        element.appendChild(new TodoPage());
    }

    #template!: string;

    constructor() {
        super();
        this.#setTemplate();
    }

    connectedCallback() {
        this.#render();
    }

    #setTemplate() {
        this.#template = /*html*/ `
            <section>
                <h2>ToDo List</h2>
                <app-todo-container></app-todo-container>
            </section>
        `;
    }

    #render() {
        this.innerHTML = this.#template;
    }
}
