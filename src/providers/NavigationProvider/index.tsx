"use client";

import {
  DEFAULT_SELECTED_MENU,
  MENU_NAVIGATION,
  SIDEBAR_MENUS,
} from "@/constants/menus";
import { NavigationContext } from "@/contexts";
import { useBreakpoints } from "@/hooks";
import { tSelectedMenu, tValidMenu } from "@/types";
import React from "react";

interface NavigationProviderProps {
  children: React.ReactNode;
}

const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const { isSm } = useBreakpoints();
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
  const [collapsedMenu, setCollapsedMenu] =
    React.useState<tValidMenu>(undefined);
  const [selectedMenu, setSelectedMenu] = React.useState<tSelectedMenu>(
    DEFAULT_SELECTED_MENU
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCollapseClick = (menu: tValidMenu) => {
    if (menu === collapsedMenu) {
      setCollapsedMenu(undefined);
    } else {
      setCollapsedMenu(menu);
    }
  };

  const handleMenuClick = (menu: tSelectedMenu) => {
    setSelectedMenu(menu);
    handleDrawerToggle();
  };

  const isMenuCollapsed = (menu: tValidMenu) => {
    return menu === collapsedMenu;
  };

  const isSubMenuSelected = (menu: tSelectedMenu) => {
    return menu.main === selectedMenu?.main && menu.sub === selectedMenu?.sub;
  };

  return (
    <NavigationContext.Provider
      value={{
        mobileOpen,
        collapsedMenu,
        selectedMenu,
        menus: SIDEBAR_MENUS,
        subMenus: MENU_NAVIGATION,
        handleDrawerToggle,
        handleCollapseClick,
        setSelectedMenu,
        handleMenuClick,
        isMenuCollapsed,
        isSubMenuSelected,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
