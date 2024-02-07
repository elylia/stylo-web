import * as React from "react";
import TextField from "@mui/material/TextField";

function MfwMinMax({ settings, setSettings }) {
  const handleChangeMfwMin = (event) => {
    let newValue = event.target.value;
    newValue = newValue.replace(/\D/g, "");
    setSettings({ ...settings, mfwMin: Number(newValue) });
  };
  const handleChangeMfwMax = (event) => {
    let newValue = event.target.value;
    newValue = newValue.replace(/\D/g, "");
    setSettings({ ...settings, mfwMax: Number(newValue) });
  };
  return (
    <>
      <div className="parameter">
        <TextField
          role="input field"
          id="outlined-basic"
          label="MFW Minimum"
          variant="outlined"
          size="small"
          style={{ maxWidth: "200px" }}
          value={settings.mfwMin}
          onChange={handleChangeMfwMin}
        />
        <TextField
          role="input field"
          id="outlined-basic"
          label="MFW Maximum"
          variant="outlined"
          size="small"
          style={{ maxWidth: "200px" }}
          value={settings.mfwMax}
          onChange={handleChangeMfwMax}
        />
      </div>
    </>
  );
}

export default MfwMinMax;
