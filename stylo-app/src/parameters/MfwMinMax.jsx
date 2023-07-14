import { useState } from "react";

import "../App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";

function MfwMinMax({ settings, setSettings }) {
  const handleChangeMfwMin = (event) => {
    const newValue = event.target.value;
    setSettings({ ...settings, mfwMin: newValue });
    onValueChange(Number(newValue));
  };
  const handleChangeMfwMax = (event) => {
    const newValue = event.target.value;
    setSettings({ ...settings, mfwMax: newValue });
    onValueChange(Number(newValue));
  };
  return (
    <>
      <div>
        {/*MFW Input*/}
        <TextField
          id="outlined-basic"
          label="MFW Minimum"
          variant="outlined"
          required
          size="small"
          style={{ maxWidth: "200px" }}
          type="number"
          value={settings.mfwMin}
          onChange={handleChangeMfwMin}
        />
        <TextField
          id="outlined-basic"
          label="MFW Maximum"
          variant="outlined"
          required
          size="small"
          style={{ maxWidth: "200px" }}
          type="number"
          value={settings.mfwMax}
          onChange={handleChangeMfwMax}
        />
      </div>
    </>
  );
}

export default MfwMinMax;
