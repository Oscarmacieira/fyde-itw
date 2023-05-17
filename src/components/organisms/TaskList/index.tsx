import { AvatarList, TaskListCard } from "@/components/molecules";
import { useBreakpoints } from "@/hooks";
import { Add, GridView, Toc } from "@mui/icons-material";
import {
  Box,
  Collapse,
  Divider,
  Grow,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { addButtonStyles } from "./style";
import { USERS } from "@/constants/users";
import { tTask } from "@/types";
import { TransitionGroup } from "react-transition-group";

interface TaskListProps {
  tasks?: tTask[];
  selectedTask?: tTask;
  onClickTask?: (task: tTask) => void;
  onClickOpen?: (task: tTask) => void;
  onClickDelete?: (task: tTask) => void;
  onClickClone?: (task: tTask) => void;
}

export default function TaskList({
  tasks,
  selectedTask,
  onClickTask,
  onClickOpen,
  onClickDelete,
  onClickClone,
}: TaskListProps) {
  const { isSm } = useBreakpoints();

  return (
    <React.Fragment>
      <Toolbar sx={{ px: 0, py: 0 }}>
        <Stack
          width={"100%"}
          direction={isSm ? "column" : "row"}
          gap={0}
          display={"flex"}
          alignItems={isSm ? "flex-start" : "center"}
        >
          <Stack width={"100%"} direction={"row"} gap={2} alignItems="center">
            <Stack direction="row" alignItems="center">
              <Typography
                variant={isSm ? "h6" : "h4"}
                fontWeight={"light"}
                component="div"
              >
                Tasks List
              </Typography>

              <IconButton sx={addButtonStyles}>
                <Add fontSize={isSm ? "small" : "medium"} />
              </IconButton>
            </Stack>
            {isSm && <Box sx={{ flexGrow: 1 }} />}

            <AvatarList users={USERS} />
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Stack
            direction="row"
            gap={2}
            alignItems="center"
            width={"100%"}
            justifyContent={isSm ? "flex-start" : "flex-end"}
          >
            <Typography
              variant="subtitle1"
              fontWeight={"light"}
              width={"fit-content"}
              sx={{ opacity: 0.5 }}
              fontSize={"large"}
            >
              200 elements
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ my: 1 }} />
            <IconButton sx={{ borderRadius: 4 }}>
              <GridView />
            </IconButton>
            <IconButton
              sx={{
                borderRadius: 2,
                color: "primary.main",
                boxShadow: "0px 0px 40px 0px rgba(0,0,0,0.09);",
              }}
            >
              <Toc />
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
      <Stack direction={"column"} width={"100%"}>
        <TransitionGroup>
          {tasks?.map((task, index) => (
            <Grow in={true} timeout={index * 100} key={task.id}>
              <Collapse
                sx={{
                  gap: 2,
                  py: 1,
                }}
                in={true}
              >
                <TaskListCard
                  task={task}
                  selected={task === selectedTask}
                  onClick={() => onClickTask?.(task)}
                  onClickClone={() => onClickClone?.(task)}
                  onClickDelete={() => onClickDelete?.(task)}
                  onClickOpen={() => onClickOpen?.(task)}
                />
              </Collapse>
            </Grow>
          ))}
        </TransitionGroup>

        <Divider sx={{ mb: 2, mt: 1 }} />
        <TaskListCard task={tasks?.[0]} done={true} selected={false} />
      </Stack>
    </React.Fragment>
  );
}
