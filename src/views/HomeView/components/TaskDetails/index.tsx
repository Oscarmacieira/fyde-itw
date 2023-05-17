import React from "react";
import {
  Stack,
  Typography,
  IconButton,
  Divider,
  ListItem,
  Box,
  Button,
} from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import { USERS } from "@/constants/users";
import { TaskDescription, UserAvatar, UserInfo } from "@/components";

export default function TaskDetails() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
