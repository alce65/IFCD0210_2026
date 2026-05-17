import './todo-add.css';

type TodoAddEventDetail = {
    title: string;
};

export class TodoAdd extends HTMLElement {
    static selector = 'app-todo-add';

    #handleSubmit = (event: Event) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const title = String(formData.get('title') ?? '').trim();

        if (title === '') {
            return;
        }

        this.dispatchEvent(
            new CustomEvent<TodoAddEventDetail>('todo-add', {
                detail: { title },
                bubbles: true,
                composed: true,
            }),
        );

        form.reset();
        const input = this.querySelector('#todo-title') as HTMLInputElement | null;
        input?.focus();
    };

    static register() {
        if (customElements.get(TodoAdd.selector) === undefined) {
            customElements.define(TodoAdd.selector, TodoAdd);
        }
    }

    connectedCallback() {
        this.#render();
        this.addEventListener('submit', this.#handleSubmit);
    }

    disconnectedCallback() {
        this.removeEventListener('submit', this.#handleSubmit);
    }

    #render() {
        this.innerHTML = /*html*/ `
            <form class="todo-add" aria-label="Nueva tarea">
                <label for="todo-title">Nueva tarea</label>
                <div class="todo-add__controls">
                    <input
                        id="todo-title"
                        name="title"
                        type="text"
                        maxlength="120"
                        placeholder="Escribe una tarea"
                        required
                    />
                    <button type="submit">Crear</button>
                </div>
            </form>
        `;
    }
}
