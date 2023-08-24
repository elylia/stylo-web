import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

function CullingIncr({ settings, setSettings }) {
  const handleChangeCullIncr = (event) => {
    let newValue = event.target.value;
    newValue = newValue.replace(/\D/g, "");
    setSettings({ ...settings, cullIncr: Number(newValue) });
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Culling Increment"
        variant="outlined"
        size="small"
        value={settings.cullIncr}
        onChange={handleChangeCullIncr}
      />
    </div>
  );
}

export default CullingIncr;
