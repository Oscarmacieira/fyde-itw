import { NavigationContext } from "@/contexts";
import { tNavigationContext } from "@/types";
import React from "react";

const useNavigation = (): tNavigationContext => {
  const context = React.useContext(NavigationContext);

  if (!context) {
    throw Error("useNavigation must be used inside an NavigationProvider");
  }

  return context;
};

export default useNavigation;
