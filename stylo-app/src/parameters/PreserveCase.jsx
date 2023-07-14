import { useState } from "react";

import "../App.css";
import * as React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

function PreserveCase({ settings, setSettings }) {
  const handleChangeCase = (event) => {
    const newValue = event.target.value;
    setSettings({ ...settings, case: newValue });
    onValueChange(newValue);
  };
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={<Switch />}
          label="Preserve Case"
          value={settings.case}
          onChange={handleChangeCase}
          type="boolean"
        />
      </FormGroup>
    </>
  );
}

export default PreserveCase;
