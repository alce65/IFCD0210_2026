import typescriptLogo from '@/assets/typescript.svg';
import viteLogo from '@/assets/vite.svg';

/*
    Vanilla Component (2)

    1. Función
    2. Define un selector (custom element)
    3. Define un template (string)
    4. Crea un elemento HTML a partir del template
    5. Agrega lógica (eventos, etc.)
    4. Renderiza el template en el selector
        - appendChild (estilo Web Components)
        - replaceWith (estilo React)
 */

export const hero = () => {
    const selector = 'app-hero';
    const template = /*html*/ `
        <a href="https://vite.dev" target="_blank">
            <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
            <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
        </a>
        <h1>Vite + TypeScript</h1>
    `;

    const element = document.createElement('div');
    element.classList.add('hero');
    element.innerHTML = template;

    // Agrega lógica (eventos, etc.)

    element.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            alert(`Has hecho clic en el enlace: ${link.href}`);
        });
    });

    // Agrega el elemento / elementos al DOM

    // document.querySelector(selector)?.appendChild(element);
    document.querySelector(selector)?.replaceWith(element);

    // document
    //     .querySelectorAll(selector)
    //     .forEach((el) => el.replaceWith(element));

    // const target = document.querySelector(selector);
    // if (!target) {
    //     throw new Error(
    //         `No se encontró el elemento con el selector ${selector}`,
    //     );
    // }

    // target.replaceWith(element);
};
