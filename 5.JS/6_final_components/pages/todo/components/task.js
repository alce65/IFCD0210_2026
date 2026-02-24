export const createTaskElement = (task) => {
    const template =
        /*html*/
        `
            <li>
                <article title="${task.id}">
                <header>
                    <h3>${task.title}</h3>
                </header>

                <label><input type="checkbox" ${task.isCompleted ? "checked" : ""} />
                    ${task.isCompleted ? "terminada" : "en curso"}
                </label>
                <p>${task.description}</p>
                <footer>
                    <address>
                    ${task.owner}
                    </address>
                </footer>
                <button>Borrar</button>
                </article>
            </li>`;

    const parentElement = document.createElement("parent");
    parentElement.innerHTML = template;
    let element = parentElement.firstElementChild;

    element.querySelector("button").addEventListener("click", () => {
        console.log("borrando tarea", task.id);
        const event = new CustomEvent("taskDeleted", { detail: task });
        document.dispatchEvent(event);
        element.remove();
    });

    element
        .querySelector("input[type=checkbox]")
        .addEventListener("change", (event) => {
            const isChecked = event.target.checked;
            console.log("cambiando estado de tarea", task.id, isChecked);
            task.isCompleted = isChecked 
            const eventChange = new CustomEvent("taskStatusChanged", {
                detail: { ...task},
            });
            element = createTaskElement(task)
            document.dispatchEvent(eventChange);
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
        taskElement.replaceWith(createTaskElement(task));
    });

    return;
};
