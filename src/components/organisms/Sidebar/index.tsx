"use client";

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { DrawerHeader } from "./style";
import { tMenu } from "@/types";

export interface SidebarProps {
  open?: boolean;
  menus?: tMenu[];
  logo?: React.ReactNode;
  selected?: number;
}

export default function Sidebar({
  open = true,
  menus,
  logo,
  selected,
}: SidebarProps) {
  return (
    <Drawer
      open={true}
      variant="permanent"
      sx={{
        borderRadius: 0,
        bgcolor: "white",
        minHeight: "100vh",
      }}
    >
      <DrawerHeader>
        <IconButton disableRipple disableFocusRipple>
          {logo}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100%"}
      >
        <List>
          {menus?.map((menu, index) => (
            <ListItem key={menu.id} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={menu.onClick}
                sx={{
                  aspectRatio: 1,
                  justifyContent: "center",
                }}
                selected={index === selected}
              >
                <ListItemIcon
                  sx={{
                    width: "100%",
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
    </Drawer>
  );
}
