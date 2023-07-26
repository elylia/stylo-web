import * as React from "react";

import AnalysisType from "../analysis-type/AnalysisType";
import DistanceMeasure from "../analysis-type/DistanceMeasure";
import InfoAnalysis from "../infoText/infoAnalysis";
import ConsensusStrength from "../analysis-type/ConsensusStrength";
import { Button } from "@mui/material";

function Step0({ settings, setSettings, handleNext }) {
  return (
    <React.Fragment>
      <h1>Choose Analysis</h1>
      <InfoAnalysis />
      <div className="chooseAnalysis">
        <AnalysisType setSettings={setSettings} settings={settings} />
        <DistanceMeasure setSettings={setSettings} settings={settings} />
      </div>
      <div className="chooseAnalysis">
        {settings.analysisType === "BCT" && (
          <ConsensusStrength setSettings={setSettings} settings={settings} />
        )}
      </div>
      <Button onClick={handleNext} variant="contained" color="primary">
        Next
      </Button>
    </React.Fragment>
  );
}

export default Step0;
