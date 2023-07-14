import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

function CullingIncr({ settings, setSettings }) {
  const handleChangeCullIncr = (event) => {
    const newValue = event.target.value;
    setSettings({ ...settings, cullIncr: newValue });
    onValueChange(Number(newValue));
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Culling Increment"
        variant="outlined"
        required
        size="small"
        type="number"
        value={settings.cullIncr}
        onChange={handleChangeCullIncr}
      />
    </div>
  );
}

export default CullingIncr;
