import { orange } from "@mui/material/colors";
import { SxProps, Theme } from "@mui/system";

type tSign = "%" | "h" | "$";

export const getColor = (sign: tSign): string => {
  switch (sign) {
    case "$":
      return "secondary.main";
    case "%":
      return "primary.main";
    case "h":
      return orange[500];
    default:
      return "primary.main";
  }
};

export const cardStyles: SxProps<Theme> = {
  position: "relative",
  px: 2,
  py: 1,
  boxShadow: "none",
  border: "none",
  bgcolor: "background.default",
  borderRadius: 4,
  width: "100%",
};

export const primaryTypographyStyles: SxProps<Theme> = {
  opacity: 0.5,
};

export const secondaryTypographyStyles: SxProps<Theme> = {
  variant: "h5",
  color: "black",
  fontWeight: "lighter",
  display: "flex",
  alignItems: "center",
  fontSize: "1.5rem",
};

export const avatarStyles = (sign: tSign): SxProps<Theme> => ({
  fontWeight: "bold",
  fontSize: "0.8rem",
  borderRadius: 1.5,
  width: 18,
  height: 18,
  bgcolor: getColor(sign),
  position: "absolute",
  top: 8,
  right: 8,
});
