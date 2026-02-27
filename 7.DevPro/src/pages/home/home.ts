import { hero } from '@/pages/home/hero/hero';
import { counter } from '@/pages/home/counter/counter';
import { footer } from '@/pages/home/footer/footer';

export const home = () => {
    const setTemplate = () => {
        return /*html*/ `
    <section class="home">
        <app-hero></app-hero>
        <app-counter></app-counter>
        <app-home-footer></app-home-footer>
    </section>
    `;
    };

    const target = document.querySelector('main');
    if (target) {
        target.innerHTML = setTemplate();
    }

    hero();
    counter();
    footer();
};
