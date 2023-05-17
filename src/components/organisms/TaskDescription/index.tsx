"use client";

import { tTask } from "@/types";
import { AttachFile, KeyboardArrowDown, Task } from "@mui/icons-material";
import { Button, Card, CardMedia, Stack, Typography } from "@mui/material";

interface TaskDescriptionProps {
  task?: tTask;
}

export default function TaskDescription({ task }: TaskDescriptionProps) {
  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        borderRadius: 4,
        bgcolor: "primary.light",
        position: "relative",
        p: 2,
        gap: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        direction={"row"}
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: 2,
          }}
          endIcon={<KeyboardArrowDown />}
        >
          In Progress
        </Button>
        <Typography fontWeight={900}>
          <span style={{ fontSize: "1.5rem", position: "relative", top: 3 }}>
            •
          </span>{" "}
          {task?.priority} Priority
        </Typography>
      </Stack>
      <Typography>{task?.description}</Typography>
      <CardMedia
        src={task?.imgSrc}
        component="img"
        sx={{
          borderRadius: 4,
          width: "100%",
          aspectRatio: "16/7",
        }}
      />
      <Button
        variant="contained"
        disableFocusRipple
        disableElevation
        disableTouchRipple
        color="primary"
        sx={{
          width: "fit-content",
          bgcolor: (theme) => theme.palette.primary.main + "1a",
          borderRadius: 2,
          color: "primary.main",
          transition: "all 0.3s ease",
          "&:hover": {
            bgcolor: (theme) => theme.palette.primary.main,
            color: "white",
          },
        }}
        startIcon={<AttachFile />}
      >
        Attach file
      </Button>
    </Card>
  );
}
