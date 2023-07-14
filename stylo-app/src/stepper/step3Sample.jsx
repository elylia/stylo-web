import * as React from "react";

import Sampling from "../sampling/sampling";
import SampleSize from "../sampling/sampleSize";
import RandomSample from "../sampling/randomSample";
import InfoSample from "../infoText/infoSample";
function Step3({ settings, setSettings }) {
  const [samplingValue, setSamplingValue] = React.useState("no.sampling");

  return (
    <React.Fragment>
      <h1>Choose Sampling</h1>
      <InfoSample />
      <div className="sampling">
        <Sampling
          setSamplingValue={setSamplingValue}
          samplingValue={samplingValue}
        />
      </div>
      {samplingValue === "normal.sampling" && (
        <div className="sampling">
          <SampleSize setSettings={setSettings} settings={settings} />
        </div>
      )}
      {samplingValue === "random.sampling" && (
        <div className="sampling">
          <RandomSample setSettings={setSettings} settings={settings} />
        </div>
      )}
    </React.Fragment>
  );
}

export default Step3;
