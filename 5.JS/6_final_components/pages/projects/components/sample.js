export const sample = () => {
    console.log("loading sample");
    const selector = "app-sample";

    const setTemplate = () => {
        const template =
            /*html*/
            `<div class="sample-component">
                <p>Sample Component</p>
                <button>Borrar</button>   
            </div>`;
        return template;
    };
    document.querySelector(selector).outerHTML = setTemplate();

    const button = document.querySelector(".sample-component button");
    button.addEventListener("click", () => {
        console.log("borrando componente");
        document.querySelector(selector).remove();
    });
};

export const sample2 = () => {
    console.log("loading sample");
    const selector = "app-sample";

    const setElement = () => {
        const template =
            /*html*/
            `<div class="sample-component">
                <p>Sample Component</p>
                <button>Borrar</button>
                <button>Actualizar</button>   
            </div>`;
        const parentElement = document.createElement("parent");
        parentElement.innerHTML = template;
        const element = parentElement.firstElementChild;
        element.querySelectorAll("button").forEach((button) => {
            button.addEventListener("click", () => {
                if (button.textContent === "Borrar") {
                    console.log("borrando componente");
                    element.remove();
                } else if (button.textContent === "Actualizar") {
                    console.log("actualizando componente");
                    element.querySelector("p").textContent =
                        "Componente actualizado";
                }
            });
        });

        return element;
    };

    document
        .querySelectorAll(selector)
        .forEach((el) => el.replaceWith(setElement()));
};
