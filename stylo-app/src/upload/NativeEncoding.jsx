import { useState } from "react";

import "../App.css";
import * as React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

function NativeEncoding({ settings, setSettings }) {
  const handleChangeEncoding = (event) => {
    const newValue = event.target.checked;
    setSettings({ ...settings, encoding: newValue });
  };
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={settings.encoding}
              onChange={handleChangeEncoding}
            />
          }
          label="Native Encoding"
        />
      </FormGroup>
    </>
  );
}

export default NativeEncoding;
