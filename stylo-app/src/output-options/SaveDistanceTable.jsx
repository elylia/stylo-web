import * as React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

function SaveDistanceTable({ settings, setSettings }) {
  const handleChangeCase = (event) => {
    const newValue = event.target.checked;
    setSettings({ ...settings, distanceTable: newValue });
  };

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={settings.distanceTable}
              onChange={handleChangeCase}
            />
          }
          label="Save Distance Table(s)"
        />
      </FormGroup>
    </>
  );
}

export default SaveDistanceTable;
