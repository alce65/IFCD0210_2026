import { socials } from '../../data/socials.ts';
import './footer.css'

export class Footer {
    // Propiedades y métodos estáticos
    static selector = 'app-footer';
    static render() {
     document
        .querySelectorAll(Footer.selector)
         .forEach((el) => {
            const f = new Footer()
            el.appendChild(f.element)
         })
    }

    // Propiedades y métodos de instancia
    address = '&copy; 2026 CFD Alcobendas - Curso IF2001';
    list: string;
    template!: string;
    element!: HTMLElement

    constructor(address?: string) {
        this.address = address ?? this.address;
        this.list = socials
            .map(
                (item) => `
                    <li><a href="${item.url}" target="_blank">
                    ${item.icon}</a></li>`,
            )
            .join('');

        this.setTemplate()
        this.setElement()
        console.log('loading footer');
    }

    setTemplate(): void {
        // Devolver siempre un solo elemento
        this.template =  /*html*/ `
         <footer class="footer">
             <ul>${this.list}</ul>
             <address>${this.address}</address>
             <p>${Math.random()}</p>
         </footer>
         `
    }

    setElement(): void  {
        const parentElement = document.createElement("parent");
        console.log(typeof this.template, this.template)
        parentElement.innerHTML = this.template;
        if (parentElement.children.length > 1) {
            throw new Error('Componente incorrecto...')
        }
        this.element = parentElement.firstElementChild as HTMLElement;
    }
}





