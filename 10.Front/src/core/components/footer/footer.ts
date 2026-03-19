import { socials } from "../../data/socials";
import './footer.css'

export const footer = () => {
    console.log("loading footer");
    const selector = "app-footer";
    const address = "&copy; 2026 CFD Alcobendas - Curso IF2001";

    const list = socials
        .map(
            (item) => `
        <li><a href="${item.url}" target="_blank">
         ${item.icon}</a></li>`,
        )
        .join("");

    const setElement = () => {
        const template =
            /*html*/
            `
        <footer class="footer">
            <ul>${list}</ul>
            <address>${address}</address>
        </footer>
    `;

        const parentElement = document.createElement("parent");
        parentElement.innerHTML = template;
        const element = parentElement.firstElementChild;

        return element as Element;
    };  

    document
        .querySelectorAll(selector)
        .forEach((el) => el.replaceWith(setElement()));
};
