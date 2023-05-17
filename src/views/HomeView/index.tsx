"use client";

import {
  InfoCard,
  TaskListCard,
  TaskTracker,
  UserAvatar,
  UserInfo,
} from "@/components";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  ListItem,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";

import ProjectTabs from "./components/ProjectTabs";
import Homebar from "./components/Homebar";
import InfoCards from "./components/InfoCards";
import TaskList from "@/components/organisms/TaskList";
import { TASKS } from "@/constants/tasks";
import Footer from "./components/Footer";
import { ArrowForward, MoreHoriz } from "@mui/icons-material";
import { USERS } from "@/constants/users";
import TimeTracking from "./components/TimeTracking";
import TaskDetails from "./components/TaskDetails";
import { useBreakpoints } from "@/hooks";

export default function HomeView() {
  const { isSm } = useBreakpoints();

  return (
    <main>
      <Homebar />

      <Grid container>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <ProjectTabs
            value={1}
            handleChange={() => console.log("handleChange")}
          />
          <Divider />
          <InfoCards />
          <TaskList tasks={TASKS} />
          {!isSm && <Footer />}
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3.3}
          lg={3.3}
          height={"100%"}
          sx={{ mr: 0, ml: "auto", mt: isSm ? 2 : 0, gap: 2 }}
          display={"flex"}
          flexDirection={"column"}
        >
          <TimeTracking />
          <TaskDetails />
        </Grid>
        {isSm && <Footer />}
      </Grid>
    </main>
  );
}
