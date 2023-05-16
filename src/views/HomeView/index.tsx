"use client";

import {
  InfoCard,
  TaskDescription,
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

export default function HomeView() {
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <main>
      <Homebar />

      <Grid container>
        <Grid item xs={12} sm={12} md={8} lg={8} overflow={"scroll"}>
          <ProjectTabs
            value={1}
            handleChange={() => console.log("handleChange")}
          />
          <Divider />
          <InfoCards />
          <TaskList tasks={TASKS} />
          <Footer />
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
          <Stack
            direction={"row"}
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="h5" fontWeight={900} component="div">
              Time Tracking
            </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: "primary.main",
                borderRadius: 50,
              }}
              endIcon={<ArrowForward />}
            >
              Hide Window
            </Button>
          </Stack>
          <TaskTracker />
          <Stack
            direction={"row"}
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="h5" fontWeight={900} component="div">
              Task Description
            </Typography>
            <IconButton
              sx={{
                bgcolor: "primary.light",
                borderRadius: 2,
                color: "primary.main",
              }}
            >
              <MoreHoriz />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <ListItem disableGutters>
              <UserAvatar srcSet={USERS[0].src} />
              <UserInfo primary={"Contractor"} secondary={USERS[0].name} />
            </ListItem>
            <Divider orientation="vertical" flexItem />
            <ListItem disableGutters>
              <UserInfo
                primary={"Contractor"}
                secondary={USERS[1].name}
                align="right"
              />
              <UserAvatar sx={{ ml: 2 }} srcSet={USERS[1].src} />
            </ListItem>
          </Stack>
          <TaskDescription />
          <Stack
            direction={"row"}
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <Typography sx={{ opacity: 0.55 }} component="div">
                Created 25 Aug 2021 at 12:00
              </Typography>
              <Typography sx={{ opacity: 0.55 }} component="div">
                Updated 25 Aug 2021 at 12:00
              </Typography>
            </Box>
            <Button
              variant="outlined"
              size="large"
              color="error"
              sx={{
                color: "error.main",
                borderRadius: 50,
              }}
            >
              Delete Task
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </main>
  );
}
