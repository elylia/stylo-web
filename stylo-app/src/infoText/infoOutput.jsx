import * as React from "react";
import InfoDialog from "../dialog/infoDialog";
import ErrorIcon from "@mui/icons-material/Error";

function InfoOutput() {
  const info = (
    <p>
      Please select additional output options if desired.
      <br />
      <li>
        <b>Save Distance Table(s):</b> Save final distance table(s) in separate
        text file(s).
      </li>
      <li>
        <b>Save Frequency Table(s):</b> Save frequency table(s) in separate text
        file(s).
      </li>
      <li>
        <b>Save Feature List(s):</b> Save final feature (word, n-gram) list(s),
        e.g. the words actually used in the analysis.
      </li>
      <ErrorIcon
        sx={{ fontSize: 14, marginRight: 1, marginTop: 1 }}
        color="primary"
      />
      The files will download automatically as soon as the analyses are
      finished.
    </p>
  );
  return (
    <React.Fragment>
      {InfoDialog("Choose additional Output Options", info)}
    </React.Fragment>
  );
}
export default InfoOutput;
