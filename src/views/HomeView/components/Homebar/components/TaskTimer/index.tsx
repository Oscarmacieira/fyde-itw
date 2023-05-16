import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Pause } from "@mui/icons-material";
import { useBreakpoints } from "@/hooks";

export default function TaskTimer() {
  const { isSm } = useBreakpoints();
  return (
    <ListItem disableGutters sx={{ width: "fit-content" }}>
      <ListItemAvatar>
        <IconButton>
          <Avatar sx={{ bgcolor: "primary.main" }}>
            <Pause fontSize={isSm ? "small" : "medium"} />
          </Avatar>
        </IconButton>
      </ListItemAvatar>

      <ListItemText
        primary={
          <Box
            bgcolor={"primary.light"}
            sx={{
              fontSize: isSm ? "1.1rem" : "1.3rem",
              px: isSm ? 1 : 2,
              py: 1,
              borderRadius: 2,
            }}
            width={"fit-content"}
          >
            1:34
          </Box>
        }
      />
    </ListItem>
  );
}
