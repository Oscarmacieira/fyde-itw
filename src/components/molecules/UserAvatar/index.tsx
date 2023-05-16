"use client";

import { Avatar, ListItemAvatar, SxProps, Theme } from "@mui/material";

interface UserAvatarProps {
  srcSet: string;
  sx?: SxProps<Theme>;
}

export default function UserAvatar({ srcSet, sx }: UserAvatarProps) {
  return (
    <ListItemAvatar sx={sx}>
      <Avatar sx={{ bgcolor: "secondary.main" }} srcSet={srcSet} />
    </ListItemAvatar>
  );
}
