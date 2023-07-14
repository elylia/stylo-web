import * as React from "react";
import SaveDistanceTable from "../output-options/SaveDistanceTable";
import SaveFrequencyTable from "../output-options/SaveFrequencyTable";
import SaveFeatureList from "../output-options/SaveFeatureList";
import InfoOutput from "../infoText/infoOutput";

function Step5({ settings, setSettings }) {
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
    </React.Fragment>
  );
}

export default Step5;
