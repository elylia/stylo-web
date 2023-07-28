import { useState } from "react";

import "../App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";

function NGramSize({ settings, setSettings }) {
  const handleChangeNGram = (event) => {
    const newValue = event.target.value;
    setSettings({ ...settings, nGram: Number(newValue) });
  };
  return (
    <>
      <div>
        {/*nGram Size*/}
        <TextField
          id="outlined-basic"
          label="nGram Size"
          variant="outlined"
          size="small"
          type="number"
          value={settings.nGram}
          onChange={handleChangeNGram}
        />
      </div>
    </>
  );
}

export default NGramSize;
