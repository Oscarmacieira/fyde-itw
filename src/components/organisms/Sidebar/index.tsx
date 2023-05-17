"use client";

import React from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { SIDEBAR_WIDTH } from "@/constants/dimensions";
import { tMenu } from "@/types";
import { useNavigation } from "@/hooks";

interface SideBarProps {
  logo?: React.ReactNode;
}

export default function SideBar({ logo }: SideBarProps) {
  const { menus } = useNavigation();
  return (
    <Box
      width={SIDEBAR_WIDTH}
      height={"100%"}
      sx={{
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar>
        <IconButton disableRipple disableFocusRipple>
          {logo}
        </IconButton>
      </Toolbar>
      <Divider />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100%"}
        width={"100%"}
      >
        <List
          sx={{
            width: "100%",
          }}
        >
          {menus?.map((menu, index) => (
            <ListItem key={menu.id} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={menu.onClick}
                sx={{
                  aspectRatio: 1,
                  justifyContent: "center",
                }}
                selected={index === 1}
              >
                <ListItemIcon
                  sx={{
                    mr: "auto",
                    justifyContent: "center",
                  }}
                >
                  {menu.icon}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
