import * as React from "react";

import AnalysisType from "../analysis-type/AnalysisType";
import DistanceMeasure from "../analysis-type/DistanceMeasure";
import InfoAnalysis from "../infoText/infoAnalysis";
import ConsensusStrength from "../analysis-type/ConsensusStrength";

function Step0({ settings, setSettings }) {
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
    </React.Fragment>
  );
}

export default Step0;
