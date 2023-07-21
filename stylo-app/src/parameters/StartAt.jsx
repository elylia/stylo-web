import { useState } from "react";

import "../App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";

function StartAt({ settings, setSettings }) {
  const handleChangeStartAt = (event) => {
    const newValue = event.target.value;
    setSettings({ ...settings, startAt: Number(newValue) });
  };
  return (
    <>
      <div>
        {/*Start at freq. rank*/}
        <TextField
          id="outlined-basic"
          label="Start at freq. rank"
          variant="outlined"
          required
          size="small"
          type="number"
          value={settings.startAt}
          onChange={handleChangeStartAt}
        />
      </div>
    </>
  );
}

export default StartAt;
