import { Button, Tooltip } from "@mui/material";
import React from "react";
import CodeIcon from "@mui/icons-material/Code";

function SaveHTMLBCT({ settings, result }) {
  const handleClick = async () => {
    saveAs(
      await (await fetch("api/" + result.htmlExport)).blob(),
      `${settings.analysisType}_${settings.distanceMeasure}_html.zip`
    );
  };
  return (
    <React.Fragment>
      <Tooltip title="Click to download a HTML file of all your results including the sliders">
        <Button
          role="button"
          onClick={function (event) {
            handleClick();
          }}
          variant="contained"
          size="small"
          sx={{ gap: "4px" }}
        >
          <CodeIcon
            sx={{ fontSize: 15, verticalAlign: "sub" }}
            color="#ffffff"
          />
          SAVE HTML
        </Button>
      </Tooltip>
    </React.Fragment>
  );
}

export default SaveHTMLBCT;
