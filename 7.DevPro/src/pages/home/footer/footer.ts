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

export const footer = () => {
    const selector = 'app-home-footer';
    const template = /*html*/ `
        <p class="read-the-docs">
          Click on the Vite and TypeScript logos to learn more
        </p>
    `;

    const element = document.createElement('footer');
    element.classList.add('home-footer');
    element.innerHTML = template;

    // Agrega lógica (eventos, etc.)

    // Agrega el elemento / elementos al DOM

    document.querySelector(selector)?.replaceWith(element);
}
