/* eslint-disable @typescript-eslint/no-extraneous-class */

export class MainView {

    static render = (name: string) => {
        const template = /*html*/`
            <main>
                <p>${name}</p>
            </main>
            `;
        return template;
    };
}



