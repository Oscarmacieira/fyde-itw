"use client";

import {
  CheckCircle,
  Done,
  MoreHoriz,
  Pause,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from "@mui/icons-material";
import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardActionArea,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  cardShadow,
  cardRadius,
  tooltipArrowStyles,
  tooltipStyles,
} from "./style";
import TooltipList from "../TooltipList";
import { useBreakpoints } from "@/hooks";
import React from "react";
import { tTask } from "@/types";
import AvatarList from "../AvatarList";

interface TaskListCardProps {
  selected?: boolean;
  task?: tTask;
  done?: boolean;
  onClick?: () => void;
  onClickOpen?: (task?: tTask) => void;
  onClickDelete?: (task?: tTask) => void;
  onClickClone?: (task?: tTask) => void;
}

export default function TaskListCard({
  selected = true,
  task,
  done,
  onClick,
  onClickOpen,
  onClickDelete,
  onClickClone,
}: TaskListCardProps) {
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);
  const { isSm } = useBreakpoints();
  const actions = [
    {
      text: "Open",
      onClick: () => onClickOpen?.(task),
    },
    {
      text: "Get Link",
      onClick: () => onClickOpen?.(task),
    },
    {
      text: "Clone",
      onClick: () => onClickClone?.(task),
    },
    {
      text: "Delete",
      color: "error.main",
      onClick: () => onClickDelete?.(task),
    },
  ];

  const taskDetails = (
    <Stack direction="row" spacing={2} gap={0} px={2} alignItems="center">
      <Typography textTransform={"none"} sx={{ opacity: 0.5 }}>
        {task?.status}
      </Typography>
      <Typography textTransform={"none"} sx={{ opacity: 0.5 }}>
        •
      </Typography>
      <Typography variant="subtitle1" fontWeight={"bold"}>
        {task?.time}
      </Typography>
      {task?.status === "In Progress" && (
        <IconButton
          sx={{
            bgcolor: "primary.main",
            color: "white",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          <Pause />
        </IconButton>
      )}
      <AvatarList users={task?.users} />
    </Stack>
  );

  return (
    <Card
      sx={{
        ...cardRadius,
        width: "100%",
        bgcolor: selected ? "primary.light" : "white",
        boxShadow: selected ? "none" : cardShadow.boxShadow,
        py: 1,
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          bgcolor: "#8484841c",
          cursor: "pointer",
        },
      }}
      onClick={onClick}
    >
      <ListItem
        secondaryAction={
          <Stack direction="row" spacing={2} gap={2} alignItems="center">
            {!isSm && taskDetails}
            <Tooltip
              arrow={true}
              open={isTooltipOpen}
              onClose={() => setIsTooltipOpen(false)}
              componentsProps={{
                arrow: { sx: tooltipArrowStyles },
                tooltip: { sx: tooltipStyles },
              }}
              title={
                <List disablePadding>
                  <TooltipList actions={actions} />
                </List>
              }
            >
              <MoreHoriz
                onClick={() => setIsTooltipOpen(true)}
                sx={{
                  borderRadius: 2,
                  color: "primary.main",
                  bgcolor: "primary.light",
                }}
              />
            </Tooltip>
          </Stack>
        }
      >
        <ListItemAvatar>
          <Checkbox
            icon={
              done ? (
                <CheckCircle sx={{ color: "success.light" }} />
              ) : (
                <RadioButtonUnchecked />
              )
            }
            checkedIcon={
              done ? (
                <CheckCircle sx={{ color: "success.light" }} />
              ) : (
                <RadioButtonChecked />
              )
            }
          />
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          primary={
            <Typography
              sx={{
                color: selected ? "primary.main" : "",
              }}
            >
              {task?.title}
              <b
                style={{
                  borderRadius: "50%",
                  color: "red",
                  marginLeft: "0.5rem",
                  position: "relative",
                  top: "5px",

                  fontSize: "1.8rem",
                  lineHeight: 0,
                }}
              >
                •
              </b>
            </Typography>
          }
        />
      </ListItem>
      {isSm && taskDetails}
    </Card>
  );
}
