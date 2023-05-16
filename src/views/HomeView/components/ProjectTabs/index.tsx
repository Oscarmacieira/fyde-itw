import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { CircleRounded, Lock, Receipt } from "@mui/icons-material";
import { TabPanel } from "@/components";

interface ProjectTabsProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const tabsData = [
  { label: "General", icon: <Lock />, content: "Item One" },
  { label: "Tasks", icon: <CircleRounded />, content: "Item Two" },
  { label: "Invoices & Docs", icon: <Receipt />, content: "Item Three" },
];

export default function ProjectTabs({ value, handleChange }: ProjectTabsProps) {
  return (
    <Box
      sx={{
        maxWidth: { xs: 360, sm: 480, md: "100%" },
        position: "relative",
        top: -10,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          sx: {
            display: "none",
          },
        }}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        variant="scrollable"
        scrollButtons={false}
      >
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            icon={tab.icon}
            iconPosition="start"
            sx={{
              position: "relative",
              boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.06);",
              my: 2,
              mx: 2,
              borderRadius: 4,
              minHeight: 0,
              color: "black",
              fontWeight: "bold",
              "& .MuiSvgIcon-root": {
                color: "primary.main",
              },
              "&.Mui-selected": {
                boxShadow: "none",
                color: "black",
                bgcolor: "primary.light",
                "& .MuiSvgIcon-root": {
                  color: "black",
                },
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
