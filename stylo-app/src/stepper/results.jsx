import React from "react";
import CaPlot from "../plots/CA/ca_plot";
import BctPlot from "../plots/BCT/bct_plot";
import PcaPlot from "../plots/scatter/pca_plot";
import TsnePlot from "../plots/tsne/tsne_plot";

function Results({ settings, url }) {
  console.log("settings:", settings);
  console.log("analysisType:", settings && settings.analysisType);

  if (settings.analysisType === "CA") {
    return (
      <React.Fragment>
        <CaPlot url={url} />
      </React.Fragment>
    );
  } else if (settings.analysisType === "BCT") {
    return (
      <React.Fragment>
        <BctPlot url={url} />
      </React.Fragment>
    );
  } else if (settings.analysisType === "MDS") {
    return (
      <React.Fragment>
        <PcaPlot url={url} />
      </React.Fragment>
    );
  } else if (settings.analysisType === "PCR") {
    return (
      <React.Fragment>
        <PcaPlot url={url} />
      </React.Fragment>
    );
  } else if (settings.analysisType === "PCV") {
    return (
      <React.Fragment>
        <PcaPlot url={url} />
      </React.Fragment>
    );
  } else if (settings.analysisType === "tSNE") {
    return (
      <React.Fragment>
        <TsnePlot url={url} />
      </React.Fragment>
    );
  }
}

export default Results;
