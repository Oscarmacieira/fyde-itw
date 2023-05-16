"use client";

import { AttachFile, KeyboardArrowDown } from "@mui/icons-material";
import { Button, Card, CardMedia, Stack, Typography } from "@mui/material";

export default function TaskDescription() {
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
          Normal Priority
        </Typography>
      </Stack>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </Typography>
      <CardMedia
        src="https://picsum.photos/200/300"
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
