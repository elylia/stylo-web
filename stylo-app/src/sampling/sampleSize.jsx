import { useState } from "react";

import "../App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";

function SampleSize({ settings, setSettings }) {
  const handleChangeSampleSize = (event) => {
    const newValue = event.target.value;
    setSettings({ ...settings, sampleSize: newValue });
    onValueChange(Number(newValue));
  };
  return (
    <>
      <div>
        {/*Choose Sample Size*/}
        <TextField
          id="outlined-basic"
          label="Sample Size"
          variant="outlined"
          required
          size="small"
          type="number"
          value={settings.sampleSize}
          onChange={handleChangeSampleSize}
        />
      </div>
    </>
  );
}

export default SampleSize;
