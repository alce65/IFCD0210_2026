export const taskInitial = () => {
    const selector = "app-task";

    const setTemplate = (task) => `<li>${task.title}</li>`;

    document.querySelectorAll(selector).forEach((taskElement) => {
        taskElement.outerHTML = setTemplate({ title: `Task` });
    });
};

export const taskInter = () => {
    const selector = "app-task";

    const setTemplate = (task) => `<li>
            <article title="${task.id}">
            <h3>${task.title}</h3>
            <p>${task.isCompleted ? "terminada" : "en curso"}</p>
            <p>${task.description}</p>
            <footer>
            <address>
            ${task.owner}
            </address>
            </footer>
        </article></li>`;

    document.querySelectorAll(selector).forEach((taskElement) => {
        const task = {
            ...taskElement.dataset, // DOMStringMap
            isCompleted:
                taskElement.dataset.isCompleted === "true" ? true : false,
        };
        taskElement.outerHTML = setTemplate(task);
    });
};

export const createElement = (task) => {
    const template =
        /*html*/
        `<li>
            <article title="${task.id}">
            <h3>${task.title}</h3>
            <p>${task.isCompleted ? "terminada" : "en curso"}</p>
            <p>${task.description}</p>
            <footer>
            <address>
            ${task.owner}
            </address>
            <button>Borrar</button>
            </footer>
        </article></li>`;

    const parentElement = document.createElement("parent");
    parentElement.innerHTML = template;
    const element = parentElement.firstElementChild;

    element.querySelector("button").addEventListener("click", () => {
        element.remove();
        const event = new CustomEvent('deleteTask', {detail: task})
        document.dispatchEvent(event)
    });

    return element;
};

export const task = () => {
    const selector = "app-task";

    document.querySelectorAll(selector).forEach((taskElement) => {
        const task = {
            ...taskElement.dataset, // DOMStringMap
            isCompleted:
                taskElement.dataset.isCompleted === "true" ? true : false,
        };

        taskElement.replaceWith(createElement(task));
    });
};
