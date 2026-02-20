import { footer } from "./core/components/footer.js";
import { header } from "./core/components/header.js";
import { menu } from "./core/components/menu.js";
import { routes, navigate } from "./core/router/router.js";

export function main() {
    console.log("Loaded main");
    // loadPPath();
    history.replaceState({ url: 'start' }, null, location.pathname);
    navigate(location.pathname);
    // Theme
    // const toggleElement = document.querySelector("#theme-toggle");
    // toggleElement.addEventListener("change", handleChange);

    // Menu (Navegación)
    // const menuIconElement = document.querySelector("#menu-icon");
    // const menuDialogElement = document.querySelector("#menu-dialog menu");

    // Handle del icono 'menu burger'
    // menuIconElement.addEventListener("click", handleDialogMenu);
    // Handle del menu en el dialog
    // menuDialogElement.addEventListener("click", handleDialogMenu);
    // document.body.addEventListener("click", handleDialogMenu);

    // Handle del evento popstate (navegación con el botón 'atrás' del navegador)
    window.addEventListener("popstate", (event) => {
        console.log("Popstate", event);
        console.log("Current location", location.pathname);
        navigate(location.href, false);
    });

    header();
    menu(routes);
    footer();
}
