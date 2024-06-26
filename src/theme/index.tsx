import { createTheme } from "@mui/material";

const ElevateFitnessTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: 2,
          letterSpacing: 1,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        button: {
          fontWeight: "bold",
          letterSpacing: 1,
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#080120",
      light: "#24272a",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#2752D6",
    },
    info: {
      main: "#005cb9",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "sans-serif",
    },
    h6: {
      fontWeight: "bold",
    },
    subtitle1: {
      fontWeight: "bold",
    },
  },
});

export default ElevateFitnessTheme;
