import * as React from "react";
import InfoDialog from "../dialog/infoDialog";

function InfoFeatures() {
  const info = (
    <p>
      Please choose your features for the Analysis
      <br />
      <li>
        <b>Words:</b> Select this option to work on words
      </li>
      <li>
        <b>Characters:</b> Select this option to work on characters. Attention:
        Please choose an n-gram size above 1.
      </li>
      <li>
        <b>N-Gram Size:</b> This value determines the size of n for the n-gram
        (character or word n-grams depending on your previous selection). Change
        this to a value above 1 to work on clusters of n words / characters
      </li>
    </p>
  );
  return (
    <React.Fragment>
      {InfoDialog("Choose Features for the Analysis", info)}
    </React.Fragment>
  );
}
export default InfoFeatures;
