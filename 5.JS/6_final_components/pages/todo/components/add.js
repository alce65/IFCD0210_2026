const handleForm = (event) => {
    const form = event.target;
    if (event.type === "submit") {
        event.preventDefault();
        const formData = new FormData(form);
        const task = {
            id: crypto.randomUUID(),
            title: formData.get("title"),
            owner: formData.get("owner"),
            isCompleted: formData.get("isCompleted") === "on" ? true : false,
            description: formData.get("description"),
        };
        console.log("Tarea creada", task);
        const eventCreated = new CustomEvent("taskCreated", { detail: task });
        document.dispatchEvent(eventCreated);
    } else if (event.type === "reset") {
        console.log("Creación de tarea cancelada");
        form.reset();
    }
};

export const addTask = (previousElement) => {
    console.log("loading add-task");
    const selector = "app-add-task";

    const setElement = () => {
        console.dir(previousElement);
        const template =
            /*html*/
            `<div class="add-task-component">
                <h3>Agregar tarea</h3>
                <form>
                    <label class="label">Título:
                        <input type="text" placeholder="Título de la tarea"  name="title" required/>
                    </label>
                    <label class="label">Responsable:
                        <input type="text" placeholder="Responsable de la tarea" name="owner"/>
                    </label>
                    <label>
                        <input type="checkbox" name="isCompleted" disabled/> Completada (actualizar después de crear)
                    </label>
                    <label class="label">Descripción:
                        <textarea placeholder="Descripción de la tarea" name="description"></textarea>
                    </label>
                    <div class="buttons">
                        <button type="submit">Actualizar</button>   
                        <button type="reset">Cancelar</button>
                    </div>
                </form>
            </div>`;

        const parentElement = document.createElement("parent");
        parentElement.innerHTML = template;
        const element = parentElement.firstElementChild;
        element.querySelector("form").addEventListener("submit", (event) => {
            handleForm(event);
            element.replaceWith(previousElement);
        });

        element.querySelector("form").addEventListener("reset", (event) => {
            handleForm(event);
            element.replaceWith(previousElement);
        });

        return element;
    };

    document
        .querySelectorAll(selector)
        .forEach((el) => el.replaceWith(setElement()));
};
