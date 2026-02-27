import { hero } from '@/components/hero/hero';
import './style.css';

import { counter } from '@/components/counter/counter';
import { footer } from './components/footer/footer';

const setTemplate = () => {
    return /*html*/ `
    <div>
        <app-hero></app-hero>
        <app-counter></app-counter>
        <app-footer></app-footer>
    </div>
    `;
};

const target = document.querySelector('#app');
if (target) {
    target.innerHTML = setTemplate();
}

hero();
counter();
footer();
