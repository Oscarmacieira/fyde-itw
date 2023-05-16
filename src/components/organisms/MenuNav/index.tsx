"use client";

import {
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { MenuNavHeader } from "./style";
import { Add, ArrowBack, ExpandLess, ExpandMore } from "@mui/icons-material";
import React from "react";
import { tMenuList } from "@/types";

interface MenuNavProps {
  menus: tMenuList[];
}

export default function MenuNav({ menus }: MenuNavProps) {
  const [open, setOpen] = React.useState<number | undefined>(undefined);
  const [selectedIndex, setSelectedIndex] = React.useState<number | undefined>(
    undefined
  );

  const handleClick = (val: number | undefined) => {
    if (open === val) {
      setOpen(undefined);
    } else {
      setOpen(val);
    }
  };

  const handleSelected = (val: number | undefined) => {
    setSelectedIndex(val);
  };

  function isSelected(val: number) {
    return open === val;
  }

  function isSubMenuSelected(mainIndex: number, secondaryIndex: number) {
    return secondaryIndex === selectedIndex && open === mainIndex;
  }

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 0,
        minHeight: "100vh",
        bgcolor: "#eef3fe",
      }}
    >
      <MenuNavHeader>
        
      </MenuNavHeader>
      <Divider />
      <List component="nav" aria-labelledby="nested-list-subheader">
        {menus?.map((menu, index) => (
          <React.Fragment key={menu.id}>
            <ListItemButton
              onClick={() => handleClick(index)}
              sx={{
                height: 70,
                pl: 5,
              }}
            >
              {menu.icon && <ListItemIcon sx={{}}>{menu.icon}</ListItemIcon>}
              <ListItemText
                primary={menu.name}
                primaryTypographyProps={{
                  sx: {
                    transition: "all 0.3s ease",
                  },
                  fontWeight: isSelected(index) ? "bold" : "normal",
                }}
              />
              <IconButton
                sx={{
                  bgcolor: (theme) => theme.palette.primary.main + "1a",
                  color: "primary.main",
                }}
                size="small"
              >
                {isSelected(index) ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemButton>
            <Collapse in={isSelected(index)} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {menu.subMenus?.map((subMenu, subIndex) => (
                  <ListItemButton
                    sx={{ pl: 8 }}
                    key={`sub-${subMenu.id}`}
                    onClick={() => handleSelected(subIndex)}
                  >
                    <ListItemText
                      primary={subMenu.name}
                      primaryTypographyProps={{
                        sx: {
                          transition: "all 0.3s ease",
                        },
                        fontWeight: isSubMenuSelected(index, subIndex)
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
    </Paper>
  );
}
