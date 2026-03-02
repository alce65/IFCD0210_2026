/*
    Vanilla Component (2)

    1. Función
    2. Define un selector (custom element)
    3. Define un template (string)
    4. Se define una función que crea un elemento HTML a partir del template
    5. Agrega lógica (eventos, etc.) en la función
    4. Renderiza el elemento en el selector / los selectores
        - appendChild (estilo Web Components)
        - replaceWith (estilo React)
 */

export const footer = () => {
    const selector = 'app-home-footer';
    const template = /*html*/ `
        <p class="read-the-docs">
          Click on the Vite and TypeScript logos to learn more
        </p>
    `;

    const createElement = (tag = 'footer', className = 'home-footer') => {
        const element = document.createElement(tag);
        element.classList.add(className);
        element.innerHTML = template;

        // Agrega lógica (eventos, etc.)

        return element;
    };

    // Agrega el elemento / elementos al DOM
    // document.querySelector(selector)?.replaceWith(createElement());

    document
        .querySelectorAll(selector)
        .forEach((el) => el.replaceWith(createElement()));
};
