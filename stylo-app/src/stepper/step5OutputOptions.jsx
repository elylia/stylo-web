import * as React from "react";
import SaveDistanceTable from "../output-options/SaveDistanceTable";
import SaveFrequencyTable from "../output-options/SaveFrequencyTable";
import SaveFeatureList from "../output-options/SaveFeatureList";
import InfoOutput from "../infoText/infoOutput";
import { Box, Button } from "@mui/material";

function Step5({ settings, setSettings, handleGetResults, handleBack }) {
  return (
    <React.Fragment>
      <h1>Choose Output Options</h1>
      <InfoOutput></InfoOutput>
      <div className="outputOptions">
        <SaveDistanceTable setSettings={setSettings} settings={settings} />
        <br />
        <SaveFrequencyTable setSettings={setSettings} settings={settings} />
        <br />
        <SaveFeatureList setSettings={setSettings} settings={settings} />
      </div>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button onClick={handleBack} variant="contained" color="primary">
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />

        <Button onClick={handleGetResults} variant="contained" color="primary">
          Get Results
        </Button>
      </Box>
    </React.Fragment>
  );
}

export default Step5;
