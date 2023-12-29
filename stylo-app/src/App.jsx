import "./App.css";
import React, { useState } from "react";
import HorizontalLinearStepper from "./stepper/horizontalStepper";
import Step1 from "./stepper/step1Analysis.jsx";
import Step2 from "./stepper/step2Upload.jsx";
import Step3 from "./stepper/step3Settings.jsx";
import Step4 from "./stepper/step4Sample.jsx";
import Step5 from "./stepper/step5Summary.jsx";
import Step6 from "./stepper/step6OutputOptions.jsx";
import Results from "../src/stepper/results.jsx";
import executeR from "./executeR/execute_R";
import theme from "./Theme.jsx";
import { Alert, Box, Button, ThemeProvider } from "@mui/material";
import "../src/assets/fonts/index.css";
import CitationDialog from "./dialog/citationDialog";
import AboutDialog from "./dialog/aboutDialog";
import GithubLink from "./dialog/githubLink";
import Logo from "./assets/Logo_5.svg";
import Step0 from "./stepper/step0Welcome";

function App() {
  const [activeStep, setActiveStep] = useState(-1);
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [labelUrl, setLabel] = useState("");
  const [isDataReady, setIsDataReady] = useState(false);
  const [error, setError] = useState(null);
  const [uploadedSuffix, setUploadedSuffix] = useState();

  const handleStepClick = (step) => {
    if (step < activeStep) {
      setActiveStep(step);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if (error) {
      setError(null);
    }
  };
  const mapErrorMessage = (error) => {
    if (error.includes("This text is too short!")) {
      return "At least one of your texts is too short for the chosen sampling method and the associated settings. Please change your settings and try again.";
    }
    return "An unknown error occurred. Please check your corpus or change your settings and try again.";
  };
  const handleGetResults = async () => {
    try {
      const response = await executeR(settings, uploadedSuffix);
      if (response.result) {
        const url = response.result;
        const labelUrl = response.labelUrl;
        setIsDataReady(true);
        setUrl(url);
        setResult(response);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setLabel(labelUrl);
      } else {
        setError(mapErrorMessage("An unknown error occurred"));
      }
    } catch (error) {
      console.error("Error executing R code:", error);

      setError(mapErrorMessage(error.message));
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
    mfwMax: 100,
    cullMin: 0,
    cullMax: 0,
    cullIncr: 10,
    mfwIncr: 100,
    pronouns: false,
    case: false,
    samplingLabel: "No Sampling",
    sampling: "no.sampling",
    randomSample: 1,
    sampleSize: 10000,
    encoding: false,
  });

  return (
    <ThemeProvider theme={theme}>
      <div id="rootDiv" className="app-container">
        <header className="header">
          <img src={Logo} alt="Logo" />
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
              onStepClick={handleStepClick}
            ></HorizontalLinearStepper>{" "}
          </div>
        )}
        {activeStep === -1 && (
          <div className="content-box">
            <Step0 handleNext={handleNext} />
          </div>
        )}
        {activeStep === 0 && (
          <div className="content-box">
            <Step1
              setSettings={setSettings}
              settings={settings}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          </div>
        )}
        {activeStep === 1 && (
          <div className="content-box">
            <Step2
              setSettings={setSettings}
              settings={settings}
              setUploadedSuffix={setUploadedSuffix}
              uploadedSuffix={uploadedSuffix}
              setActiveStep={setActiveStep}
            />
          </div>
        )}
        {activeStep === 2 && (
          <div className="content-box">
            <Step3
              setSettings={setSettings}
              settings={settings}
              handleBack={handleBack}
              setActiveStep={setActiveStep}
            />
          </div>
        )}
        {activeStep === 3 && (
          <div className="content-box">
            <Step4
              setSettings={setSettings}
              settings={settings}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          </div>
        )}
        {activeStep === 4 && (
          <div className="content-box">
            <Step5
              setSettings={setSettings}
              settings={settings}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          </div>
        )}
        {activeStep === 5 && (
          <div className="content-box">
            <Step6
              setSettings={setSettings}
              settings={settings}
              handleGetResults={handleGetResults}
              handleBack={handleBack}
              error={error}
            />
            {error && (
              <Alert
                severity="error"
                onClose={() => setError(null)}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "left",
                }}
              >
                {error}
              </Alert>
            )}
          </div>
        )}
        {activeStep === 6 && (
          <div className="result-box">
            <Results
              setSettings={setSettings}
              settings={settings}
              handleReset={handleReset}
              url={url}
              result={result}
              labelUrl={labelUrl}
            />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
