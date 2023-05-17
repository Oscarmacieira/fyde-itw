import { TaskContext } from "@/contexts";
import { tTaskContext } from "@/types";
import React from "react";

const useTask = (): tTaskContext => {
  const context = React.useContext(TaskContext);

  if (!context) {
    throw Error("useTask must be used inside an TaskProvider");
  }

  return context;
};

export default useTask;
