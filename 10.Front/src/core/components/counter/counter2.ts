// import './footer.css'

interface Props {
    counterId: string
    parent: HTMLElement
}

export class Counter {
    // Propiedades y métodos estáticos
    static selector = 'app-counter';
    static render() {
        document.querySelectorAll<HTMLElement>(Counter.selector).forEach((el) => {
            const customElement = el as HTMLElement & {counterId: string}
            const props: Props = {
                counterId: customElement.attributes.getNamedItem('counterId')?.value as string,
                parent: el,            } 
            const f = new Counter(props);
            el.appendChild(f.element);
        });
    }

    // Propiedades y métodos de instancia
    template!: string;
    element!: HTMLElement;
    parentElement: HTMLElement
    counter = 0;
    counterId: string

    constructor({counterId, parent}: Props) {
        this.parentElement = parent
        this.counterId = counterId
        this.setTemplate();
        this.setElement();
        console.log('loading counter');
    }

    setTemplate(): void {
        // Devolver siempre un solo elemento
        this.template = /*html*/ `
         <div class="counter">
             <h3>Counter v2 - ${this.counterId}</h3>
             <button>Click: ${this.counter}</button>
         </div>
         `;
    }

    setElement(): void {
        // Convertimos el template en elemento
        this.parentElement.innerHTML = this.template;
        if (this.parentElement.children.length > 1) {
            throw new Error('Componente incorrecto...');
        }
        this.element = this.parentElement.firstElementChild as HTMLElement;

        this.element.querySelector('button')?.addEventListener('click', () => {
            this.counter++;
            console.log(this.counter);
            this.setTemplate();
            console.log(this.template);
            this.setElement();
        });
    }
}


