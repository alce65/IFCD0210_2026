const handleChange = (event) => {
    const element = event.target;
    const theme = element.checked ? "dark" : "light";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    console.log(theme);
};

export const theme = () => {
    const selector = "app-theme";
    console.log("loading the theme component");

    const setElement = () => {
        const template =
            /*html*/
            `
        <label for="theme-toggle" class="theme-toggle-wrapper">
            <span>Claro</span>
            <input type="checkbox" class="switch" id="theme-toggle" />
            <span>Oscuro</span>
        </label>
        `;

        const parentElement = document.createElement("parent");
        parentElement.innerHTML = template;
        const element = parentElement.firstElementChild;

        const toggleElement = element.querySelector("#theme-toggle");
        toggleElement.addEventListener("change", handleChange);

        return element;
    };

    document
        .querySelectorAll(selector)
        .forEach((el) => el.replaceWith(setElement()));
};
