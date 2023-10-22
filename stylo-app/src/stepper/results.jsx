import React from "react";
import BctPlot from "../plots/BCT/bct_plot";
import TsneSlider from "../plots/tsne/tsneSlider";
import CaSlider from "../plots/CA/CASlider";
import ScatterSlider from "../plots/scatter/scatterSlider";

function Results({ settings, url, labelUrl }) {
  if (settings.analysisType === "CA") {
    return (
      <React.Fragment>
        <CaSlider url={url} settings={settings} />
      </React.Fragment>
    );
  } else if (settings.analysisType === "BCT") {
    return (
      <React.Fragment>
        <BctPlot url={url} settings={settings} />
      </React.Fragment>
    );
  } else if (settings.analysisType === "MDS") {
    return (
      <React.Fragment>
        <ScatterSlider url={url} settings={settings} labelUrl={labelUrl} />
      </React.Fragment>
    );
  } else if (settings.analysisType === "PCR") {
    return (
      <React.Fragment>
        <ScatterSlider url={url} settings={settings} labelUrl={labelUrl} />
      </React.Fragment>
    );
  } else if (settings.analysisType === "PCV") {
    return (
      <React.Fragment>
        <ScatterSlider url={url} settings={settings} labelUrl={labelUrl} />
      </React.Fragment>
    );
  } else if (settings.analysisType === "tSNE") {
    return (
      <React.Fragment>
        <TsneSlider url={url} settings={settings} />
      </React.Fragment>
    );
  }
}

export default Results;
