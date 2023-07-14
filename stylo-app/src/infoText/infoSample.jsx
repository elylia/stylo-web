import * as React from "react";
import InfoDialog from "../dialog/infoDialog";

function InfoSample() {
  const info = (
    <p>
      Please choose if you want to use a sampling method on your data.
      <br />
      <li>
        <b>No Sampling:</b> No sampling procedure will be applied.
      </li>
      <li>
        <b>Normal Sampling:</b> Samples of equal sized will be prepared.
      </li>
      <li>
        <b>Random Sampling:</b> Samples will be prepared as a randomly chosen
        bag-of-words. This is a good option if your texts are significantly
        unequal in length.
      </li>
      <li>
        <b>Sample Size:</b>Specify the size for the samples (expressed in
        words). Will only show and is only applicable if Normal Sampling has
        been chosen!
      </li>
      <li>
        <b>Number of Random Samples:</b> Specify the number of random samples
        per text. Will only show and is only applicable if Random Sampling has
        been chosen!
      </li>
    </p>
  );
  return (
    <React.Fragment>
      {InfoDialog("Choose if you want to use sampling", info)}
    </React.Fragment>
  );
}
export default InfoSample;
