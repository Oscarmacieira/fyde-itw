"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { DRAWER_WIDTH, SIDEBAR_WIDTH } from "@/constants/dimensions";
import { tMenu, tMenuList } from "@/types";
import {
  Add,
  AppRegistration,
  ArrowBack,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { Button, Collapse, Container, Grid, Stack } from "@mui/material";
import { useBreakpoints, useNavigation } from "@/hooks";
import { MenuNav, Sidebar } from "..";

interface ResponsiveDrawerProps {
  window?: () => Window;
  children?: React.ReactNode;
  logo?: React.ReactNode;
}

export default function ResponsiveDrawer({
  window,
  children,
  logo,
}: ResponsiveDrawerProps) {
  const { mobileOpen, handleDrawerToggle } = useNavigation();
  const { isSm } = useBreakpoints();

  const drawer = (
    <Box display={"flex"} height={"100%"}>
      <Sidebar logo={logo} />
      <MenuNav />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
          bgcolor: "#eef3fe",
          borderBottom: "1px solid",
          display: { sm: "none", md: "none", lg: "none", xl: "none" },
          borderColor: "divider",
        }}
      >
        <Toolbar>
          <Stack
            direction={"row"}
            spacing={3}
            alignItems={"center"}
            justifyContent={"flex-start"}
            width={"100%"}
          >
            <IconButton
              sx={{
                bgcolor: (theme) => theme.palette.primary.main + "1a",
                color: "primary.main",
              }}
              onClick={handleDrawerToggle}
              size="small"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" fontWeight={"bold"}>
              Project CRM
            </Typography>
            <IconButton
              disableRipple
              size="small"
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Add />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
              overflow: "hidden",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
              overflow: "hidden",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}
      >
        <Toolbar
          sx={{
            display: {
              sm: "none",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        />
        <Box
          width={"100%"}
          height={"100%"}
          sx={{
            px: {
              sm: 2,
              md: 4,
              lg: 6,
              xl: 10,
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
