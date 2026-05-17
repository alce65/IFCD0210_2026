import { fireEvent, screen } from '@testing-library/dom';
import { TodoItem } from './todo-item';

const todoFixture = {
    id: 'todo-1',
    title: 'Aprender Vitest',
    completed: false,
    createdAt: '2026-05-17T10:00:00.000Z',
};

describe('TodoItem component', () => {
    const renderTodoItem = () => {
        TodoItem.register();
        const element = document.createElement(TodoItem.selector) as TodoItem;
        document.body.append(element);
        element.todo = todoFixture;
        return element;
    };

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('renders the todo title and its completion state', () => {
        renderTodoItem();

        const checkbox = screen.getByRole('checkbox', {
            name: /aprender vitest/i,
        }) as HTMLInputElement;

        expect(screen.getByText(todoFixture.title)).toBeInstanceOf(HTMLElement);
        expect(checkbox.checked).toBe(false);
    });

    test('emits todo-toggle when the checkbox changes', () => {
        const element = renderTodoItem();
        const onToggle = vi.fn();
        element.addEventListener('todo-toggle', onToggle);

        fireEvent.click(
            screen.getByRole('checkbox', {
                name: /aprender vitest/i,
            }),
        );

        expect(onToggle).toHaveBeenCalledTimes(1);
        expect(
            (onToggle.mock.calls[0][0] as CustomEvent<{ id: string }>).detail,
        ).toEqual({
            id: todoFixture.id,
        });
    });

    test('emits todo-remove when the delete button is pressed', () => {
        const element = renderTodoItem();
        const onRemove = vi.fn();
        element.addEventListener('todo-remove', onRemove);

        fireEvent.click(
            screen.getByRole('button', {
                name: /eliminar tarea/i,
            }),
        );

        expect(onRemove).toHaveBeenCalledTimes(1);
        expect(
            (onRemove.mock.calls[0][0] as CustomEvent<{ id: string }>).detail,
        ).toEqual({
            id: todoFixture.id,
        });
    });
});
