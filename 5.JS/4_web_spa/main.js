export let theme = "light";

const navigate = (url = "") => {
    let path = url.split("/").pop();
    history.pushState({}, null, path)
    if(!path) path = 'home'
    // console.log("navegando a " + path);
    const sectionElements = document.querySelectorAll('main>section')
    // console.log(sectionElements)
    sectionElements.forEach(section =>{
        if (section.id === path) {
            section.hidden = false
        } else {
            section.hidden = true
        }
    })
};

const handleChange = (event) => {
    const element = event.target;
    theme = element.checked ? "dark" : "light";
    console.log(theme);
};

const handleDialogMenu = (event) => {
    console.log("Click", event);
    const current = event.currentTarget;
    // const target = event.target
    event.stopPropagation();
    // console.log('Current')
    // console.dir(current)
    // console.log('Target')
    // console.dir(target)
    const menuDialogElement = document.querySelector("#menu-dialog");
    event.preventDefault();
    if (current.localName === "a") {
        menuDialogElement.showModal();
    } else {
        navigate(event.target.href);
        menuDialogElement.close();
    }
};

export function main() {
    console.log("Loaded main");
    // Theme
    const toggleElement = document.querySelector("#theme-toggle");
    toggleElement.addEventListener("change", handleChange);

    // Menu (Navegación)

    const menuIconElement = document.querySelector("#menu-icon");
    const menuDialogElement = document.querySelector("#menu-dialog menu");

    menuIconElement.addEventListener("click", handleDialogMenu);
    menuDialogElement.addEventListener("click", handleDialogMenu);

    document.body.addEventListener("click", handleDialogMenu);
}
