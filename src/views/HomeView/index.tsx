"use client";

import { SearchBar } from "@/components";
import { Check, KeyboardArrowDownOutlined, Pause } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Theme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import ProjectTabs from "./components/ProjectTabs";

export default function HomeView() {
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <main>
      <Stack
        gap={isSm ? 1 : 2}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        direction={isSm ? "column" : "row"}
      >
        <SearchBar
          inputBaseProps={{
            placeholder: "Search in CRM…",
          }}
        />
        {!isSm && <Box flexGrow={1} />}

        <Stack
          direction={"row"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
          gap={2}
        >
          <ListItem disableGutters sx={{ width: "fit-content" }}>
            <ListItemAvatar>
              <IconButton>
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <Pause />
                </Avatar>
              </IconButton>
            </ListItemAvatar>

            <ListItemText
              primary={
                <Box
                  bgcolor={"primary.light"}
                  sx={{ fontSize: "1.3rem" }}
                  width={"fit-content"}
                >
                  1:34
                </Box>
              }
            />
          </ListItem>
          <ListItemButton
            sx={{
              borderRadius: 2,
              width: "fit-content",
            }}
          >
            <ListItem
              disableGutters
              secondaryAction={<KeyboardArrowDownOutlined />}
              sx={{
                width: "fit-content",
              }}
            >
              {!isSm && (
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "secondary.main" }}>
                    <Check />
                  </Avatar>
                </ListItemAvatar>
              )}

              <ListItemText
                primary={!isSm && "Project CRM"}
                secondary={"Task #78"}
                primaryTypographyProps={{
                  variant: "subtitle2",
                  sx: {
                    opacity: 0.5,
                  },
                }}
                secondaryTypographyProps={{
                  sx: {
                    color: "primary.main",
                    fontWeight: "bold",
                  },
                  variant: "subtitle1",
                }}
              />
            </ListItem>
          </ListItemButton>
          <ListItemButton
            sx={{
              borderRadius: 2,
              width: "fit-content",
            }}
          >
            <ListItem
              disableGutters
              secondaryAction={<KeyboardArrowDownOutlined />}
              sx={{
                width: "fit-content",
              }}
            >
              {!isSm && (
                <ListItemAvatar>
                  <Avatar
                    sx={{ bgcolor: "secondary.main" }}
                    srcSet={
                      "https://s2.qwant.com/thumbr/0x380/d/c/01adb6443bbe09e66fb6b22749f291c75bbb9a18d3d60fecdb885fe25664da/1625509593529.jpg?u=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FC4E03AQE4osjvY8jSdg%2Fprofile-displayphoto-shrink_800_800%2F0%2F1625509593529%3Fe%3D2147483647%26v%3Dbeta%26t%3DH6jbW9N0Aug6cC1vvzTfmKezBDBgsIuh4Py76xDBM_A&q=0&b=1&p=0&a=0"
                    }
                  ></Avatar>
                </ListItemAvatar>
              )}

              <ListItemText
                sx={{
                  width: "fit-content",
                }}
                primary={!isSm && "User"}
                secondary={"Oscar M."}
                primaryTypographyProps={{
                  variant: "subtitle2",
                  sx: {
                    opacity: 0.5,
                  },
                }}
                secondaryTypographyProps={{
                  sx: {
                    fontWeight: "bold",
                  },
                  variant: "subtitle1",
                }}
              />
            </ListItem>
          </ListItemButton>
        </Stack>
      </Stack>
      <Grid container>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <ProjectTabs
            value={1}
            handleChange={() => console.log("handleChange")}
          />
          <Divider />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}></Grid>
      </Grid>
    </main>
  );
}
