import { TodosRepository } from './todos-repository';

describe('TodosRepository', () => {
    let repo: TodosRepository;

    beforeEach(() => {
        localStorage.clear();
        repo = new TodosRepository();
    });

    test('returns an empty list when there are no saved todos', async () => {
        await expect(repo.getAll()).resolves.toEqual([]);
    });

    test('creates and stores a trimmed todo', async () => {
        const todos = await repo.create('  Preparar testing con Vitest  ');

        expect(todos).toHaveLength(1);
        expect(todos[0]).toMatchObject({
            title: 'Preparar testing con Vitest',
            completed: false,
        });

        await expect(repo.getAll()).resolves.toEqual(todos);
    });

    test('toggles the completed state of a todo', async () => {
        const createdTodos = await repo.create('Repasar Custom Elements');
        const [createdTodo] = createdTodos;

        const updatedTodos = await repo.toggle(createdTodo.id);

        expect(updatedTodos[0].completed).toBe(true);
    });

    test('removes a todo by id', async () => {
        const createdTodos = await repo.create('Eliminar una tarea');
        const [createdTodo] = createdTodos;

        const updatedTodos = await repo.remove(createdTodo.id);

        expect(updatedTodos).toEqual([]);
        await expect(repo.getAll()).resolves.toEqual([]);
    });
});
