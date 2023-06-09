import React from "react";
import {
  Stack,
  Typography,
  IconButton,
  Divider,
  ListItem,
  Box,
  Button,
  Zoom,
  Grow,
} from "@mui/material";
import { MoreHoriz, Task } from "@mui/icons-material";
import { USERS } from "@/constants/users";
import { TaskDescription, UserAvatar, UserInfo } from "@/components";
import { useTask } from "@/hooks";

export default function TaskDetails() {
  const { deleteTask, selectedTask } = useTask();

  const onClickDelete = () => {
    if (selectedTask) deleteTask(selectedTask);
  };

  return (
    <React.Fragment>
      <Grow in={true}>
        <Box>
          <Stack
            direction={"row"}
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="h6" fontWeight={900}>
              Task Description
            </Typography>
            <IconButton
              sx={{
                bgcolor: "primary.light",
                borderRadius: 2,
                color: "primary.main",
              }}
              size="small"
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
              <UserAvatar srcSet={selectedTask?.contractor.src || ""} />
              <UserInfo
                primary={"Contractor"}
                secondary={
                  selectedTask?.contractor.name +
                  " " +
                  selectedTask?.contractor.surname?.charAt(0)
                }
              />
            </ListItem>
            <Divider orientation="vertical" flexItem sx={{ my: 2 }} />
            <ListItem disableGutters>
              <UserInfo
                primary={"Author"}
                secondary={
                  selectedTask?.author.name +
                  " " +
                  selectedTask?.author.surname?.charAt(0)
                }
                align="right"
              />
              <UserAvatar
                sx={{ ml: 2 }}
                srcSet={selectedTask?.author.src || ""}
              />
            </ListItem>
          </Stack>
        </Box>
      </Grow>

      <TaskDescription task={selectedTask} />
      <Stack
        direction={"row"}
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Typography sx={{ opacity: 0.55 }} variant="body2" component="div">
            Created {selectedTask?.createdAt}
          </Typography>
          <Typography sx={{ opacity: 0.55 }} variant="body2" component="div">
            Updated {selectedTask?.updatedAt}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          size="large"
          color="error"
          sx={{
            color: "error.main",
            borderRadius: 50,
            px: 1,
            py: 0,
          }}
          onClick={onClickDelete}
        >
          Delete Task
        </Button>
      </Stack>
    </React.Fragment>
  );
}
