import * as React from "react";
import AnalysisType from "../analysis-type/AnalysisType";
import DistanceMeasure from "../analysis-type/DistanceMeasure";
import InfoAnalysis from "../infoText/infoAnalysis";
import ConsensusStrength from "../analysis-type/ConsensusStrength";
import { Box, Button } from "@mui/material";

function Step1({ settings, setSettings, handleNext, handleBack }) {
  return (
    <React.Fragment>
      <div>
        <h1>Choose Analysis</h1>
        <InfoAnalysis />
      </div>
      <div className="content">
        <div className="chooseAnalysis">
          <AnalysisType setSettings={setSettings} settings={settings} />
          <DistanceMeasure setSettings={setSettings} settings={settings} />
        </div>
        <div className="chooseAnalysis">
          {settings.analysisType === "BCT" && (
            <ConsensusStrength setSettings={setSettings} settings={settings} />
          )}
        </div>
      </div>
      <div className="buttonsBoth">
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            role="button"
            onClick={handleBack}
            variant="contained"
            color="primary"
          >
            <b>Back</b>
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />

          <Button
            role="button"
            onClick={handleNext}
            variant="contained"
            color="primary"
          >
            <b>Next</b>
          </Button>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default Step1;
