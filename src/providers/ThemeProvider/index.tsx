"use client";

import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { lightTheme } from "@/theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={lightTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { background: "#ffffff" },
        }}
      />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
