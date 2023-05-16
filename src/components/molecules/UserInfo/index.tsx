"use client";
import React from "react";
import { ListItemText } from "@mui/material";

interface UserInfoProps {
  secondary: React.ReactNode;
  primary: React.ReactNode;
  align?: "left" | "right" | "center";
}

export default function UserInfo({ secondary, primary, align }: UserInfoProps) {
  return (
    <ListItemText
      primary={primary}
      secondary={secondary}
      primaryTypographyProps={{
        variant: "subtitle2",
        sx: {
          opacity: 0.5,
        },
        textAlign: align,
      }}
      secondaryTypographyProps={{
        sx: {
          fontWeight: "bold",
          color: "black",
        },
        variant: "subtitle1",
        textAlign: align,
      }}
    />
  );
}
