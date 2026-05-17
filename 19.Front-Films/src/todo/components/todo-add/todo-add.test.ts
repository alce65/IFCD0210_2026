import { fireEvent, screen } from '@testing-library/dom';
import { TodoAdd } from './todo-add';

describe('TodoAdd component', () => {
    const renderTodoAdd = () => {
        TodoAdd.register();
        const element = document.createElement(TodoAdd.selector);
        document.body.append(element);
        return element;
    };

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('emits a todo-add event with the entered title', () => {
        const element = renderTodoAdd();
        const onAdd = vi.fn();
        element.addEventListener('todo-add', onAdd);

        const input = screen.getByRole('textbox', {
            name: /nueva tarea/i,
        }) as HTMLInputElement;
        const form = screen.getByRole('form', {
            name: /nueva tarea/i,
        });

        fireEvent.input(input, {
            target: { value: 'Aprender testing library' },
        });
        fireEvent.submit(form);

        expect(onAdd).toHaveBeenCalledTimes(1);
        expect(
            (onAdd.mock.calls[0][0] as CustomEvent<{ title: string }>).detail,
        ).toEqual({
            title: 'Aprender testing library',
        });
        expect(input.value).toBe('');
    });

    test('does not emit a todo-add event for blank titles', () => {
        const element = renderTodoAdd();
        const onAdd = vi.fn();
        element.addEventListener('todo-add', onAdd);

        const form = screen.getByRole('form', {
            name: /nueva tarea/i,
        });

        fireEvent.submit(form);

        expect(onAdd).not.toHaveBeenCalled();
    });
});
