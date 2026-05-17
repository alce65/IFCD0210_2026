import { AboutPage } from '../../about/about-page';
import { HomePage } from '../../home/home-page';
import { FilmsPage } from '../../films/films-page';
import { TodoPage } from '../../todo/todo-page';

export interface Route {
    path: string;
    label: string;
    renderComponent: () => void;
}

export const routes: Route[] = [
    {
        path: '/',
        label: 'Inicio',
        renderComponent: HomePage.register,
    },
    {
        path: '/films',
        label: 'Películas',
        renderComponent: FilmsPage.register,
    },
    {
        path: '/todo',
        label: 'Tareas',
        renderComponent: TodoPage.register,
    },
    {
        path: '/about',
        label: 'Acerca de',
        renderComponent: AboutPage.register,
    },
];

export const navigate = (url = '', addHistory = true) => {
    console.log('URL for navigate', url);
    console.log(history.state);

    if (history.state?.url === url) {
        return;
    }

    if (addHistory) {
        history.pushState({ url }, '', url);
    }
    const path = url.split('/').pop() as string;
    const route = routes.find((o) => o.path === '/' + path);

    if (route) {
        route.renderComponent();
    }
};
