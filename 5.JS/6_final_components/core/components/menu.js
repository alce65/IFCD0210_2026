import { navigate } from "../router/router.js";

const handleDialogMenu = (event) => {
    console.log("Click", event);
    const current = event.currentTarget;
    const target = event.target;
    event.stopPropagation();
    // console.log("Current");
    // console.dir(current);
    // console.log("Target");
    // console.dir(target);
    const menuDialogElement = document.querySelector("#menu-dialog");
    if (current.localName === "a") {
        event.preventDefault();
        menuDialogElement.showModal();
    } else if (current.localName === "menu") {
        event.preventDefault();
        navigate(event.target.href);
        // const linkHref = event.target.getAttribute("href");
        // navigate(linkHref);
        menuDialogElement.close();
    } else {
        menuDialogElement.close();
    }
};

export const menu = (menuOptions) => {
    const selector = "app-menu";
    const setElement = (menuClass = "") => {
        let template = "";
        if (menuClass === "mobile-menu") {
            template = /*html*/ `
            <menu class="mobile-menu">
                <li>
                    <a href="#" id="menu-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        fill="currentColor"
                    >
                        <title>Icono del menu</title>
                        <path
                        d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"
                        />
                    </svg>
                    </a>
                </li>
            </menu>
        `;
        } else {
            template = /*html*/ `
            <menu class="menu ${menuClass}">
                ${menuOptions.map((option) => `<li><a href="${option.path}">${option.label}</a></li>`).join("")}
            </menu>
            `;
        }
        const parentElement = document.createElement("parent");
        parentElement.innerHTML = template;
        const element = parentElement.firstElementChild;
        console.dir(element);

        const menuIconElement = element.querySelector("#menu-icon");
        if (menuIconElement) {
            menuIconElement.addEventListener("click", handleDialogMenu);
        } else {
            element.addEventListener("click", handleDialogMenu);
        }
        return element;
    };

    const elements = document.querySelectorAll(selector);
    elements.forEach((element) =>
        element.replaceWith(setElement(element.dataset.type)),
    );

    document.body.addEventListener("click", handleDialogMenu);
};
