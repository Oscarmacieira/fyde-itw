import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { KeyboardArrowDownOutlined, Check } from "@mui/icons-material";
import { useBreakpoints } from "@/hooks";

export default function TaskModal() {
  const { isSm } = useBreakpoints();
  return (
    <ListItemButton
      sx={{
        borderRadius: 2,
        width: "fit-content",
      }}
    >
      <ListItem
        disableGutters
        secondaryAction={<KeyboardArrowDownOutlined />}
        sx={{
          width: "fit-content",
        }}
      >
        {!isSm && (
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "secondary.main" }}>
              <Check />
            </Avatar>
          </ListItemAvatar>
        )}

        <ListItemText
          primary={!isSm && "Project CRM"}
          secondary={"Task #78"}
          primaryTypographyProps={{
            variant: "subtitle2",
            sx: {
              opacity: 0.5,
            },
          }}
          secondaryTypographyProps={{
            sx: {
              color: "primary.main",
              fontWeight: "bold",
            },
            variant: "subtitle1",
          }}
        />
      </ListItem>
    </ListItemButton>
  );
}
