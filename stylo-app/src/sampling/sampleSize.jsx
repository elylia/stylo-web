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
        <TextField
          id="outlined-basic"
          label="Sample Size"
          variant="outlined"
          required
          size="small"
          value={settings.sampleSize}
          onChange={handleChangeSampleSize}
        />
      </div>
    </>
  );
}

export default SampleSize;
