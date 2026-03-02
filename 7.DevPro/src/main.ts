import { footer } from '@/components/footer/footer';
import { home } from '@/pages/home/home';
import './style.css';

const setTemplate = () => {
    return /*html*/ `
        <header>
           <nav>
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/about">About</a>
            </nav>
        </header>
        <main></main>
        <app-footer></app-footer>
    `;
};

const target = document.querySelector('#app');
if (target) {
    target.innerHTML = setTemplate();
}



footer();
home();
