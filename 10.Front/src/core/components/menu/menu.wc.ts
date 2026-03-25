import { navigate, type Route } from '../../router/router.js';
import './menu.css';

type MenuType = 'mobile-menu' | 'full-menu';

export class Menu extends HTMLElement {
    static #selector = 'app-menu';
    static render(routes: Route[]) {
        customElements.define(Menu.#selector, Menu);
        const elements = document.querySelectorAll(Menu.#selector);
        elements.forEach((element) => {
            (element as Menu).routes = routes;
        });
    }

    #menuOptions: Route[] = [];
    #menuType: MenuType = 'full-menu';
    #template!: string;

    set routes(menuOptions: Route[]) {
        this.#menuOptions = menuOptions;
        this.#setTemplate();
        this.#setElement();
    }

    constructor() {
        super();
        this.#menuType = this.dataset.type as MenuType;

        // Tras  el constructor
        // LLamar a set Routes(menuOptions) para 
        // inyectar las rutas y que se renderice el menu;
    }

    #setTemplate() {
        if (this.#menuType === 'mobile-menu') {
            this.#template = /*html*/ `
            <menu class="mobile-menu">
                <li>
                    <a href="#" id="menu-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        fill="currentColor"
                    >
                        <title>Icono del menu</title>
                        <path
                        d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"
                        />
                    </svg>
                    </a>
                </li>
            </menu>
        `;
            return;
        }
        // else {
        this.#template = /*html*/ `
            <menu class="menu ${this.#menuType}">
                ${this.#menuOptions
                    .map(
                        (option) =>
                            `<li><a href="${option.path}">${option.label}</a></li>`,
                    )
                    .join('')}
            </menu>
        `;
    }

    #setElement() {
        this.innerHTML = this.#template;

        const menuIconElement = this.querySelector('#menu-icon');
        if (menuIconElement) {
            menuIconElement.addEventListener(
                'click',
                this.#handleDialogMenu.bind(this),
            );
        } else {
            this.addEventListener('click', this.#handleDialogMenu.bind(this));
        }

        document.body.addEventListener(
            'click',
            this.#handleDialogMenu.bind(this),
        );
    }

    #handleDialogMenu(event: Event) {
        console.log('Click', event);
        const current = event.currentTarget as HTMLElement;
        const target = event.target as HTMLAnchorElement;
        event.stopPropagation();
        // console.log("Current");
        // console.dir(current);
        // console.log("Target");
        // console.dir(target);
        const menuDialogElement = document.querySelector(
            '#menu-dialog',
        ) as HTMLDialogElement;
        if (current.localName === 'a') {
            // Menu-icon
            event.preventDefault();
            menuDialogElement.showModal();
        } else if (current.localName === 'app-menu') {
            // Opción del menú
            event.preventDefault();
            menuDialogElement.close();
            navigate(target.href);
            // const linkHref = event.target.getAttribute("href");
            // navigate(linkHref);
        } else {
            menuDialogElement.close();
        }
    }
}
