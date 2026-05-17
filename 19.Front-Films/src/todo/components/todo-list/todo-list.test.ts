import { screen } from '@testing-library/dom';
import { TodoList } from './todo-list';

const todosFixture = [
    {
        id: 'todo-1',
        title: 'Planificar componentes',
        completed: false,
        createdAt: '2026-05-17T10:00:00.000Z',
    },
    {
        id: 'todo-2',
        title: 'Escribir tests',
        completed: true,
        createdAt: '2026-05-17T11:00:00.000Z',
    },
];

describe('TodoList component', () => {
    const renderTodoList = () => {
        TodoList.register();
        const element = document.createElement(TodoList.selector) as TodoList;
        document.body.append(element);
        return element;
    };

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('shows an empty state when there are no todos', () => {
        renderTodoList();

        expect(
            screen.getByText(/no hay tareas todavia/i),
        ).toBeInstanceOf(HTMLElement);
    });

    test('renders a todo item for each received todo', () => {
        const element = renderTodoList();

        element.todos = todosFixture;

        expect(screen.getByText(todosFixture[0].title)).toBeInstanceOf(
            HTMLElement,
        );
        expect(screen.getByText(todosFixture[1].title)).toBeInstanceOf(
            HTMLElement,
        );
        expect(screen.getAllByRole('checkbox')).toHaveLength(2);
    });
});
