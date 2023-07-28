import "./App.css";
import React, { useState } from "react";
import HorizontalLinearStepper from "./stepper/horizontalStepper";
import Step0 from "../src/stepper/step0Analysis.jsx";
import Step1 from "../src/stepper/step1Upload.jsx";
import Step2 from "../src/stepper/step2Settings.jsx";
import Step3 from "../src/stepper/step3Sample.jsx";
import Step4 from "../src/stepper/step4Summary.jsx";
import Step5 from "../src/stepper/step5OutputOptions.jsx";
import Results from "../src/stepper/results.jsx";
import executeR from "./executeR/execute_R";
import theme from "./Theme.jsx";
import { Box, Button, ThemeProvider } from "@mui/material";
import "../src/assets/fonts/index.css";
import CitationDialog from "./dialog/citationDialog";
import AboutDialog from "./dialog/aboutDialog";
import GithubLink from "./dialog/githubLink";

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [results, setResults] = useState("");
  const [isDataReady, setIsDataReady] = useState(false);

  const handleStepChange = (newStep) => {
    setActiveStep(newStep);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleGetResults = async () => {
    try {
      const response = await executeR(settings);
      if (response.result) {
        const result = response.result;
        setIsDataReady(true);
        setResults(result);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        console.error("Invalid response format:", response);
      }
    } catch (error) {
      console.error("Error executing R code:", error);
    }
  };
  const [settings, setSettings] = useState({
    analysisType: "CA",
    analysisTypeLabel: "Cluster Analysis",
    distanceMeasure: "delta",
    distanceMeasureLabel: "Classic Delta",
    format: "plain",
    formatLabel: "Plain / Txt",
    language: "english",
    languageLabel: "English",
    features: "w",
    featuresLabel: "Words",
    consensusStrength: 0.5,
    nGram: 1,
    startAt: 1,
    mfwMin: 100,
    mfwMax: 300,
    cullMin: 0,
    cullMax: 20,
    cullIncr: 10,
    mfwIncr: 100,
    pronouns: false,
    case: false,
    samplingLabel: "No Sampling",
    sampling: "no.sampling",
    randomSample: 1,
    sampleSize: 10000,
  });

  return (
    <ThemeProvider theme={theme}>
      <div id="rootDiv" className="app-container">
        <header className="header">
          <img src="../src/assets/Logo_5.svg" alt="Logo" />
          <div className="title">
            <h1 className="title">STYLO WEB</h1>
            <div className="right-section">
              <h2 className="title">STYLOMETRIC ANALYSIS ONLINE</h2>
              <div className="icon-container">
                <AboutDialog />

                <CitationDialog />
                <GithubLink />
              </div>
            </div>
          </div>

          <div className="reset">
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset} variant="contained" color="primary">
                Reset
              </Button>
            </Box>
          </div>

          <br />
        </header>
        {activeStep <= 5 && (
          <div className="stepper-box">
            <HorizontalLinearStepper
              activeStep={activeStep}
              handleStepChange={handleStepChange}
            ></HorizontalLinearStepper>{" "}
          </div>
        )}
        {activeStep === 0 && (
          <div className="content-box">
            <Step0
              setSettings={setSettings}
              settings={settings}
              handleNext={handleNext}
            />
          </div>
        )}
        {activeStep === 1 && (
          <div className="content-box">
            <Step1
              setSettings={setSettings}
              settings={settings}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          </div>
        )}
        {activeStep === 2 && (
          <div className="content-box">
            <Step2
              setSettings={setSettings}
              settings={settings}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          </div>
        )}
        {activeStep === 3 && (
          <div className="content-box">
            <Step3
              setSettings={setSettings}
              settings={settings}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          </div>
        )}
        {activeStep === 4 && (
          <div className="content-box">
            <Step4
              setSettings={setSettings}
              settings={settings}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          </div>
        )}
        {activeStep === 5 && (
          <div className="content-box">
            <Step5
              setSettings={setSettings}
              settings={settings}
              handleGetResults={handleGetResults}
              handleBack={handleBack}
            />
          </div>
        )}
        {activeStep === 6 && (
          <div className="result-box">
            <Results
              setSettings={setSettings}
              settings={settings}
              handleReset={handleReset}
              url={results}
            />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
