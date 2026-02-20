import { footer } from "./components/footer.js";
import { header } from "./components/header.js";
import { menu } from "./components/menu.js";
import { sample } from "./components/sample.js";
import { contactPage } from "./pages/contact.js";
import { homePage } from "./pages/home.js";
import { projectsPage } from "./pages/projects.js";
import { todoPage } from "./pages/todo/todo.js";

const routes = [
    {
        path: "/",
        label: "Inicio",
        component: homePage,
    },
    {
        path: "/projects",
        label: "Proyectos",
        component: projectsPage,
    },
    {
        path: "/todo",
        label: "Tareas",
        component: todoPage,
    },
    {
        path: "/contact",
        label: "Contacto",
        component: contactPage,
    },
];

export const navigate = (url = "") => {
    console.log("URL", url);

    if (location.href === url) {
        return;
    }

    history.pushState({}, null, url);
    let path = url.split("/").pop();
    const route = routes.find((o) => o.path === "/" + path);

    if (route) {
        route.component();
    }

    // switch (path) {
    //     case "home":
    //         homePage();
    //         break;
    //     case "projects":
    //         projectsPage();
    //         break;
    //     case "contact":
    //         contactPage();
    //         break;
    //     default:
    //         break;
    // }
};

export function main() {
    console.log("Loaded main");
    navigate(location.pathname);
    header();
    menu(routes);
    footer();
    sample()

    window.addEventListener("popstate", (event) => {
        console.log(location.path);
        navigate(location.pathname);
    });
}
