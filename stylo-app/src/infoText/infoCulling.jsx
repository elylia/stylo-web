import * as React from "react";
import InfoDialog from "../dialog/infoDialog";
import ErrorIcon from "@mui/icons-material/Error";

function InfoCulling() {
  const info = (
    <p>
      Please choose your Culling-Settings for your Analysis.
      <br />
      <li>
        <b>Culling Minimum:</b> State the minimum culling setting. 0 means no
        words are omitted from the analysis. 50 means a word needs to appear in
        at least 50% of the texts to be included in the analysis. 100 means that
        only words appearing in all the texts will be included in the analysis.
      </li>
      <li>
        <b>Culling Maximum:</b> State the maximum culling setting. 0 means no
        words are omitted from the analysis. 50 means a word needs to appear in
        at least 50% of the texts to be included in the analysis. 100 means that
        only words appearing in all the texts will be included in the analysis.
      </li>
      <li>
        <b>Culling Increment:</b> State the increment added to the minimum
        culling setting for each subsequent analysis.
      </li>
      <ErrorIcon
        sx={{ fontSize: 14, marginRight: 1, marginTop: 1 }}
        color="primary"
      />
      If Culling Minimum and Culling Maximum isn't equal this will result in
      several analysis being performed.{" "}
      <b>
        You can then easily switch between the different settings and compare
        them!
      </b>
      <br />
    </p>
  );
  return (
    <React.Fragment>
      {InfoDialog("Choose Culling Settings for the Analysis", info)}
    </React.Fragment>
  );
}
export default InfoCulling;
