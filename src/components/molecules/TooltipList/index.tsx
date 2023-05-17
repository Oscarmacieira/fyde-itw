"use client";

import { ListItem, ListItemButton, ListItemText } from "@mui/material";

interface TooltipListProps {
  actions: Array<{ text: string; color?: string; onClick: () => void }>;
}

export default function TooltipList({ actions }: TooltipListProps) {
  return (
    <>
      {actions.map((action, index) => (
        <ListItem
          disablePadding
          disableGutters
          sx={{
            width: "100%",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
          key={index}
        >
          <ListItemButton onClick={action.onClick}>
            <ListItemText
              primary={typeof action === "string" ? action : action.text}
              primaryTypographyProps={{
                color: typeof action === "string" ? "" : action.color,
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
}
