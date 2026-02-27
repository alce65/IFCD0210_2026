import "./counter.css";

/*
    Vanilla Component

    1. Función
    2. Define un selector (custom element)
    3. Define un template (string)
    4. Renderiza el template en el selector
        - innerHTML (estilo Angular)
        - outerHTML (estilo React)
    5. Agrega lógica (eventos, etc.)
 */

export const counter = () => {
    const selector = 'app-counter';
    const template =
        /*html*/
        `
        <div class="card-counter">
            <button id="counter" type="button">0</button>
        </div>
        `;

    const target = document.querySelector(selector);
    if (!target) {
        throw new Error(
            `No se encontró el elemento con el selector ${selector}`,
        );
    }

    target.outerHTML = template;

    let counter = 0;
    const element = document.querySelector('#counter') as HTMLButtonElement;
    element.addEventListener('click', () => {
        counter++;
        element.innerHTML = `${counter}`;
    });
};
