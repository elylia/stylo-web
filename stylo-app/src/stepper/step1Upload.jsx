import * as React from "react";
import Format from "../upload/Format";
import Language from "../upload/Language";
import NativeEncoding from "../upload/NativeEncoding";
import UploadButton from "../upload/UploadButton";
import InfoUpload from "../infoText/infoUpload";
import { Box, Button } from "@mui/material";

function Step1({ settings, setSettings, handleNext, handleBack }) {
  return (
    <React.Fragment>
      <h1>Upload Data</h1>
      <InfoUpload />
      <div className="upload">
        <Format setSettings={setSettings} settings={settings} />
        <Language setSettings={setSettings} settings={settings} />
      </div>
      <div className="upload">
        <NativeEncoding setSettings={setSettings} settings={settings} />
      </div>
      <div className="upload">
        <UploadButton />
      </div>
      <div className="buttonsBoth">
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button onClick={handleBack} variant="contained" color="primary">
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />

          <Button onClick={handleNext} variant="contained" color="primary">
            Next
          </Button>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default Step1;
