import type { Todo } from '../../../core/entities/todo.entity';
import { TodosRepository } from '../../../core/repositories/todos-repository';
import { TodoAdd } from '../todo-add/todo-add';
import { TodoList } from '../todo-list/todo-list';
import './todo-container.css';

interface TodoAddDetail {
    title: string;
}

interface TodoActionDetail {
    id: string;
}

export class TodoContainer extends HTMLElement {
    static selector = 'app-todo-container';

    #repo = new TodosRepository();
    #todos: Todo[] = [];
    #handleAdd = async (event: Event) => {
        const { title } = (event as CustomEvent<TodoAddDetail>).detail;
        this.#todos = await this.#repo.create(title);
        this.#syncList();
    };

    #handleToggle = async (event: Event) => {
        const { id } = (event as CustomEvent<TodoActionDetail>).detail;
        this.#todos = await this.#repo.toggle(id);
        this.#syncList();
    };

    #handleRemove = async (event: Event) => {
        const { id } = (event as CustomEvent<TodoActionDetail>).detail;
        this.#todos = await this.#repo.remove(id);
        this.#syncList();
    };

    static register() {
        if (customElements.get(TodoContainer.selector) === undefined) {
            customElements.define(TodoContainer.selector, TodoContainer);
        }

        TodoAdd.register();
        TodoList.register();
    }

    connectedCallback() {
        this.#renderShell();
        this.#bindEvents();
        void this.#loadTodos();
    }

    disconnectedCallback() {
        this.removeEventListener('todo-add', this.#handleAdd as EventListener);
        this.removeEventListener(
            'todo-toggle',
            this.#handleToggle as EventListener,
        );
        this.removeEventListener(
            'todo-remove',
            this.#handleRemove as EventListener,
        );
    }

    #renderShell() {
        this.innerHTML = /*html*/ `
            <section class="todo-container">
                <app-todo-add></app-todo-add>
                <p class="todo-container__status" data-role="todo-status"></p>
                <app-todo-list></app-todo-list>
            </section>
        `;
    }

    #bindEvents() {
        this.addEventListener('todo-add', this.#handleAdd as EventListener);
        this.addEventListener(
            'todo-toggle',
            this.#handleToggle as EventListener,
        );
        this.addEventListener(
            'todo-remove',
            this.#handleRemove as EventListener,
        );
    }

    async #loadTodos() {
        this.#todos = await this.#repo.getAll();
        console.log(this.#todos)
        //this.#syncList();
    }

    #syncList() {
        const listElement = this.querySelector(TodoList.selector) as
            | TodoList
            | null;
        const statusElement = this.querySelector(
            '[data-role="todo-status"]',
        ) as HTMLElement | null;

        if (listElement !== null) {
            listElement.todos = this.#todos;
        }

        if (statusElement !== null) {
            statusElement.textContent = this.#getStatusText();
        }
    }

    #getStatusText() {
        const pendingTodos = this.#todos.filter((todo) => !todo.completed).length;

        if (pendingTodos === 1) {
            return '1 tarea pendiente';
        }

        return `${pendingTodos} tareas pendientes`;
    }
}
