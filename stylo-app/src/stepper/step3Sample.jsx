import * as React from "react";

import Sampling from "../sampling/sampling";
import SampleSize from "../sampling/sampleSize";
import RandomSample from "../sampling/randomSample";
import InfoSample from "../infoText/infoSample";
import { Box, Button } from "@mui/material";

function Step3({ settings, setSettings, handleNext, handleBack }) {
  return (
    <React.Fragment>
      <h1>Choose Sampling</h1>
      <InfoSample />
      <div className="sampling">
        <Sampling setSettings={setSettings} settings={settings} />
      </div>
      {settings.sampling === "normal.sampling" && (
        <div className="sampling">
          <SampleSize setSettings={setSettings} settings={settings} />
        </div>
      )}
      {settings.sampling === "random.sampling" && (
        <div className="sampling">
          <RandomSample setSettings={setSettings} settings={settings} />
        </div>
      )}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button onClick={handleBack} variant="contained" color="primary">
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />

        <Button onClick={handleNext} variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </React.Fragment>
  );
}

export default Step3;
