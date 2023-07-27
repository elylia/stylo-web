import React from "react";
import BctPlot from "../plots/BCT/bct_plot";
import ScatterPlot from "../plots/scatter/scatterPlot";
import TsnePlot from "../plots/tsne/tsne_plot";
import { Box, Button } from "@mui/material";
import CaSlider from "../plots/CA/CASlider";
import ScatterSlider from "../plots/scatter/scatterSlider";
import InfoPlots from "../infoText/infoPlots";

function Results({ settings, url }) {
  console.log("settings:", settings);
  console.log("analysisType:", settings && settings.analysisType);

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
        <ScatterSlider url={url} settings={settings} />
      </React.Fragment>
    );
  } else if (settings.analysisType === "PCR") {
    return (
      <React.Fragment>
        <ScatterSlider url={url} settings={settings} />
      </React.Fragment>
    );
  } else if (settings.analysisType === "PCV") {
    return (
      <React.Fragment>
        <ScatterSlider url={url} settings={settings} />
      </React.Fragment>
    );
  } else if (settings.analysisType === "tSNE") {
    return (
      <React.Fragment>
        <TsnePlot url={url} settings={settings} />
      </React.Fragment>
    );
  }
}

export default Results;
