"use client";

import { Divider, Grid, Slide } from "@mui/material";

import ProjectTabs from "./components/ProjectTabs";
import Homebar from "./components/Homebar";
import InfoCards from "./components/InfoCards";
import TaskList from "@/components/organisms/TaskList";
import Footer from "./components/Footer";
import TimeTracking from "./components/TimeTracking";
import TaskDetails from "./components/TaskDetails";
import { useBreakpoints, useTask } from "@/hooks";
import { tTask } from "@/types";
import React from "react";

export default function HomeView() {
  const { isSm } = useBreakpoints();
  const { tasks, selectedTask, selectTask, cloneTask, deleteTask } = useTask();

  return (
    <React.Fragment>
      <Homebar />
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={selectedTask ? 8 : 12}
          lg={selectedTask ? 8 : 12}
        >
          <ProjectTabs
            value={1}
            handleChange={() => console.log("handleChange")}
          />
          <Divider />
          <InfoCards />
          <TaskList
            selectedTask={selectedTask}
            tasks={tasks}
            onClickTask={selectTask}
            onClickClone={cloneTask}
            onClickDelete={deleteTask}
          />
          {!isSm && <Footer />}
        </Grid>
        <Slide direction="left" in={selectedTask ? true : false} unmountOnExit>
          <Grid
            item
            xs={12}
            sm={12}
            md={3.3}
            lg={3.3}
            height={selectedTask ? "100%" : 0}
            sx={{ mr: 0, ml: "auto", mt: isSm ? 2 : 0, gap: 2 }}
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
          >
            <TimeTracking />
            <TaskDetails />
          </Grid>
        </Slide>

        {isSm && <Footer />}
      </Grid>
    </React.Fragment>
  );
}
