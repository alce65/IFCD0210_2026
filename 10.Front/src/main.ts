import { App } from './core/components/app/app.wc';
import { navigate } from './core/router/router';

console.log('Load main');

// Componente app
App.render();

// Router
history.replaceState({ url: 'start' }, '', location.pathname);
navigate(location.pathname);
window.addEventListener('popstate', (event) => {
    console.log('Popstate', event);
    console.log('Current location', location.pathname);
    navigate(location.href, false);
});

