import { useState } from "react";

import "../App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";

function MfwMinMax({ settings, setSettings }) {
  const handleChangeMfwMin = (event) => {
    const newValue = event.target.value;
    setSettings({ ...settings, mfwMin: Number(newValue) });
  };
  const handleChangeMfwMax = (event) => {
    const newValue = event.target.value;
    setSettings({ ...settings, mfwMax: Number(newValue) });
  };
  return (
    <>
      <div className="parameter">
        {/*MFW Input*/}
        <TextField
          id="outlined-basic"
          label="MFW Minimum"
          variant="outlined"
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
