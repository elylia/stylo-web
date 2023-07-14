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

function Step2({ settings, setSettings }) {
  return (
    <React.Fragment>
      <h1>Choose Features</h1>
      <InfoFeatures />

      <div className="Parameter">
        <Features setSettings={setSettings} settings={settings} />

        <NGramSize setSettings={setSettings} settings={settings} />
      </div>
      <h1>MFW Settings</h1>
      <InfoMFW />
      <div className="Parameter">
        <MfwMinMax setSettings={setSettings} settings={settings} />
        <MfwIncr setSettings={setSettings} settings={settings} />
        <StartAt setSettings={setSettings} settings={settings} />
      </div>
      <h1>Culling Settings</h1>
      <InfoCulling />
      <div className="Parameter">
        <CullingMinMax setSettings={setSettings} settings={settings} />
        <CullingIncr setSettings={setSettings} settings={settings} />
      </div>
      <h1>Miscellaneous</h1>
      <InfoMisc />

      <div className="Parameter">
        <DeletePronouns setSettings={setSettings} settings={settings} />
        <PreserveCase setSettings={setSettings} settings={settings} />
      </div>
    </React.Fragment>
  );
}

export default Step2;
