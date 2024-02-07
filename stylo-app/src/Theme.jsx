import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    contrastThreshold: 4.5,
    primary: {
      light: "#ACC4D4",
      main: "#4D5A64",
      dark: "#39434A",
      contrastText: "#fff",
    },
    secondary: {
      light: "#39434A",
      main: "#39434A",
      dark: "#39434A",
      contrastText: "#fff",
    },
  },
  shadows: ["none"],
  typography: {
    fontFamily: `"Nunito", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"`,
  },
  components: {
    MuiStepLabel: {
      defaultProps: {
        sx: {
          ".Mui-disabled .MuiSvgIcon-root": { color: "#757777" },
          ".Mui-active .MuiSvgIcon-root": { color: "#4D5A64" },
          ".Mui-completed .MuiSvgIcon-root": { color: "#4D5A64" },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        sx: {
          fontSize: "19px",
          color: "#565656",
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        sx: {
          ".MuiOutlinedInput-notchedOutline": { fontSize: "19px" },
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: "#4D5A64",
        },
        colorPrimary: {
          "&.Mui-checked": {
            color: "#BB5933",
          },
        },
        track: {
          opacity: 0.4,
          backgroundColor: "#4D5A64",
          ".Mui-checked.Mui-checked + &": {
            opacity: 0.4,
            backgroundColor: "#BB5933",
          },
        },
      },
    },
  },
});

export default theme;
