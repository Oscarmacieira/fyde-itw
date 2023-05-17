"use client";

import {
  DEFAULT_SELECTED_MENU,
  MENU_NAVIGATION,
  SIDEBAR_MENUS,
} from "@/constants/menus";
import { tNavigationContext } from "@/types";
import React from "react";

const NavigationContext = React.createContext<tNavigationContext>({
  mobileOpen: false,
  collapsedMenu: undefined,
  selectedMenu: DEFAULT_SELECTED_MENU,
  menus: SIDEBAR_MENUS,
  subMenus: MENU_NAVIGATION,
  handleDrawerToggle: () => {},
  handleCollapseClick: () => {},
  setSelectedMenu: () => {},
  handleMenuClick: () => {},
  isMenuCollapsed: () => false,
  isSubMenuSelected: () => false,
});

export default NavigationContext;
