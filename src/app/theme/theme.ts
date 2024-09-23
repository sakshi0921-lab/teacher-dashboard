// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";
import { tokens, ColorMode } from "./tokens";

export const createAppTheme = (mode: ColorMode) => {
  const colors = tokens(mode);
  return createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            background: {
              default: colors.primary[500],
              paper: colors.grey[900],
            },
            text: {
              primary: colors.grey[100],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            background: {
              default: "#fcfcfc",
              paper: colors.grey[100],
            },
            text: {
              primary: colors.grey[900],
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  });
};

export const lightTheme = createAppTheme("light");
export const darkTheme = createAppTheme("dark");
