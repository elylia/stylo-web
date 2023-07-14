import { useState } from "react";
import "../App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete, Fab, FormControl, MenuItem } from "@mui/material";
import { useEffect } from "react";

const type = [
  { label: "Cluster Analysis", value: "CA" },
  { label: "Consensus Tree", value: "BCT" },
  { label: "MDS", value: "MDS" },
  { label: "PCA, corr.", value: "PCR" },
  { label: "PCA, cov.", value: "PCV" },
  {
    label: "tSNE",
    value: "tSNE",
  },
];
export default function AnalysisType({ settings, setSettings }) {
  const handleChangeAnalysisType = (event, newValue) => {
    setSettings({
      ...settings,
      analysisType: newValue.value,
      analysisTypeLabel: newValue.label,
    });
  };

  useEffect(() => {
    window.settings = {
      ...settings,
      analysisType: settings.analysisType,
    };
  }, [settings.analysisType]);

  return (
    <Autocomplete
      disablePortal
      id="ComboBoxType"
      options={type}
      sx={{ width: 300 }}
      size="small"
      value={type.find((option) => option.value === settings.analysisType)}
      onChange={handleChangeAnalysisType}
      ListboxProps={{
        style: { maxHeight: 300, maxWidth: 300, overflow: "scroll" },
      }}
      renderInput={(params) => <TextField {...params} label="Analysis Type" />}
    />
  );
}
