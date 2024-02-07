import * as React from "react";
import TextField from "@mui/material/TextField";

function NGramSize({ settings, setSettings }) {
  const handleChangeNGram = (event) => {
    let newValue = event.target.value;
    newValue = newValue.replace(/\D/g, "");
    setSettings({ ...settings, nGram: Number(newValue) });
  };
  return (
    <>
      <div>
        <TextField
          role="input field"
          id="outlined-basic"
          label="nGram Size"
          variant="outlined"
          size="small"
          value={settings.nGram}
          onChange={handleChangeNGram}
        />
      </div>
    </>
  );
}

export default NGramSize;
