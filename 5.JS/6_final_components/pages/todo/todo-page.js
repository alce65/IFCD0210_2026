import { addTask } from "./components/add.js";
import { task, createTaskElement } from "./components/task.js";
import {
    createTask,
    deleteTask,
    getAllTasks,
    updateTask,
} from "./services/tasks-repo.js";

export const todoPage = async () => {
    let tasks = [];

    const renderTasks = () => {
        const list = createList();
        // elementSection.querySelector('ul').setHTMLUnsafe(list)
        elementSection.querySelector("ul").innerHTML = list;
        task();
    };

    const createList = () => {
        return tasks
            .map((task) => {
                return `<app-task 
                        data-id="${task.id}"
                        data-title="${task.title}"
                        data-owner="${task.owner}"
                        data-is-completed="${task.isCompleted}"
                        data-description="${task.description}"
                    ></app-task>`;
            })
            .join("");
    };

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
                ${createList()}
                </ul>
                <div popover id="error-info"></div>
            </section>
            `;

        const parentElement = document.createElement("parent");
        parentElement.innerHTML = template;
        const element = parentElement.firstElementChild;

        element.querySelector("#add-task").addEventListener("click", () => {
            const addTaskElement = element.querySelector("app-add-task");
            console.dir(addTaskElement);
            console.log("Añadiendo tarea");
            addTask(addTaskElement);
        });
        return element;
    };

    const elementSection = setElement();

    // try {
    //     tasks = await getAllTasks();
    //     renderTasks();
    // } catch (error) {
    //     const pop = elementSection.querySelector('#error-info')
    //     pop.innerHTML = error.message
    //     //pop.showPopover();
    //     console.error(error.message);
    // }

    getAllTasks().then((data) => {
            tasks = data;
            renderTasks();
        }).catch(error => {
            const pop = elementSection.querySelector('#error-info')
            pop.innerHTML = error.message
            pop.showPopover();
            console.error(error.message)
        })

    document.querySelector("main").innerHTML = "";
    document.querySelector("main").appendChild(elementSection);
    document.title = 'Tareas | ' + BASE_TITLE
    task();

    document.addEventListener("taskDeleted", ({ detail }) => {
        deleteTask(detail)
            .then(() => {
                console.log("Tarea eliminada", detail);
                tasks.splice(
                    tasks.findIndex((t) => t.id === detail.id),
                    1,
                );
                console.log("Tareas restantes", tasks);
            })
            .catch((error) => console.error(error.message));
    });

    document.addEventListener("taskStatusChanged", ({ detail }) => {
        updateTask(detail)
            .then(() => {
                console.log("Tarea modificada", detail);
                const index = tasks.findIndex((t) => t.id === detail.id);
                if (index !== -1) {
                    tasks[index] = detail;
                }
                console.log("Tareas actualizadas", tasks);
            })
            .catch((error) => console.error(error.message));
    });

    document.addEventListener("taskCreated", ({ detail }) => {
        console.log("Tarea creada", detail);

        // Async -> actualiza backend

        createTask(detail)
            .then((finalTask) => {
                // Sync -> actualiza el UI y el estado
                tasks.push(finalTask);
                console.log("Tareas actualizadas", tasks);

                const newTaskElement = createTaskElement(finalTask);
                const list = elementSection.querySelector("ul");
                list.insertBefore(newTaskElement, list.firstChild);
                // elementSection.querySelector("ul").appendChild(createTaskElement(detail));
            })
            .catch((error) => console.error(error.message));
    });
};

// No optimistic (conservadora)
// Async -> actualiza backend
// Sync -> actualiza el UI y el estado

// Optimistic
// Sync -> actualiza el UI y el estado
// Async -> actualiza backend
// ¿Error? -> rollback el UI y el estado
