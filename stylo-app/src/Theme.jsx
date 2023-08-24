import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ACC4D4",
      main: "#7a8d99",
      dark: "#697882",
      contrastText: "#fff",
    },
    secondary: {
      light: "#697882",
      main: "#697882",
      dark: "#697882",
      contrastText: "#fff",
    },
  },
  shadows: ["none"],
  typography: {
    fontFamily: `"Nunito", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"`,
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          //thumb - unchecked
          color: "#7a8d99",
        },
        colorPrimary: {
          "&.Mui-checked": {
            // thumb - checked
            color: "#eda488",
          },
        },
        track: {
          // track - unchecked
          opacity: 0.4,
          backgroundColor: "#7a8d99",
          ".Mui-checked.Mui-checked + &": {
            // track - checked
            opacity: 0.4,
            backgroundColor: "#eda488",
          },
        },
      },
    },
  },
});

export default theme;
