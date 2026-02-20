import { addTask } from "./components/add.js";
import { task, createTaskElement } from "./components/task.js";
import { getAllTasksSync } from "./services/tasks-repo.js";

export const todoPage = () => {
    const tasks = getAllTasksSync();
    console.log("Loaded Todos", tasks);

    const setElement = () => {
        const template =
            /*html*/
            `
            <section id="todo" class="todo">
                <h2>Tareas</h2>
                <app-add-task class="add-task-component">
                    <button id="add-task">Añadir tareas</button>
                </app-add-task>
                <ul>
                ${tasks
                    .map((task) => {
                        return `<app-task 
                        data-id="${task.id}"
                        data-title="${task.title}"
                        data-owner="${task.owner}"
                        data-is-completed="${task.isCompleted}"
                        data-description="${task.description}"
                    ></app-task>`;
                    })
                    .join("")}
                </ul>
            </section>
            `;

        const parentElement = document.createElement("parent");
        parentElement.innerHTML = template;
        const element = parentElement.firstElementChild;

        element.querySelector("#add-task").addEventListener("click", () => {
            const addTaskElement = element.querySelector("app-add-task");
            console.dir(addTaskElement)
            console.log("Añadiendo tarea");
            addTask(addTaskElement);
        });
        return element;
    };

    const elementSection = setElement();

    document.querySelector("main").innerHTML = "";
    document.querySelector("main").appendChild(elementSection);
    task();

    document.addEventListener("taskDeleted", ({detail}) => {
        console.log("Tarea eliminada", detail);
        tasks.splice(
            tasks.findIndex((t) => t.id === detail.id),
            1,
        );
        console.log("Tareas restantes", tasks);
    });

    document.addEventListener("taskStatusChanged", ({detail}) => {
        console.log("Tarea modificada", detail);
        const index = tasks.findIndex((t) => t.id === detail.id);
        if (index !== -1) {
            tasks[index] = detail;
        }
        console.log("Tareas actualizadas", tasks);
    });

    document.addEventListener("taskCreated", ({detail}) => {
        console.log("Tarea creada", detail);
        tasks.push(detail);
        console.log("Tareas actualizadas", tasks);
        
        const newTaskElement = createTaskElement(detail);
        const list = elementSection.querySelector("ul");
        list.insertBefore(newTaskElement, list.firstChild);
        // elementSection.querySelector("ul").appendChild(createTaskElement(detail));

    });
};
