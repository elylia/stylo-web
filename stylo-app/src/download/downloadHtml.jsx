import { Button, Tooltip } from "@mui/material";
import saveSvgAsPng from "save-svg-as-png";
import ImageIcon from "@mui/icons-material/Image";
import React from "react";
import CodeIcon from "@mui/icons-material/Code";
function SaveHTML({ settings, result }) {
  function createData(parameter, value) {
    return { parameter, value };
  }

  const handleClick = async () => {
    saveAs(
      await (await fetch("api/" + result.htmlExport)).blob(),
      settings.analysisType + "_html.zip"
    );
  };
  return (
    <React.Fragment>
      <Tooltip title="Click to download a HTML file of all your results including the sliders">
        <Button
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

export default SaveHTML;
