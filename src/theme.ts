import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light", // Correct mode for light theme
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#333131",

      paper: "#302f2f",
    },
    text: {
      primary: "#121111",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark", // Correct mode for dark theme
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#cfc2c2",
      paper: "#cfc2c2",
    },
    text: {
      primary: "#ffffff", // Adjust text color for dark mode
    },
  },
});
