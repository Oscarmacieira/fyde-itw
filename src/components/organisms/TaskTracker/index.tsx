"use client";

import { Done, Pause } from "@mui/icons-material";
import {
  Button,
  Card,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export default function TaskTracker() {
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
        alignItems: "center",
      }}
    >
      <Typography
        variant="overline"
        textTransform="none"
        textAlign="center"
        component="div"
        width="100%"
      >
        Task #78
      </Typography>
      <Typography
        variant="h6"
        fontWeight="bold"
        component="div"
        width="100%"
        textAlign={"center"}
      >
        Create project page with tabs
      </Typography>
      <Typography
        fontWeight={"light"}
        component="div"
        variant="h4"
        width="100%"
        textAlign={"center"}
      >
        01:34
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
            <IconButton
              disableRipple
              disableFocusRipple
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Pause fontSize={"small"} />
            </IconButton>
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
            <IconButton
              disableRipple
              disableFocusRipple
              sx={{ bgcolor: "secondary.main", color: "white" }}
            >
              <Done fontSize={"small"} />
            </IconButton>
          }
        >
          Complete
        </Button>
      </Stack>
    </Card>
  );
}
