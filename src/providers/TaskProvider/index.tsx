"use client";

import { TASKS } from "@/constants/tasks";
import { TaskContext } from "@/contexts";
import { tTask } from "@/types";
import React from "react";

interface TaskProviderProps {
  children: React.ReactNode;
}

const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = React.useState(TASKS);
  const [selectedTask, setSelectedTask] = React.useState<tTask | undefined>(
    TASKS[1]
  );

  const selectTask = (task: tTask | undefined) => {
    setSelectedTask(task);
  };

  const closeTask = () => {
    setSelectedTask(undefined);
  };

  const openTask = (task: tTask) => {
    setSelectedTask(task);
  };

  const deleteTask = (task: tTask) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
    setSelectedTask(undefined);
  };

  const cloneTask = (task: tTask) => {
    const newId = tasks.length;
    const newTask = { ...task, id: newId };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        selectedTask,
        selectTask,
        closeTask,
        openTask,
        deleteTask,
        cloneTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
