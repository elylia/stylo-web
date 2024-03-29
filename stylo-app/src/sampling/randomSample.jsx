import * as React from "react";
import TextField from "@mui/material/TextField";

function RandomSample({ settings, setSettings }) {
  const handleChangeRandomSample = (event) => {
    const newValue = event.target.value;
    setSettings({ ...settings, randomSample: newValue });
    onValueChange(Number(newValue));
  };
  return (
    <>
      <div>
        <TextField
          role="input field"
          id="outlined-basic"
          label="Random Sample"
          variant="outlined"
          size="small"
          value={settings.randomSample}
          onChange={handleChangeRandomSample}
        />
      </div>
    </>
  );
}

export default RandomSample;
