import * as React from "react";
import InfoDialog from "../dialog/infoDialog";
import ErrorIcon from "@mui/icons-material/Error";

function InfoMFW() {
  const info = (
    <p>
      Please choose your MFW-Settings for your Analysis.
      <br />
      <li>
        <b>MFW Minimum:</b> Set the minimum number of most frequent words. The
        script will conduct its first analysis for the number of words specified
        here
      </li>
      <li>
        <b>MFW Maximum:</b> Set the maximum number of most frequent words. The
        script will conduct its final analysis for the number of words specified
        here
      </li>
      <li>
        <b>MFW Increment:</b> Set the increment added to the minimum number of
        most frequent words for each subsequent analysis.
      </li>
      <li>
        <b>Start at freq. rank:</b> Set the number of words from the top of the
        frequency list to skip in the analysis.
      </li>
      <ErrorIcon
        sx={{ fontSize: 14, marginRight: 1, marginTop: 1 }}
        color="primary"
      />
      If MFW Minimum and MFW Maximum isn't equal and you chose an Analysis Type
      other than the Bootstrap Consensus Tree this will result in several
      analysis being performed.{" "}
      <b>
        You can then easily switch between the different settings and compare
        them!
      </b>
      <br />
      <ErrorIcon
        sx={{ fontSize: 14, marginRight: 1, marginTop: 1 }}
        color="primary"
      />
      If you chose the Bootstrap Consensus Tree as your analysis type there need
      to be at least three iterations (e.g. MFW Minimum: 100, MFW Maximum: 300,
      MFW Increment: 100)
    </p>
  );
  return (
    <React.Fragment>
      {InfoDialog("Choose MFW Settings for the Analysis", info)}
    </React.Fragment>
  );
}
export default InfoMFW;
