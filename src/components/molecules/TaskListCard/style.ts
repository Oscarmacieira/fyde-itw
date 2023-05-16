import { SxProps, Theme } from "@mui/system";

export const cardShadow = {
  boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.09)",
};

export const cardRadius: SxProps<Theme> = {
  borderRadius: 4,
};

export const tooltipArrowStyles: SxProps<Theme> = {
  color: "primary.dark",
};

export const tooltipStyles: SxProps<Theme> = {
  bgcolor: "primary.dark",
  color: "white",
  borderRadius: 4,
};
