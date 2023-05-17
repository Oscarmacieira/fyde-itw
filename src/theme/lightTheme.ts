import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#f1f6ff",
      main: "#225ef7",
      dark: "#041747",
      contrastText: "#000000",
    },
    secondary: {
      light: "#a0e5c9",
      main: "#2fbc8b",
      dark: "#084f32",
      contrastText: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#0000005a",
    },
    background: {
      paper: "#ffffff",
      default: "#f7f8fa",
    },
  },
  typography: {
    fontSize: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          textTransform: "none",
        },
      },
    },
  },
});

export default lightTheme;
