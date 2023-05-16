import { Paper, styled } from "@mui/material";

export const MenuNavHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  background: theme.palette.primary.light,
}));

export const PaperMenuNav = styled(Paper)(({ theme }) => ({
  minHeight: "100vh",
  border: "none",
  borderRadius: "0px",
}));
