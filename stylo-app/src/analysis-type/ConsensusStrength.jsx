import { useState } from "react";

import "../App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";

function ConsensusStrength({ settings, setSettings }) {
  const handleChangeConsensusStrength = (event) => {
    const newValue = event.target.value;
    setSettings({ ...settings, consensusStrength: newValue });
    onValueChange(Number(newValue));
  };
  return (
    <>
      <div>
        <TextField
          id="outlined-basic"
          label="Consensus Strength"
          variant="outlined"
          required
          size="small"
          type="number"
          inputProps={{ step: "0.1" }}
          value={settings.consensusStrength}
          onChange={handleChangeConsensusStrength}
        />
      </div>
    </>
  );
}

export default ConsensusStrength;
