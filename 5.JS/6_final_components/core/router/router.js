import { homePage } from "../../pages/home/home-page.js";
import { projectsPage } from "../../pages/projects/projects-page.js";
import { contactPage } from "../../pages/contact/contact-page.js";
import { todoPage } from "../../pages/todo/todo-page.js";

export const routes = [
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

// const showRoute = (route) => {
//     if (!route) {
//         route = "home";
//     }
//     const mainElement = document.querySelector("main");
//     document.querySelectorAll("main > section").forEach((section) => {
//         section.hidden = true;
//     });
//     const routeElement = document.querySelector(`main > section#${route}`);
//     if (routeElement) {
//         routeElement.hidden = false;
//     } else {
//         mainElement.innerHTML = `<h2>404 - Página no encontrada</h2>`;
//     }
// };

// export const navigate = (linkHref) => {
//     const location = window.location;
//     const extraPath = location.pathname.split("/").slice(0, -1).join("/");
//     const fullHref = location.origin + extraPath + linkHref;
//     history.pushState({}, "", fullHref);
//     showRoute(linkHref.replace("/", ""));
// };

export const navigate = (url = "", addHistory = true) => {
    console.log("URL for navigate", url);
    console.log(history.state)

    if (history.state?.url  === url) {
        return;
    }

    if (addHistory) {
        history.pushState({ url }, null, url);
    }
    let path = url.split("/").pop();
    const route = routes.find((o) => o.path === "/" + path);

    if (route) {
        route.component();
    }
};

// export function loadPPath() {
//     console.log("Loaded path");
//     const path = window.location.pathname;
//     const route = path.split("/").pop();
//     if (route === "index.html") {
//         showRoute("home");
//     } else {
//         showRoute(route);
//     }
// }
