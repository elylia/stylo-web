import * as React from "react";
import TextField from "@mui/material/TextField";

function MfwIncr({ settings, setSettings }) {
  const handleChangeMfwIncr = (event) => {
    let newValue = event.target.value;
    newValue = newValue.replace(/\D/g, "");
    setSettings({ ...settings, mfwIncr: Number(newValue) });
  };
  return (
    <>
      <div>
        <TextField
          id="outlined-basic"
          label="MFW Increment"
          variant="outlined"
          size="small"
          value={settings.mfwIncr}
          onChange={handleChangeMfwIncr}
        />
      </div>
    </>
  );
}

export default MfwIncr;
