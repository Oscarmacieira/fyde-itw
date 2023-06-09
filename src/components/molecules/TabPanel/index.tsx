"use client";

import * as React from "react";
import Box, { BoxProps } from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  TabProps?: BoxProps;
}

export default function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...TabProps } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box {...TabProps}>{children}</Box>}
    </div>
  );
}
