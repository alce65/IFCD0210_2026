import { View } from '../types/view.ts';


export class HeaderView extends View {
    static viewName = 'header'
    static render() {
        return new HeaderView().template;
    }

    constructor() {
        super(HeaderView.viewName)
        this.setTemplate();
    }

    setTemplate(): void {
        this.template =
            /*html*/
            `
            <style>
                ${this.css}
            </style>
            <header class="header">
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
    }
}
