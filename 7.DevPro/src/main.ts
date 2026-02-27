import { footer } from '@/components/footer/footer';
import { home } from '@/pages/home/home';
import './style.css';


const setTemplate = () => {
    return /*html*/ `
    <div>
        <main></main>
        <app-footer></app-footer>
    </div>
    `;
};

const target = document.querySelector('#app');
if (target) {
    target.innerHTML = setTemplate();
}

footer();  
home();
