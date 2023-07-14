import * as React from "react";
import Format from "../upload/Format";
import Language from "../upload/Language";
import NativeEncoding from "../upload/NativeEncoding";
import UploadButton from "../upload/UploadButton";
import InfoUpload from "../infoText/infoUpload";

function Step1({ settings, setSettings }) {
  return (
    <React.Fragment>
      <h1>Upload Data</h1>
      <InfoUpload />
      <div className="upload">
        <Format setSettings={setSettings} settings={settings} />
        <Language setSettings={setSettings} settings={settings} />
      </div>
      <div className="upload">
        <NativeEncoding />
      </div>
      <div className="upload">
        <UploadButton />
      </div>
    </React.Fragment>
  );
}

export default Step1;
