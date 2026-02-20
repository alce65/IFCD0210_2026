import TASKS from "../../../data/data-tasks.json" with {type: 'json'};

export const getAllTasksSync = () => [...TASKS]

// export const getAllTasks = async () => [...TASKS]
