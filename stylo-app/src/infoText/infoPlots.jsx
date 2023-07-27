import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InfoDialogButton from "../dialog/infoDialogButton";

function InfoPlots({ settings }) {
  function createData(parameter, value) {
    return { parameter, value };
  }

  const rows = [
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

  const table = (
    <TableContainer component={Paper}>
      <Table
        sx={{
          height: "max-content",
        }}
        size="small"
        stickyHeader
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <h1>Overview</h1>
            </TableCell>
            <TableCell align="left">
              <h1>Value</h1>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              hover
            >
              <TableCell component="th" scope="row">
                {row.parameter}
              </TableCell>

              <TableCell align="left">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  return (
    <React.Fragment>
      <React.Fragment>{InfoDialogButton("Settings", table)}</React.Fragment>
    </React.Fragment>
  );
}

export default InfoPlots;
