"use client";

import { tTask } from "@/types";
import { Done, Pause } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Icon,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";

interface TaskTrackerProps {
  task?: tTask;
}

export default function TaskTracker({ task }: TaskTrackerProps) {
  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        borderRadius: 4,
        bgcolor: "primary.light",
        position: "relative",
        p: 2,
        gap: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Chip
        label={"TIMER IS ON"}
        sx={{
          color: "white",
          bgcolor: orange[500],
          borderRadius: 2,
          width: "fit-content",
          fontSize: "0.8rem",
          fontWeight: "bold",
          position: "absolute",
          top: 8,
          left: 8,
        }}
      />
      <Typography
        variant="overline"
        textTransform="none"
        textAlign="center"
        component="div"
        width="100%"
      >
        Task #{task?.id}
      </Typography>
      <Typography
        variant="h6"
        fontWeight="bold"
        component="div"
        width="100%"
        textAlign={"center"}
      >
        {task?.title}
      </Typography>
      <Typography
        fontWeight={"light"}
        component="div"
        variant="h4"
        width="100%"
        textAlign={"center"}
      >
        {task?.time}
      </Typography>
      <Stack
        direction={"row"}
        p={1}
        gap={2}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
        sx={{
          borderRadius: 8,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Button
          variant="text"
          disableRipple
          disableFocusRipple
          disableTouchRipple
          sx={{ color: "primary.main" }}
          startIcon={
            <Box
              sx={{
                bgcolor: "primary.main",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
                width: 34,
                height: 34,
              }}
            >
              <Pause fontSize={"small"} />
            </Box>
          }
        >
          Pause
        </Button>
        <Divider orientation="vertical" flexItem sx={{ my: 1 }} />
        <Button
          variant="text"
          disableRipple
          disableTouchRipple
          sx={{ color: "secondary.main" }}
          disableFocusRipple
          startIcon={
            <Box
              sx={{
                bgcolor: "secondary.main",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
                width: 34,
                height: 34,
              }}
            >
              <Done fontSize={"small"} />
            </Box>
          }
        >
          Complete
        </Button>
      </Stack>
    </Card>
  );
}
