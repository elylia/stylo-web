import { Button, Tooltip } from "@mui/material";
import saveSvgAsPng from "save-svg-as-png";
import ImageIcon from "@mui/icons-material/Image";
import React from "react";
import { saveAs } from "file-saver";
import JSZip from "jszip";
function SavePng({ settings, mfw, cull }) {
  function createData(parameter, value) {
    return { parameter, value };
  }

  const rows = [
    createData("Parameter", "Value"),
    createData("Analysis Type", settings.analysisTypeLabel),
    createData(
      "Consensus Strength",
      settings.analysisType == "BCT"
        ? settings.consensusStrength
        : "Not applicable"
    ),
    createData("Distance Measure", settings.distanceMeasureLabel),
    createData("Upload Format", settings.formatLabel),
    createData("Language", settings.languageLabel),
    createData("Native Encoding", settings.encoding ? "On" : "Off"),
    createData("Features", settings.featuresLabel),
    createData("n-Gram Size", settings.nGram),
    createData("MFW Minimum", settings.mfwMin),
    createData("MFW Maximum", settings.mfwMax),
    createData("MFW Increment", settings.mfwIncr),
    createData("Start at freq. rank", settings.startAt),
    createData("Culling Minimum", settings.cullMin),
    createData("Culling Maximum", settings.cullMax),
    createData("Culling Increment", settings.cullIncr),
    createData("Delete Pronouns", settings.pronouns ? "On" : "Off"),
    createData("Preserve Case", settings.case ? "On" : "Off"),
    createData("Sampling", settings.samplingLabel),
    createData(
      "Random Sampling: Sample Number",
      settings.sampling == "random.sampling"
        ? settings.randomSample
        : "Not applicable"
    ),
    createData(
      "Normal Sampling: Sample Size",
      settings.sampling == "normal.sampling"
        ? settings.sampleSize
        : "Not applicable"
    ),
  ];

  let csvString = "";
  for (let i = 0; i < rows.length; i++) {
    csvString += rows[i].parameter + "," + rows[i].value + "\n";
  }
  const imageOptions = {
    scale: 5,
    encoderOptions: 1,
    backgroundColor: "white",
  };
  const handleClick = async () => {
    const uri = await saveSvgAsPng.svgAsPngUri(
      document.getElementById("svg-chart"),
      imageOptions
    );

    const imageData = uri.split(",");
    const image = imageData[1];

    let zip = new JSZip();
    zip.file(
      `${settings.analysisType}_${settings.distanceMeasure}_mfw${mfw}_cull${cull}.csv`,
      csvString
    );
    zip.file(
      `${settings.analysisType}_${settings.distanceMeasure}_mfw${mfw}_cull${cull}.png`,
      image,
      { base64: true }
    );
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(
      content,
      `${settings.analysisType}_${settings.distanceMeasure}_mfw${mfw}_cull${cull}.zip`
    );
  };
  return (
    <React.Fragment>
      <Tooltip title="Click to download Plot and Settings">
        <Button
          onClick={function (event) {
            handleClick();
          }}
          variant="contained"
          size="small"
          sx={{ gap: "4px" }}
        >
          <ImageIcon
            sx={{ fontSize: 15, verticalAlign: "sub" }}
            color="#ffffff"
          />
          SAVE
        </Button>
      </Tooltip>
    </React.Fragment>
  );
}

export default SavePng;
