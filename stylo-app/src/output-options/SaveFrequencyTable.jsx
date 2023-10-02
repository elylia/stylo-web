import "../App.css";
import * as React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

function SaveFrequencyTable({ settings, setSettings }) {
  const handleChangeCase = (event) => {
    const newValue = event.target.checked;
    setSettings({ ...settings, frequencyTable: newValue });
  };

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={settings.frequencyTable}
              onChange={handleChangeCase}
            />
          }
          label="Save Frequency Table(s)"
        />
      </FormGroup>
    </>
  );
}

export default SaveFrequencyTable;
