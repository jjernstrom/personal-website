import { createTheme } from "@mui/material/styles";

export const Spacing = {
  navBar: 1600,
  article: 640,
};

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#458588",
      light: "#83a598",
    },
    secondary: {
      main: "#fb4934",
      dark: "#cc241d",
    },
    background: {
      default: "#282828",
    },
    text: {
      primary: "#ebdbb2",
    },
    error: {
      main: "#fb4934",
      dark: "#cc241d",
    },
    warning: {
      main: "#fabd2f",
      dark: "#d79921",
    },
    info: {
      main: "#83a598",
      dark: "#458588",
    },
    success: {
      main: "#b8bb26",
      dark: "#98971a",
    },
  },
  typography: {
    fontSize: 20,
    htmlFontSize: 20,
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
  },
});
