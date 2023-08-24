import * as React from "react";
import SaveDistanceTable from "../output-options/SaveDistanceTable";
import SaveFrequencyTable from "../output-options/SaveFrequencyTable";
import SaveFeatureList from "../output-options/SaveFeatureList";
import InfoOutput from "../infoText/infoOutput";
import { Box, Button, CircularProgress } from "@mui/material";
import { LoadingButton } from "@mui/lab";

function Step5({ settings, setSettings, handleGetResults, handleBack, error }) {
  const [loading, setLoading] = React.useState(false);
  const handleClick = async () => {
    setLoading(true);
    await handleGetResults();
    setLoading(false);
  };

  return (
    <React.Fragment>
      <div className="content">
        <h1>Choose Output Options</h1>
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
          <Button onClick={handleBack} variant="contained" color="primary">
            Back
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
            <span>Get Results</span>
          </LoadingButton>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default Step5;
