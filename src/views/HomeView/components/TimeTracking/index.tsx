import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { TaskTracker } from "@/components";
import { useTask } from "@/hooks";

export default function TimeTracking() {
  const { closeTask, selectedTask } = useTask();

  const onClickHide = () => {
    closeTask();
  };

  return (
    <React.Fragment>
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
          onClick={onClickHide}
          endIcon={<ArrowForward />}
        >
          Hide Window
        </Button>
      </Stack>
      <TaskTracker task={selectedTask} />
    </React.Fragment>
  );
}
