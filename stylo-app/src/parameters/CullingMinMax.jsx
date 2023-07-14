import "../App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";

function CullingMinMax({ settings, setSettings }) {
  const handleChangeCullMin = (event) => {
    const newValue = event.target.value;
    setSettings({ ...settings, cullMin: newValue });
    onValueChange(Number(newValue));
  };
  const handleChangeCullMax = (event) => {
    const newValue = event.target.value;
    setSettings({ ...settings, cullMax: newValue });
    onValueChange(Number(newValue));
  };
  return (
    <>
      <div>
        {/*Culling Input*/}
        <TextField
          id="outlined-basic"
          label="Culling Minimum"
          variant="outlined"
          required
          size="small"
          style={{ maxWidth: "200px" }}
          type="number"
          value={settings.cullMin}
          onChange={handleChangeCullMin}
        />
        <TextField
          id="outlined-basic"
          label="Culling Maximum"
          variant="outlined"
          required
          size="small"
          style={{ maxWidth: "200px" }}
          type="number"
          value={settings.cullMax}
          onChange={handleChangeCullMax}
        />
      </div>
    </>
  );
}

export default CullingMinMax;
