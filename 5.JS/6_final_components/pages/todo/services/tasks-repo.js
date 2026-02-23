import TASKS from "../../../data/data-tasks.json" with { type: "json" };

export const getAllTasksSync = () => [...TASKS];

const URL = "http://localhost:3000/tasks";

export const getAllTasks = async () => {
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error(response.status + " " + response.statusText);
    }
    // const data = await  response.json()
    // return data
    return response.json();
};

export const getAllTasksOldStyle = () => {
    return fetch(URL).then((response) => {
        if (!response.ok) {
            throw new Error(response.status + " " + response.statusText);
        }
        return response.json();
    });
};

export const createTask = async (task) => {
    const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            "Content-type": "application/json",
        },

    });
    if (!response.ok) {
        throw new Error(response.status + " " + response.statusText);
    }
    return response.json();
};

export const deleteTask = async ({ id }) => {
    const url = URL + "/" + id;
    const response = await fetch(url, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error(response.status + " " + response.statusText);
    }
    return response.json();
};

export const updateTask = async ({ id, ...task }) => {
    const url = URL + "/" + id;
    const response = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify(task),
        headers: {
            "Content-type": "application/json",
        },
    });
    if (!response.ok) {
        throw new Error(response.status + " " + response.statusText);
    }
    return response.json();
};



