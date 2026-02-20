import { theme } from "./theme.js";

export const header = () => {
    const selector = "app-header";

    const setElement = () => {
        const template =
            /*html*/
            `<header class="header">
        <nav>
            <app-menu data-type="mobile-menu"></app-menu>
            <app-menu data-type="full-menu"></app-menu>
        </nav>
        <dialog class="menu-dialog" id="menu-dialog">
            <nav>
                <app-menu></app-menu>
            </nav>
        </dialog>
        <app-theme></app-theme>
    </header>
    `;

        const parentElement = document.createElement("parent");
        parentElement.innerHTML = template;
        const element = parentElement.firstElementChild;
        return element;
    };

    document
        .querySelectorAll(selector)
        .forEach((el) => el.replaceWith(setElement()));
    theme();
};
