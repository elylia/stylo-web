import * as React from "react";
import Format from "../upload/Format";
import Language from "../upload/Language";
import NativeEncoding from "../upload/NativeEncoding";
import UploadButton from "../upload/UploadButton";
import InfoUpload from "../infoText/infoUpload";
import { Alert, Box, Button } from "@mui/material";
import DeleteButton from "../upload/DeleteButton";
import { useState } from "react";

function Step2({
  settings,
  setSettings,
  setActiveStep,
  setUploadedSuffix,
  uploadedSuffix,
}) {
  const [error, setError] = useState(null);

  let errorMessages = [];

  const handleNextUpload = () => {
    if (!uploadedSuffix) {
      errorMessages.push("You need to upload a corpus!");
      setError(errorMessages);
    }

    if (errorMessages.length === 0) {
      setActiveStep(2);
    }
  };

  const handleBackUpload = () => {
    setActiveStep(0);
    errorMessages = [];
    if (error) {
      setError(null);
    }
  };

  return (
    <React.Fragment>
      {error && (
        <Alert
          severity="error"
          onClose={() => setError(null)}
          sx={{
            position: "absolute",
            top: "400px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            whiteSpace: "preserve",
            textAlign: "left",
          }}
        >
          {error}
        </Alert>
      )}
      <div>
        <h1>Upload Corpus</h1>
        <InfoUpload />
      </div>
      <div className="content">
        <div className="upload">
          <Format setSettings={setSettings} settings={settings} />
          <Language setSettings={setSettings} settings={settings} />
        </div>
        <div className="upload">
          <NativeEncoding setSettings={setSettings} settings={settings} />
        </div>
        <div className="upload">
          <UploadButton setUploadedSuffix={setUploadedSuffix} />
        </div>
        <div className="upload">
          <DeleteButton
            setUploadedSuffix={setUploadedSuffix}
            uploadedSuffix={uploadedSuffix}
          />
        </div>
      </div>
      <div className="buttonsBoth">
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            onClick={handleBackUpload}
            variant="contained"
            color="primary"
          >
            <b>Back</b>
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />

          <Button
            onClick={handleNextUpload}
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

export default Step2;
