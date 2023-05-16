import { SxProps, Theme } from "@mui/system";

export const addButtonStyles: SxProps<Theme> = {
  mr: 2,
  ml: 2,
  bgcolor: "primary.main",
  color: "white",
  "&:hover": {
    color: "primary.main",
  },
};
