/* eslint-disable @typescript-eslint/no-extraneous-class */
import { FooterView } from './footer/footer.ts';
import { HeaderView } from './header/header.ts';
import { MainView } from './main.ts';

export class HomeView {
    static render = () => {
        const template = /*html*/ `
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>10-front</title>
            <link rel="stylesheet" href="./base.css">
            <link rel="stylesheet" href="./index.css">
            <script type="module" src="/src/main.ts" defer></script>
        </head>
        <body>
            ${HeaderView.render()}
            ${MainView.render('Pepe')}
            ${FooterView.render()}
        </body>
        </html>
        `;
        return template;
    };
}
