import "./App.css";
import React from "react";
import HorizontalLinearStepper from "./stepper/horizontalStepper";
import { Card, CardContent } from "@mui/material";

function App() {
  return (
    <div id="rootDiv">
      <HorizontalLinearStepper />
    </div>
  );
}

export default App;
