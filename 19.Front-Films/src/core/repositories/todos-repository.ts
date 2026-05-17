import { TodoModelSchema, type Todo } from '../entities/todo.entity';

const TodoCollectionSchema = TodoModelSchema.array();

export class TodosRepository {
    #storageKey = 'front-films-todos';

    async getAll(): Promise<Todo[]> {
        return this.#read();
    }

    async create(title: string): Promise<Todo[]> {
        const nextTitle = title.trim();

        if (nextTitle === '') {
            throw new Error('Todo title is required');
        }

        const todo = TodoModelSchema.parse({
            id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
            title: nextTitle,
            completed: false,
            createdAt: new Date().toISOString(),
        });

        const todos = [...this.#read(), todo];
        this.#save(todos);
        return todos;
    }

    async toggle(id: string): Promise<Todo[]> {
        const todos = this.#read().map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        );

        this.#save(todos);
        return todos;
    }

    async remove(id: string): Promise<Todo[]> {
        const todos = this.#read().filter((todo) => todo.id !== id);

        this.#save(todos);
        return todos;
    }

    #read(): Todo[] {
        const rawData = localStorage.getItem(this.#storageKey);

        if (rawData === null) {
            return [];
        }

        try {
            return TodoCollectionSchema.parse(JSON.parse(rawData));
        } catch {
            localStorage.removeItem(this.#storageKey);
            return [];
        }
    }

    #save(todos: Todo[]) {
        localStorage.setItem(this.#storageKey, JSON.stringify(todos));
    }
}
