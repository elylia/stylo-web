import { useState } from "react";

import "../App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";

function MfwIncr({ settings, setSettings }) {
  const handleChangeMfwIncr = (event) => {
    const newValue = event.target.value;
    setSettings({ ...settings, mfwIncr: Number(newValue) });
  };
  return (
    <>
      <div>
        {/*MFW Increment*/}
        <TextField
          id="outlined-basic"
          label="MFW Increment"
          variant="outlined"
          required
          size="small"
          type="number"
          value={settings.mfwIncr}
          onChange={handleChangeMfwIncr}
        />
      </div>
    </>
  );
}

export default MfwIncr;
