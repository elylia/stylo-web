import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ACC4D4",
      main: "#8DA2AF",
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
});

export default theme;
