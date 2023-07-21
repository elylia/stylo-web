import { useState } from "react";
import "../App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete, Fab, FormControl, MenuItem } from "@mui/material";

const distance = [
  { label: "Argamon", value: "argamon" },
  { label: "Canberra", value: "canberra" },
  { label: "Classic Delta", value: "delta" },
  { label: "Cosine", value: "cosine" },
  { label: "Eder's Delta", value: "eder" },
  { label: "Eder's Simple", value: "simple" },
  { label: "Entropy", value: "entropy" },
  { label: "Euclidean", value: "euclidean" },
  { label: "Manhattan", value: "manhattan" },
  { label: "Min-Max", value: "minmax" },
  { label: "Wurzburg / Cosine Delta", value: "wurzburg" },
];
export default function DistanceMeasure({ settings, setSettings }) {
  const handleChangeDistanceMeasure = (event, newValue) => {
    setSettings({
      ...settings,
      distanceMeasure: newValue.value,
      distanceMeasureLabel: newValue.label,
    });
  };
  return (
    <Autocomplete
      disablePortal
      id="ComboBoxType"
      required
      options={distance}
      sx={{ width: 300 }}
      size="small"
      ListboxProps={{
        style: { maxHeight: 200, maxWidth: 300, overflow: "scroll" },
      }}
      renderInput={(params) => (
        <TextField {...params} label="Distance Measure" />
      )}
      value={settings.distanceMeasureLabel}
      onChange={handleChangeDistanceMeasure}
    />
  );
}
