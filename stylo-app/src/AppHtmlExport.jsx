import "./App.css";
import React, { useState } from "react";
import HorizontalLinearStepper from "./stepper/horizontalStepper";
import Step0 from "./stepper/step0Analysis.jsx";
import Step1 from "./stepper/step1Upload.jsx";
import Step2 from "./stepper/step2Settings.jsx";
import Step3 from "./stepper/step3Sample.jsx";
import Step4 from "./stepper/step4Summary.jsx";
import Step5 from "./stepper/step5OutputOptions.jsx";
import Results from "./stepper/results.jsx";
import executeR from "./executeR/execute_R";
import theme from "./Theme.jsx";
import { Alert, Box, Button, ThemeProvider } from "@mui/material";
import "../src/assets/fonts/index.css";
import CitationDialog from "./dialog/citationDialog";
import AboutDialog from "./dialog/aboutDialog";
import GithubLink from "./dialog/githubLink";
import Logo from "./assets/Logo_5.svg";

function AppHtmlExport() {
  const [results, setResults] = useState("");
  const [labelUrl, setLabel] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <div id="rootDiv" className="app-container">
        <div className="result-box">
          <Results
            setSettings={setSettings}
            settings={settings}
            handleReset={handleReset}
            url={results}
            labelUrl={labelUrl}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default AppHtmlExport;
