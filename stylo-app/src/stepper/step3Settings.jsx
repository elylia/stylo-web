import React, { useState } from "react";
import Features from "../parameters/Features";
import NGramSize from "../parameters/NGramSize";
import MfwMinMax from "../parameters/MfwMinMax";
import MfwIncr from "../parameters/MfwIncr";
import CullingIncr from "../parameters/CullingIncr";
import CullingMinMax from "../parameters/CullingMinMax";
import DeletePronouns from "../parameters/DeletePronouns";
import PreserveCase from "../parameters/PreserveCase";
import StartAt from "../parameters/StartAt";
import InfoFeatures from "../infoText/infoFeatures";
import InfoMFW from "../infoText/infoMFW";
import InfoCulling from "../infoText/infoCulling";
import InfoMisc from "../infoText/infoMisc";
import { Alert, Box, Button } from "@mui/material";

function Step3({ settings, setSettings, handleBack, setActiveStep }) {
  const [error, setError] = useState(null);
  let errorMessages = [];
  const handleNextSettings = () => {
    if (
      settings.analysisType === "BCT" &&
      (settings.mfwMax - settings.mfwMin) / settings.mfwIncr + 1 < 3
    ) {
      errorMessages.push(
        "You need at least three iterations (defined by the MFW values) to get meaningful results for your Bootstrap Consensus Tree analysis. \n"
      );
      setError(errorMessages);
    }

    if (settings.cullMin > settings.cullMax) {
      errorMessages.push("The Culling minimum is greater than the maximum. \n");
      setError(errorMessages);
    }

    if (settings.mfwMin > settings.mfwMax) {
      errorMessages.push("The MFW minimum is greater than the maximum. \n");
      setError(errorMessages);
    }

    if (
      settings.mfwIncr > settings.mfwMax - settings.mfwMin &&
      settings.mfwMax - settings.mfwMin !== 0
    ) {
      errorMessages.push(
        "The MFW increment is greater than the difference of MFW maximum and MFW minimum. \n"
      );
      setError(errorMessages);
    }

    if (
      settings.cullIncr > settings.cullMax - settings.cullMin &&
      settings.cullMax - settings.cullMin !== 0
    ) {
      errorMessages.push(
        "The Culling increment is greater than the difference of Culling maximum and Culling minimum. \n"
      );
      setError(errorMessages);
    }

    if (errorMessages.length !== 0) {
      errorMessages.push("Please change your settings.");
      setError(errorMessages);
    }

    if (errorMessages.length === 0) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  return (
    <React.Fragment>
      {error && (
        <Alert
          severity="error"
          onClose={() => setError(null)}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            whiteSpace: "preserve",
            textAlign: "left",
          }}
        >
          {error}
        </Alert>
      )}
      <div className="content">
        <h1>Choose Features</h1>
        <InfoFeatures />

        <div className="parameter">
          <Features setSettings={setSettings} settings={settings} />
          <NGramSize setSettings={setSettings} settings={settings} />
        </div>

        <h1>MFW Settings</h1>
        <InfoMFW />
        <div className="parameter">
          <MfwMinMax setSettings={setSettings} settings={settings} />
          <MfwIncr setSettings={setSettings} settings={settings} />
          <StartAt setSettings={setSettings} settings={settings} />
        </div>
        <h1>Culling Settings</h1>
        <InfoCulling />
        <div className="parameter">
          <CullingMinMax setSettings={setSettings} settings={settings} />
          <CullingIncr setSettings={setSettings} settings={settings} />
        </div>
        <h1>Miscellaneous</h1>
        <InfoMisc />

        <div className="parameter">
          <DeletePronouns setSettings={setSettings} settings={settings} />
          <PreserveCase setSettings={setSettings} settings={settings} />
        </div>
      </div>

      <div className="buttonsBoth">
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button onClick={handleBack} variant="contained" color="primary">
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />

          <Button
            onClick={handleNextSettings}
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default Step3;
