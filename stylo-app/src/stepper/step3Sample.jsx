import * as React from "react";

import Sampling from "../sampling/sampling";
import SampleSize from "../sampling/sampleSize";
import RandomSample from "../sampling/randomSample";
import InfoSample from "../infoText/infoSample";
function Step3({ settings, setSettings }) {
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
    </React.Fragment>
  );
}

export default Step3;
