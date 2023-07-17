import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Step0 from "./step0Analysis";
import Step1 from "./step1Upload";
import Step2 from "./step2Settings";
import Step3 from "./step3Sample";
import Step4 from "./step4Summary";
import Step5 from "./step5OutputOptions";
import executeR from "../executeR/execute_R";

const steps = [
  "Select Analysis Type",
  "Upload Data",
  "Set Parameters",
  "Sampling",
  "Summary",
  "Output Options",
];

export default function HorizontalLinearStepper(props) {
  const [activeStep, setActiveStep] = useState(0);
  const [settings, setSettings] = useState({
    analysisType: "CA",
    analysisTypeLabel: "Cluster Analysis",
    features: "w",
    featuresLabel: "Words",
    consensusStrength: 0.5,
    nGram: 1,
    startAt: 1,
    cullMin: 0,
    cullMax: 0,
    cullIncr: 0,
    mfwIncr: 100,
    samplingLabel: "No Sampling",
    sampling: "no.sampling",
    randomSample: 1,
    sampleSize: 10000,
  });

  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {};

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleGetResults = async () => {
    try {
      await executeR(settings);
    } catch (error) {
      console.error("Error executing R code:", error);
    }
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : activeStep === 0 ? (
        <React.Fragment>
          <Step0 setSettings={setSettings} settings={settings} />
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button
              onClick={
                activeStep === steps.length - 1 ? handleGetResults : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Get Results" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      ) : activeStep === 1 ? (
        <React.Fragment>
          <Step1 setSettings={setSettings} settings={settings} />

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button
              onClick={
                activeStep === steps.length - 1 ? handleGetResults : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Get Results" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      ) : activeStep === 2 ? (
        <React.Fragment>
          <Step2 setSettings={setSettings} settings={settings} />

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button
              onClick={
                activeStep === steps.length - 1 ? handleGetResults : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Get Results" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      ) : activeStep === 3 ? (
        <React.Fragment>
          <Step3 setSettings={setSettings} settings={settings} />

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button
              onClick={
                activeStep === steps.length - 1 ? handleGetResults : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Get Results" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      ) : activeStep === 4 ? (
        <React.Fragment>
          <Step4 setSettings={setSettings} settings={settings} />
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button
              onClick={
                activeStep === steps.length - 1 ? handleGetResults : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Get Results" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      ) : activeStep === 5 ? (
        <React.Fragment>
          <Step5 />
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button
              onClick={
                activeStep === steps.length - 1 ? handleGetResults : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Get Results" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button
              onClick={
                activeStep === steps.length - 1 ? handleGetResults : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Get Results" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
