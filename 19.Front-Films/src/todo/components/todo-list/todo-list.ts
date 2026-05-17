import { TodoModelSchema, type Todo } from '../../../core/entities/todo.entity';
import { TodoItem } from '../todo-item/todo-item';
import './todo-list.css';

export class TodoList extends HTMLElement {
    static selector = 'app-todo-list';

    #todos: Todo[] = [];

    static register() {
        if (customElements.get(TodoList.selector) === undefined) {
            customElements.define(TodoList.selector, TodoList);
        }

        TodoItem.register();
    }

    set todos(value: Todo[]) {
        this.#todos = value.map((todo) => TodoModelSchema.parse(todo));
        this.#render();
    }

    connectedCallback() {
        this.#render();
    }

    #render() {
        if (this.#todos.length === 0) {
            this.innerHTML =
                '<p class="todo-list__empty">No hay tareas todavía</p>';
            return;
        }

        // this.innerHTML = /*html*/ `
        //     <div class="todo-list" role="list" aria-label="Lista de tareas">
        //         ${this.#todos.map(() => '<app-todo-item></app-todo-item>').join('')}
        //     </div>
        // `;

        // this.#hydrateItems();

        this.innerHTML = /*html*/ `
            <div class="todo-list" role="list" aria-label="Lista de tareas">
            </div>
        `;

        this.#hydrateItems();
    }

    // #hydrateItems() {
    //     const itemElements = this.querySelectorAll(TodoItem.selector);
    //     itemElements.forEach((element, index) => {
    //         (element as TodoItem).todo = this.#todos[index];
    //     });
    // }

    #hydrateItems() {
        this.#todos.forEach((todo) => {
            const itemElement = new TodoItem(todo);
            this.appendChild(itemElement);
        });
    }
}
