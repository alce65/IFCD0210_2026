import { AboutPage } from "../../about/about-page";
import { HomePage } from "../../home/home-page";
import { ProductsPage } from "../../products/products-page";

export interface Route {
    path: string,
    label: string,
    renderComponent: () => void
}

export const routes: Route[] = [
    {
        path: "/",
        label: "Inicio",
        renderComponent: HomePage.render,
    },
    {
        path: "/products",
        label: "Productos",
        renderComponent: ProductsPage.render,
    },
    // {
    //     path: "/todo",
    //     label: "Tareas",
    //     renderComponent: todoPage,
    // },
    {
        path: "/about",
        label: "Acerca de",
        renderComponent: AboutPage.render,
    },
];


export const navigate = (url = "", addHistory = true) => {
    console.log("URL for navigate", url);
    console.log(history.state)

    if (history.state?.url  === url) {
        return;
    }

    if (addHistory) {
        history.pushState({ url }, '', url);
    }
    const path = url.split("/").pop() as string;
    const route = routes.find((o) => o.path === "/" + path);

    if (route) {
        route.renderComponent();
    }
};

