import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

function CullingIncr({ settings, setSettings }) {
  const handleChangeCullIncr = (event) => {
    const newValue = event.target.value;
    setSettings({ ...settings, cullIncr: Number(newValue) });
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Culling Increment"
        variant="outlined"
        size="small"
        type="number"
        inputProps={{ step: "10" }}
        value={settings.cullIncr}
        onChange={handleChangeCullIncr}
      />
    </div>
  );
}

export default CullingIncr;
