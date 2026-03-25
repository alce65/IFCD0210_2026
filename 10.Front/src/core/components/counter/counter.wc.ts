import './counter.css';

export class Counter extends HTMLElement {
    // Propiedades y métodos estáticos
    static selector = 'app-counter';
    static render() {
        if (customElements.get(Counter.selector) === undefined) {
            customElements.define(Counter.selector, Counter);
        }
    }

    // Propiedades y métodos de instancia
    #template!: string;
    counter = 0;
    counterId: string;

    constructor() {
        super();
        this.counterId = this.attributes.getNamedItem('counterId')
            ?.value as string;
        this.#setTemplate();
        this.#setElement();
    }

    #setTemplate(): void {
        // Devolver siempre un solo elemento
        this.#template = /*html*/ `
         <div class="counter">
             <h3>Counter v2 - ${this.counterId}</h3>
             <button>Click: ${this.counter}</button>
         </div>
         `;
    }

    #setElement(): void {
        // Convertimos el template en elemento
        this.innerHTML = this.#template;
        this.querySelector('button')?.addEventListener('click', () => {
            this.counter++;
            console.log(this.counter);
            this.#setTemplate();
            this.#setElement();
        });
    }
}
