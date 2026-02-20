import TASKS from "../../data/data-tasks.js";
import { task } from "./task.js";

export const todoPageInitial = () => {
    console.log("Loaded Todos", TASKS);
    const tasks = [...TASKS];

 
    const setTemplate = () => `
     <section id="todo" class="todo">
        <h2>Tareas</h2>
        <ul>
        ${tasks.map((task) =>{   
            return `<app-task></app-task>`
        }).join("")}
        </ul>
      </section>
     `;

    document.querySelector("main").innerHTML = setTemplate();
    task()
};


export const todoPage = () => {
    console.log("Loaded Todos", TASKS);
    const tasks = TASKS;

    // JSON.parse()

    const setTemplate = () => `
     <section id="todo" class="todo">
        <h2>Tareas</h2>
        <ul>
        ${tasks.map((task) =>{   
            return `<app-task 
                data-id="${task.id}"
                data-title="${task.title}"
                data-owner="${task.owner}"
                data-is-completed="${task.isCompleted}"
                data-description="${task.description}"
            ></app-task>`
        }).join("")}
        </ul>
      </section>
     `;



    document.addEventListener('deleteTask', ({detail}) => {
        console.log('Borrando', detail)
        const i = tasks.findIndex((task) => task.id === detail.id )
        tasks.splice(i, 1)
        console.log(tasks)
    }) 

    document.querySelector("main").innerHTML = setTemplate();
    task()
};
