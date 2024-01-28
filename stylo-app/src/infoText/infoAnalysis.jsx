import * as React from "react";
import InfoDialog from "../dialog/infoDialog";
import { Divider } from "@mui/material";

function InfoAnalysis() {
  const info = (
    <p>
      Please choose your desired Analysis Type and the Distance Measure.
      <br />
      <br />
      <Divider textAlign="left">
        <b>Analysis Type</b>
      </Divider>
      <li>
        <b>Cluster Analysis:</b> Select to perform Cluster Analysis of Delta
        distance table.
      </li>
      <li>
        <b>Consensus Tree:</b> Select to perform multiple iterations of Cluster
        Analysis of Delta distance table resulting in a Bootstrap Consensus
        Tree.
      </li>
      <li>
        <b>MDS:</b> Select to perform Multidimensional Scaling of Delta distance
        table.
      </li>
      <li>
        <b>PCA corr.:</b> Select to perform Principal Components Analysis based
        on a correlation matrix of feature frequencies.
      </li>
      <li>
        <b>PCA cov.:</b> Select to perform Principal Components Analysis based
        on a covariance matrix of feature frequencies.
      </li>
      <li>
        <b>tSNE:</b> Select to perform a tSNE visualization (t-Distributed
        Stochastic Neighbor Embedding).
      </li>
      <br />
      <Divider textAlign="left">
        <b>Distance Measure</b>
      </Divider>
      <li>
        <b>Canberra:</b> Select Canberra Distance.
      </li>
      <li>
        <b>Classic Delta:</b> Select the Classic Delta measure as introduced by
        Burrows.
      </li>
      <li>
        <b>Cosine:</b> Select Cosine Distance (a classic distance in
        multidimensional methods).
      </li>
      <li>
        <b>Eder's Delta:</b> Select Eder's Delta (weights the frequencies, in
        order to decrease the influence of the less frequent words).
      </li>
      <li>
        <b>Eder's Simple:</b> Select Eder's Simple measure (the frequencies are
        transformed via square root).
      </li>
      <li>
        <b>Entropy:</b> Select Entropy Delta, or Manhattan applied to
        entropy-transformed dataset.
      </li>
      <li>
        <b>Euclidean:</b> Select Euclidean Distance (basic and the most
        natural).
      </li>
      <li>
        <b>Manhattan:</b> Select Manhattan Distance (obvious and well
        documented).
      </li>
      <li>
        <b>Min-Max:</b> Select Min-Max distance (aka Ruzicka distance).
      </li>
      <li>
        <b>Wurzburg:</b> Select Wurzburg (aka Cosine Delta), which seems to
        outperform other measures.
      </li>
    </p>
  );
  return (
    <React.Fragment>
      {InfoDialog("Choose Analysis Type and Distance Measure", info)}
    </React.Fragment>
  );
}
export default InfoAnalysis;
