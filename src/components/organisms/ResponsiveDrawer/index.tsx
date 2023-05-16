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

interface ResponsiveDrawerProps {
  window?: () => Window;
  children?: React.ReactNode;
  menus?: tMenu[];
  subMenus?: tMenuList[];
  logo?: React.ReactNode;
}

export default function ResponsiveDrawer({
  window,
  children,
  menus,
  subMenus,
  logo,
}: ResponsiveDrawerProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [open, setOpen] = React.useState<number | undefined>(undefined);

  const handleOpen = (val: number | undefined) => {
    if (open === val) {
      setOpen(undefined);
    } else {
      setOpen(val);
    }
  };

  const [selected, setSelected] = React.useState<{
    main: number | undefined;
    sub: number | undefined;
  }>({
    main: undefined,
    sub: undefined,
  });

  const handleClick = (main: number | undefined, sub: number | undefined) => {
    setSelected({ main, sub });
  };

  function isOpen(val: number) {
    return open === val;
  }

  function isSelected(val: number) {
    return selected?.main === val;
  }

  function isSubMenuSelected(sub: number, main: number) {
    return selected?.sub === sub && selected?.main === main;
  }

  const drawer = (
    <Box display={"flex"} height={"100%"}>
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
      <Box
        width="100%"
        bgcolor={"#eef3fe"}
        height={"100%"}
        position={"relative"}
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
              size="small"
              onClick={handleDrawerToggle}
            >
              <ArrowBack />
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
        <Divider />
        <List
          sx={{
            width: "100%",
          }}
        >
          {subMenus?.map((menu, index) => (
            <React.Fragment key={menu.id}>
              <ListItemButton
                onClick={() => {
                  handleOpen(index);
                }}
                sx={{
                  height: 70,
                }}
              >
                {menu.icon && <ListItemIcon sx={{}}>{menu.icon}</ListItemIcon>}
                <ListItemText
                  primary={menu.name}
                  primaryTypographyProps={{
                    sx: {
                      transition: "all 0.2s ease-in-out",
                    },
                    fontWeight: isOpen(index) ? "bold" : "normal",
                  }}
                />
                <IconButton
                  sx={{
                    bgcolor: (theme) => theme.palette.primary.main + "1a",
                    color: "primary.main",
                  }}
                  size="small"
                >
                  {isOpen(index) ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </ListItemButton>
              {index !== subMenus.length - 1 && <Divider sx={{ mx: 2 }} />}
              <Collapse in={isOpen(index)} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {menu.subMenus?.map((subMenu, subIndex) => (
                    <ListItemButton
                      sx={{ pl: 8 }}
                      key={`sub-${subMenu.id}`}
                      onClick={() => {
                        handleClick(index, subIndex);
                        handleDrawerToggle();
                      }}
                    >
                      <ListItemText
                        primary={subMenu.name}
                        primaryTypographyProps={{
                          sx: {
                            transition: "all 0.2s ease-in-out",
                          },
                          fontWeight: isSubMenuSelected(subIndex, index)
                            ? "bold"
                            : "normal",
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
        <Button
          startIcon={<Add />}
          variant={"contained"}
          endIcon={<AppRegistration />}
          sx={{
            position: "absolute",
            bottom: 20,
            width: 255,
            mx: 2,
          }}
        >
          Create New Project
        </Button>
      </Box>
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
