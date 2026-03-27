
// Tenemos la extensión es6-string-html
export const render = (name: string) => {
    const template = /*html*/`
        <div>
            <p>${name}</p>
        </div>
        `;
    return template;
};


// Alternativa - Tagged templates

const html = String.raw

export const render2 = (name: string) => {
    const template = html`
        <div>
            <p>${name}</p>
        </div>
        `;
    return template;
};
