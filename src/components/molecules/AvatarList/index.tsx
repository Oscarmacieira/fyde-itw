"use client";

import { tUser } from "@/types";
import { Avatar, AvatarGroup } from "@mui/material";

interface AvatarListProps {
  max?: number;
  users?: tUser[];
}

export default function AvatarList({ max = 4, users = [] }: AvatarListProps) {
  return (
    <AvatarGroup max={max}>
      {users?.map((user) => (
        <Avatar key={user.id} alt={user.name} src={user.src} />
      ))}
    </AvatarGroup>
  );
}
