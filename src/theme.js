import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "dark",
    purple: {
      main: "#c375ff",
    },
    blue: {
      main: "#59c7ff",
    },
    background: {
      default: "#1e1e1e",
    },
    text: {
      primary: "rgba(255,255,255,0.9)",
    },
  },
  typography: {
    fontFamily: "Roboto Mono, system-ui,Ubuntu,Droid Sans,sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "unset",

          fontSize: "16px",
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 0 0 0",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
