"use client";

import React from "react";
import { tMenu, tMenuList } from "@/types";
import {
  Add,
  AppRegistration,
  ArrowBack,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import {
  Button,
  Collapse,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { useBreakpoints, useNavigation } from "@/hooks";

export default function MenuNav({}) {
  const { isSm } = useBreakpoints();
  const {
    isSubMenuSelected,
    isMenuCollapsed,
    handleMenuClick,
    handleCollapseClick,
    handleDrawerToggle,
    mobileOpen,
    collapsedMenu,
    selectedMenu,
    subMenus,
  } = useNavigation();

  return (
    <Box width="100%" bgcolor={"#eef3fe"} height={"100%"} position={"relative"}>
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
            onClick={() => {
              if (isSm) {
                handleDrawerToggle();
              }
            }}
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
                handleCollapseClick(index);
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
                  fontWeight: isMenuCollapsed(index) ? "bold" : "normal",
                }}
              />
              <IconButton
                sx={{
                  bgcolor: (theme) => theme.palette.primary.main + "1a",
                  color: "primary.main",
                }}
                size="small"
              >
                {isMenuCollapsed(index) ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemButton>
            {index !== subMenus.length - 1 && <Divider sx={{ mx: 2 }} />}
            <Collapse in={isMenuCollapsed(index)} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {menu.subMenus?.map((subMenu, subIndex) => (
                  <ListItemButton
                    sx={{ pl: 8 }}
                    key={`sub-${subMenu.id}`}
                    onClick={() => {
                      handleMenuClick({
                        main: index,
                        sub: subIndex,
                      });
                      handleDrawerToggle();
                    }}
                  >
                    <ListItemText
                      primary={subMenu.name}
                      primaryTypographyProps={{
                        sx: {
                          transition: "all 0.2s ease-in-out",
                        },
                        fontWeight: isSubMenuSelected({
                          main: index,
                          sub: subIndex,
                        })
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
          py: 1.75,
        }}
      >
        Create New Project
      </Button>
    </Box>
  );
}
