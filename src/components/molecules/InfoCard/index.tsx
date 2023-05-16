"use client";

import { Avatar, Card, ListItemText } from "@mui/material";
import React from "react";
import {
  cardStyles,
  primaryTypographyStyles,
  secondaryTypographyStyles,
  avatarStyles,
} from "./style";

type tSign = "%" | "h" | "$";

interface InfoCardProps {
  primary?: React.ReactNode;
  secondary?: React.ReactNode;
  third?: React.ReactNode;
  sign?: tSign;
}

export default function InfoCard({
  primary,
  secondary,
  sign = "%",
  third,
}: InfoCardProps) {
  return (
    <Card sx={cardStyles}>
      <ListItemText
        primaryTypographyProps={{ sx: primaryTypographyStyles }}
        primary={primary}
        secondaryTypographyProps={{ sx: secondaryTypographyStyles }}
        secondary={
          <>
            {secondary}
            <span
              style={{
                opacity: 0.5,
                fontSize: "1rem",
                marginLeft: "0.5rem",
              }}
            >
              ({third})
            </span>
          </>
        }
      />
      <Avatar variant="rounded" sx={avatarStyles(sign)}>
        {sign}
      </Avatar>
    </Card>
  );
}
