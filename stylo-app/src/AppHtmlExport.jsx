import React, { useEffect, useState } from "react";
import ExportBCT from "./html-export/exportBCT";
import ExportCA from "./html-export/exportCA";
import ExportScatter from "./html-export/exportScatter";
import ExportTsne from "./html-export/exportTsne";

function AppHtmlExport() {
  const type = window.type;

  if (type === "CA") {
    return (
      <React.Fragment>
        <ExportCA />
      </React.Fragment>
    );
  } else if (type === "BCT") {
    return (
      <React.Fragment>
        <ExportBCT />
      </React.Fragment>
    );
  } else if (type === "MDS") {
    return (
      <React.Fragment>
        <ExportScatter />
      </React.Fragment>
    );
  } else if (type === "PCR") {
    return (
      <React.Fragment>
        <ExportScatter />
      </React.Fragment>
    );
  } else if (type === "PCV") {
    return (
      <React.Fragment>
        <ExportScatter />
      </React.Fragment>
    );
  } else if (type === "tSNE") {
    return (
      <React.Fragment>
        <ExportTsne />
      </React.Fragment>
    );
  }
}

export default AppHtmlExport;
