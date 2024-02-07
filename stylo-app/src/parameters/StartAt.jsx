import * as React from "react";
import TextField from "@mui/material/TextField";

function StartAt({ settings, setSettings }) {
  const handleChangeStartAt = (event) => {
    let newValue = event.target.value;
    newValue = newValue.replace(/\D/g, "");
    setSettings({ ...settings, startAt: Number(newValue) });
  };
  return (
    <>
      <div>
        <TextField
          role="input field"
          id="outlined-basic"
          label="Start at freq. rank"
          variant="outlined"
          size="small"
          value={settings.startAt}
          onChange={handleChangeStartAt}
        />
      </div>
    </>
  );
}

export default StartAt;
