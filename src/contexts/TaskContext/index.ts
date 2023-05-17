"use client";

import { TASKS } from "@/constants/tasks";
import { tTaskContext } from "@/types";
import React from "react";

const TaskContext = React.createContext<tTaskContext>({
  tasks: TASKS,
  selectedTask: TASKS[1],
  selectTask: () => {},
  closeTask: () => {},
  openTask: () => {},
  deleteTask: () => {},
  cloneTask: () => {},
});

export default TaskContext;
