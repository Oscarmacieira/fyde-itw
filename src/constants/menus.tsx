"use client";

import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import PersonIcon from "@mui/icons-material/Person";
import AddCardIcon from "@mui/icons-material/AddCard";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Battery20Icon from "@mui/icons-material/Battery20";
import Battery60Icon from "@mui/icons-material/Battery60";
import BatteryStdIcon from "@mui/icons-material/BatteryStd";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { tMenu, tMenuList } from "@/types";

export const SIDEBAR_MENUS: tMenu[] = [
  {
    id: 1,
    name: "Home",
    icon: <HomeIcon />,
    onClick: () => console.log("Home"),
  },
  {
    id: 2,
    name: "Apps",
    icon: <AppsIcon />,
    onClick: () => console.log("Apps"),
  },
  {
    id: 3,
    name: "Profile",
    icon: <PersonIcon />,
    onClick: () => console.log("Profile"),
  },
  {
    id: 4,
    name: "Add Card",
    icon: <AddCardIcon />,
    onClick: () => console.log("Add Card"),
  },
  {
    id: 5,
    name: "Help",
    icon: <HelpOutlineIcon />,
    onClick: () => console.log("Help"),
  },
];

export const MENU_NAVIGATION: tMenuList[] = [
  {
    id: 1,
    name: "All Projects",
    subMenus: [
      {
        id: 1,
        name: "Lorem Ipsum",
      },
      {
        id: 2,
        name: "Lorem Ipsum",
      },
    ],
    onClick: () => console.log("All Projects"),
  },
  {
    id: 2,
    name: "Not Started",
    subMenus: [
      {
        id: 1,
        name: "Lorem Ipsum",
      },
      {
        id: 2,
        name: "Lorem Ipsum",
      },
    ],
    onClick: () => console.log("Not Started"),
    icon: <Battery20Icon />,
  },
  {
    id: 3,
    name: "In Progress",
    subMenus: [
      {
        id: 1,
        name: "World News",
      },
      {
        id: 2,
        name: "Project CRM",
      },
      {
        id: 3,
        name: "Trading Company",
      },
      {
        id: 4,
        name: "GBM Vault",
      },
    ],
    onClick: () => console.log("Not Started"),
    icon: <Battery60Icon />,
  },
  {
    id: 4,
    name: "Nearing deadline",
    subMenus: [
      {
        id: 1,
        name: "Lorem Ipsum",
      },
      {
        id: 2,
        name: "Lorem Ipsum",
      },
    ],
    onClick: () => console.log("nearing deadline"),
    icon: <BatteryStdIcon />,
  },
  {
    id: 5,
    name: "Done",
    subMenus: [
      {
        id: 1,
        name: "Lorem Ipsum",
      },
      {
        id: 2,
        name: "Lorem Ipsum",
      },
    ],
    onClick: () => console.log("Done"),
    icon: <CheckCircleOutlineIcon />,
  },
];
