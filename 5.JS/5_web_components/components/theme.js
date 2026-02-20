const handleChange = (event) => {
    const element = event.target;
    themeColor = element.checked ? "dark" : "light";
    console.log(themeColor);
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(themeColor)
};

export let themeColor = "light";

export const theme = () => {
    const selector = "app-theme";

    const setTemplate = () => `<label for="theme-toggle">
            <input type="checkbox" class="switch" id="theme-toggle">
            Tema oscuro
        </label>`;

    document.querySelector(selector).outerHTML = setTemplate();

    const toggleElement = document.querySelector("#theme-toggle");
    toggleElement.addEventListener("change", handleChange);
};
