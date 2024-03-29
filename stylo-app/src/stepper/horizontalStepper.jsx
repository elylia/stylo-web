import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";

const steps = [
  <b>Select Analysis Type</b>,
  <b>Upload Data</b>,
  <b>Set Parameters</b>,
  <b>Sampling</b>,
  <b>Summary</b>,
  <b>Output Options</b>,
];

export default function HorizontalLinearStepper({ activeStep, onStepClick }) {
  return (
    <Box>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          const isClickable = index < activeStep;

          if (isClickable) {
            stepProps.className = "step-clickable";
          }
          return (
            <Step key={label} {...stepProps} onClick={() => onStepClick(index)}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
