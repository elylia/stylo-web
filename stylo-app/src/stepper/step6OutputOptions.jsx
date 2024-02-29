import * as React from "react";
import SaveDistanceTable from "../output-options/SaveDistanceTable";
import SaveFrequencyTable from "../output-options/SaveFrequencyTable";
import SaveFeatureList from "../output-options/SaveFeatureList";
import InfoOutput from "../infoText/infoOutput";
import { Alert, Box, Button, CircularProgress } from "@mui/material";
import { LoadingButton } from "@mui/lab";

function Step6({ settings, setSettings, handleGetResults, handleBack }) {
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState(false);
  const handleClick = async () => {
    setLoading(true);
    setMessage(true);
    await handleGetResults();
    setLoading(false);
    setMessage(false);
  };

  return (
    <React.Fragment>
      {message && (
        <Alert
          severity="info"
          onClose={() => setMessage(null)}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            whiteSpace: "preserve",
            textAlign: "left",
          }}
        >
          Starting your analysis. Depending on your corpus and settings, this
          may take a while. Please be patient.
        </Alert>
      )}
      <div className="content">
        <h1>Choose additional Output Options</h1>
        <InfoOutput></InfoOutput>
        <div className="outputOptions">
          <SaveDistanceTable setSettings={setSettings} settings={settings} />
          <br />
          <SaveFrequencyTable setSettings={setSettings} settings={settings} />
          <br />
          <SaveFeatureList setSettings={setSettings} settings={settings} />
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

          <LoadingButton
            onClick={function (event) {
              handleClick();
            }}
            loading={loading}
            variant="contained"
            color="primary"
          >
            <span>
              <b>Get Results</b>
            </span>
          </LoadingButton>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default Step6;
