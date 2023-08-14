import { compare } from "bcrypt";
import React from "react";

const comparePriority = (taskA, taskB) => {
  return taskA.priority - taskB.priority;
};

const FilterTasks = (tasks, filter) => {
  let allTasksSort = [];
  if (tasks) {
    const finishedTask = tasks.filter((task) => task.status === "finished");
    const arrWithoutFinishedTask = tasks.filter(
      (task) => !finishedTask.includes(task)
    );
    const tasksSortByPriority = arrWithoutFinishedTask.sort(comparePriority);
    tasksSortByPriority.reverse();
    allTasksSort = tasksSortByPriority.concat(finishedTask);
  }

  return allTasksSort;
};
export default FilterTasks;
