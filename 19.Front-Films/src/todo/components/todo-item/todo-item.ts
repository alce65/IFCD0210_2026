import { TodoModelSchema, type Todo } from '../../../core/entities/todo.entity';
import './todo-item.css';

interface TodoActionEventDetail {
    id: string;
}

export class TodoItem extends HTMLElement {
    static selector = 'app-todo-item';

    #todo: Todo | null = null;

    constructor(todo: Todo | null = null) {
        super();
        if (todo !== null) {
            this.todo = todo;
        }
    }

    #handleChange = (event: Event) => {
        const target = event.target as HTMLInputElement;

        if (!target.matches('input[type="checkbox"]') || this.#todo === null) {
            return;
        }

        this.dispatchEvent(
            new CustomEvent<TodoActionEventDetail>('todo-toggle', {
                detail: { id: this.#todo.id },
                bubbles: true,
                composed: true,
            }),
        );
    };

    #handleClick = (event: Event) => {
        const target = event.target as HTMLElement;
        const button = target.closest('button[data-action="remove"]');

        if (button === null || this.#todo === null) {
            return;
        }

        this.dispatchEvent(
            new CustomEvent<TodoActionEventDetail>('todo-remove', {
                detail: { id: this.#todo.id },
                bubbles: true,
                composed: true,
            }),
        );
    };

    static register() {
        if (customElements.get(TodoItem.selector) === undefined) {
            customElements.define(TodoItem.selector, TodoItem);
        }
    }

    set todo(value: Todo) {
        this.#todo = TodoModelSchema.parse(value);
        this.#render();
    }

    connectedCallback() {
        this.#render();
        this.addEventListener('change', this.#handleChange);
        this.addEventListener('click', this.#handleClick);
    }

    disconnectedCallback() {
        this.removeEventListener('change', this.#handleChange);
        this.removeEventListener('click', this.#handleClick);
    }

    #render() {
        if (this.#todo === null) {
            this.innerHTML = '';
            return;
        }

        this.innerHTML = /*html*/ `
            <div class="todo-item" role="listitem">
                <div class="todo-item__main">
                    <input
                        id="todo-${this.#todo.id}"
                        type="checkbox"
                        ${this.#todo.completed ? 'checked' : ''}
                    />
                    <label
                        class="todo-item__title ${this.#todo.completed ? 'todo-item__title--completed' : ''}"
                        for="todo-${this.#todo.id}"
                    >
                        ${this.#todo.title}
                    </label>
                </div>
                <button
                    class="todo-item__remove"
                    type="button"
                    data-action="remove"
                    aria-label="Eliminar tarea"
                >
                    Eliminar
                </button>
            </div>
        `;
    }
}
