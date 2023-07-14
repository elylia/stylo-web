import * as React from "react";
import InfoDialog from "../dialog/infoDialog";

function InfoMisc() {
  const info = (
    <p>
      You can activate two optional features
      <br />
      <li>
        <b>Delete Pronouns:</b> Select if you want to omit pronouns in the
        analysis. This improves attribution in some languages
      </li>
      <li>
        <b>Preserve Case:</b> Select if you don't want all characters to be
        lowercased.
      </li>
    </p>
  );
  return (
    <React.Fragment>
      {InfoDialog("Choose miscellaneous features for the Analysis", info)}
    </React.Fragment>
  );
}
export default InfoMisc;
