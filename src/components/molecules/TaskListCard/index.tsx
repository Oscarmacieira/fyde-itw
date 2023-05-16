"use client";

import {
  CheckCircle,
  Done,
  MoreHoriz,
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
}

interface TaskListDetailsProps {
  task?: tTask;
}

const TaskListDetails = ({ task }: TaskListDetailsProps) => {
  return (
    <Stack direction="row" spacing={2} gap={2} px={2} alignItems="center">
      <Typography textTransform={"none"} sx={{ opacity: 0.5 }}>
        {task?.status}
      </Typography>
      <Typography textTransform={"none"} sx={{ opacity: 0.5 }}>
        •
      </Typography>
      <Typography variant="subtitle1" fontWeight={"bold"}>
        {task?.time}
      </Typography>
      <AvatarList users={task?.users} />
    </Stack>
  );
};

export default function TaskListCard({
  selected = true,
  task,
  done,
}: TaskListCardProps) {
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);
  const { isSm } = useBreakpoints();
  const actions = [
    "Open",
    "Get Link",
    "Clone",
    { text: "Delete", color: "error.main" },
  ];

  return (
    <Card
      sx={{
        ...cardRadius,
        width: "100%",
        bgcolor: selected ? "primary.light" : "white",
        boxShadow: selected ? "none" : cardShadow.boxShadow,
      }}
    >
      <CardActionArea sx={{ py: 1 }} disableRipple>
        <ListItem
          secondaryAction={
            <Stack direction="row" spacing={2} gap={2} alignItems="center">
              {!isSm && <TaskListDetails task={task} />}
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
                <IconButton
                  onClick={() => setIsTooltipOpen(true)}
                  sx={{
                    borderRadius: 2,
                    color: "primary.main",
                    bgcolor: "primary.light",
                  }}
                >
                  <MoreHoriz />
                </IconButton>
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
              <Typography>
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
        {isSm && <TaskListDetails task={task} />}
      </CardActionArea>
    </Card>
  );
}
