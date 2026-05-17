import { screen, waitFor } from '@testing-library/dom';
import { TodosRepository } from '../../../core/repositories/todos-repository';
import { TodoContainer } from './todo-container';

const todoFixture = {
    id: 'todo-1',
    title: 'Conectar el contenedor',
    completed: false,
    createdAt: '2026-05-17T10:00:00.000Z',
};

describe('TodoContainer component', () => {
    const renderTodoContainer = () => {
        TodoContainer.register();
        const element = document.createElement(
            TodoContainer.selector,
        ) as TodoContainer;
        document.body.append(element);
        return element;
    };

    afterEach(() => {
        document.body.innerHTML = '';
        vi.restoreAllMocks();
    });

    test('loads the saved todos on connect', async () => {
        vi.spyOn(TodosRepository.prototype, 'getAll').mockResolvedValue([
            todoFixture,
        ]);

        renderTodoContainer();

        await waitFor(() => {
            expect(screen.getByText(todoFixture.title)).toBeInstanceOf(
                HTMLElement,
            );
        });
        expect(screen.getByText('1 tarea pendiente')).toBeInstanceOf(
            HTMLElement,
        );
    });

    test('handles todo-add events and refreshes the list', async () => {
        vi.spyOn(TodosRepository.prototype, 'getAll').mockResolvedValue([]);
        const createSpy = vi
            .spyOn(TodosRepository.prototype, 'create')
            .mockResolvedValue([todoFixture]);

        const element = renderTodoContainer();

        await waitFor(() => {
            expect(
                screen.getByText(/no hay tareas todavia/i),
            ).toBeInstanceOf(HTMLElement);
        });

        const addElement = element.querySelector('app-todo-add') as HTMLElement;
        addElement.dispatchEvent(
            new CustomEvent('todo-add', {
                detail: { title: todoFixture.title },
                bubbles: true,
                composed: true,
            }),
        );

        await waitFor(() => {
            expect(createSpy).toHaveBeenCalledWith(todoFixture.title);
        });
        expect(screen.getByText(todoFixture.title)).toBeInstanceOf(HTMLElement);
        expect(screen.getByText('1 tarea pendiente')).toBeInstanceOf(
            HTMLElement,
        );
    });
});
