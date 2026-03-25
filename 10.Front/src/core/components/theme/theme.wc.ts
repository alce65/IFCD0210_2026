import './theme.css';

export class Theme extends HTMLElement {
    static #selector = 'app-theme';
    static render() {
        customElements.define(Theme.#selector, Theme);
    }

    #template!: string;

    constructor() {
        super();
        console.log('loading the theme component');
        this.#setTemplate();
        this.#setElement();
    }

    handleChange(event: Event) {
        const element = event.target as HTMLInputElement;
        const theme = element.checked ? 'dark' : 'light';
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        console.log(theme);
    }

    #setTemplate = () => {
        this.#template =
            /*html*/
            `
        <label for="theme-toggle" class="theme-toggle-wrapper">
            <span>Claro</span>
            <input type="checkbox" class="switch" id="theme-toggle" />
            <span>Oscuro</span>
        </label>
        `;
    };

    #setElement() {
        this.innerHTML = this.#template;

        const toggleElement = this.querySelector(
            '#theme-toggle',
        ) as HTMLElement;
        toggleElement.addEventListener('change', this.handleChange.bind(this));
    }
}
